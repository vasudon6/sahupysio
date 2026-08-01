import { GoogleGenAI, Type } from "@google/genai";

export default async function handler(req: any, res: any) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, history = [], apiKey, websiteContext } = req.body;
    
    // Initialize Gemini AI
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'vercel-build',
        }
      }
    });

    const clinicContext = `You are a highly smart, helpful, and professional AI Assistant for Sahu Physiotherapy Clinic.
CRITICAL LANGUAGE RULE: You MUST strictly match the exact language the user writes in.
- Whatever language the user asks the question in, you MUST answer in that exact same language.
- For example: if they ask in Hindi, answer in Hindi. If English, answer in English. If Hinglish, answer in Hinglish. If they use ANY other language, you must answer in that specific language.

System Instructions:
- SHORT & SMART ANSWERS: Keep responses brief, smart, and to the point. Avoid long paragraphs.
- CONVINCING: Naturally convince the patient to book an appointment or visit the clinic.
- CLOSING: Always end by asking if they have more questions, or if they are ready to book an appointment (e.g. "Do you have any other questions? If you are ready, I can provide the booking form right now.").
- PROFESSIONAL TONE: Be polite and professional. Never sound cheap.
- URGENCY: If the patient mentions severe pain, urge them to book an appointment immediately and visit the clinic.
- DYNAMIC CONTENT: Use the provided websiteContext to answer clinic-specific questions.
- Scope: Only answer questions related to the clinic and physiotherapy treatments.`;

    const contents = history.map((msg: any) => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));
    contents.push({ role: 'user', parts: [{ text: message }] });
    
    let currentAi = ai;
    if (apiKey) {
      currentAi = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'vercel-build',
          }
        }
      });
    }
    
    let finalContext = clinicContext;
    finalContext += `\n\nमहत्वपूर्ण बुकिंग निर्देश:
अगर यूज़र अपॉइंटमेंट लेना चाहता है (जैसे "I want to book appointment", "अपॉइंटमेंट बुक करें", "book", "yes book it" आदि), तो उनसे जानकारी मांगने के बजाय सीधे 'show_booking_form' टूल को कॉल करें। यह टूल चैट में एक छोटा सा फॉर्म खोल देगा जिससे वे अपनी जानकारी भर सकेंगे।`;
    
    if (websiteContext) {
      finalContext += "\n\nHere is the current dynamic website content:\n" + websiteContext;
    }

    const bookAppointmentTool = {
      name: "show_booking_form",
      description: "Show a booking form in the chat when the user wants to book an appointment.",
      parameters: {
        type: Type.OBJECT,
        properties: {
          intent: {
            type: Type.STRING,
            description: "Set this to 'book_appointment' when calling this tool."
          }
        },
      }
    };

    const response = await currentAi.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: finalContext,
        temperature: 0.7,
        tools: [{ functionDeclarations: [bookAppointmentTool] }]
      },
    });

    let aiBooking = null;
    let replyText = response.text || "";

    if (response.functionCalls && response.functionCalls.length > 0) {
      const call = response.functionCalls[0];
      if (call.name === "show_booking_form") {
        res.json({ reply: "कृपया नीचे दिए गए फॉर्म को भरकर अपनी अपॉइंटमेंट बुक करें:", showBookingForm: true });
        return;
      }
    }

    res.json({ reply: replyText, aiBooking });

  } catch (error: any) {
    if (error?.status === 429 || error?.message?.includes('Quota exceeded') || error?.message?.includes('429')) {
      console.warn("Gemini Quota Exceeded (429)");
      return res.status(429).json({ error: "API limit reached. Please try again in a few minutes." });
    }
    if (error?.status === 503 || error?.message?.includes('503') || error?.message?.includes('high demand')) {
      console.warn("Gemini High Demand (503)");
      return res.status(503).json({ error: "The AI model is currently experiencing high demand. Please try again in a few moments." });
    }
    console.error("Chat error:", error);
    res.status(500).json({ error: "Sorry, there was an error processing your request." });
  }
}
