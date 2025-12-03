import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  characters?: string;
}

const DecryptedText = ({
  text,
  className = "",
  speed = 50,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text.split("").map(() => characters[Math.floor(Math.random() * characters.length)]).join(""));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return char;
            if (char === " ") return " ";
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed, characters]);

  return (
    <span ref={ref} className={cn("font-mono", className)}>
      {displayText}
    </span>
  );
};

export default DecryptedText;
