import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

export default function AnimatedCounter({
  value,
  duration = 2,
  decimals = 0,
}: {
  value: number;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            }).format(value);
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, value, duration, decimals]);

  return <span ref={ref}>0</span>;
}
