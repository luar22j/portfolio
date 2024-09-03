interface SectionProps {
  isDarkMode: boolean;
}

export const Section = ({ isDarkMode }: SectionProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-10">
        <h1
          className={`${
            isDarkMode
              ? "text-gray-100 drop-shadow-[0_2px_10px_#4723a5] hover:drop-shadow-[0_2px_15px_#4723a5]"
              : "text-black drop-shadow-[0_2px_1px_#a283f5] hover:drop-shadow-[0_2px_3px_#a283f5]"
          } text-7xl font-bold cursor-pointer transition-all`}
        >
          Luar Jaén
        </h1>
        <img
          className={`h-40 w-40 rounded-full border-2 object-cover cursor-pointer transition-all ${
            isDarkMode
              ? "border-white drop-shadow-[0_2px_10px_#4723a5] hover:drop-shadow-[0_2px_15px_#4723a5]"
              : "border-black drop-shadow-[0_2px_2px_#a283f5] hover:drop-shadow-[0_2px_4px_#a283f5]"
          }`}
          src="./img/profile.jpg"
          alt="Luar"
        />
      </div>
      <div className=" text-justify flex flex-col gap-5">
        <h2
          className={`${
            isDarkMode ? "text-gray-200" : "text-black"
          } text-3xl font-bold transition-all`}
        >
          Junior Front End Developer
        </h2>
        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-black"
          } text-lg transition-all`}
        >
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Section;
