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

      <div className="text-animation text-gray-400">
        Ut vel sodales velit, sed maximus dolor.{" "}
        <span className="text-white hover:text-purple-400 hover:drop-shadow-[0_0_10px_#4723a5] transition-all">
          <a href="">Nullam enim augue</a>
        </span>
        , bibendum ultrices quam vel, egestas accumsan libero. Vestibulum eu
        diam a elit ultricies egestas vel ac massa.{" "}
        <span className="text-white hover:text-purple-400 hover:drop-shadow-[0_0_10px_#4723a5] transition-all">
          <a href="">Phasellus ut elit lacus</a>
        </span>
        . Proin euismod nulla ac nisi molestie fringilla. Curabitur id eleifend
        arcu. Nunc sagittis molestie odio, id suscipit velit ullamcorper ac. In
        ullamcorper mauris nec semper varius. Duis quis enim diam.{" "}
        <span className="text-white hover:text-purple-400 hover:drop-shadow-[0_0_10px_#4723a5] transition-all">
          <a href="">Maecenas at egestas orci</a>
        </span>
        .
      </div>
    </div>
  );
};

export default About;
