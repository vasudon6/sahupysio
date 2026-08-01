import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface AnimatedHeadingProps extends HTMLMotionProps<"h1"> {
  as?: "h1" | "h2" | "h3";
}

export default function AnimatedHeading({ children, className = "", as = "h2", ...props }: AnimatedHeadingProps) {
  const Component = motion[as] as any;
  
  // Remove animation props if they exist to force our modern animation
  const { initial, animate, whileInView, transition, variants, ...safeProps } = props as any;

  return (
    <Component 
      {...safeProps}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1], // Custom cinematic easing
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
