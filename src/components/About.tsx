import { useEffect, useRef } from "react";

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col gap-5 text-justify about-hidden"
    >
      <h1 className="title-animation drop-shadow-[0_2px_10px_#4723a5] text-3xl font-bold text-gray-200">
        About
      </h1>

      <div className="text-animation text-gray-200">
        Hi, I'm a front-end developer with 1 year of experience in the field.
        I'm passionate about building, learning, and continuously growing in the
        tech industry. I'm eager to take on projects of all sizes and
        complexities, always aiming to improve my skills and deliver quality
        work. My goal is to keep advancing in this ever-evolving field, tackling
        new challenges and exploring innovative ideas. Let's create something
        amazing together!
      </div>
    </div>
  );
};

export default About;
