import { useEffect, useRef } from "react";
import "../assets/css/global.css";

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="fade-in -mt-10 text-white text-justify drop-shadow-lg"
    >
      Designed by Luar. Built with React and Tailwind CSS.
    </div>
  );
};

export default Footer;
