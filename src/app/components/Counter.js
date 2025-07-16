"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ target, suffix = "", duration = 1000 }) {
  const [count, setCount] = useState(0);
  const ref = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!ref?.ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(target.toString().replace(/\D/g, ""));
          const stepTime = Math.abs(Math.floor(duration / end));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.ref.current);

    return () => {
      if (ref?.ref?.current) observer.unobserve(ref.ref.current);
    };
  }, [target, duration]);

  return (
    <span ref={ref.ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
