import "../assets/css/portal.css";

export const Profile = () => {
  return (
    <div className="flex flex-col sm:gap-5 gap-10">
      <div className="flex items-center justify-between sm:gap-[100px] gap-10">
        <h1 className="text-gray-100 drop-shadow-[0_2px_10px_#4723a5] hover:drop-shadow-[0_2px_15px_#4723a5] text-5xl md:text-7xl font-bold cursor-pointer transition-all">
          Luar Jaén
        </h1>
        <div className="img-animation relative">
          <div className="absolute inset-0 z-0">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="portal"></div>
            ))}
          </div>
          <img
            className="relative z-10 min-h-40 min-w-40 h-40 w-40 md:h-52 md:w-52 rounded-full object-cover cursor-pointer transition-all"
            src="./img/profile.jpg"
            alt="Luar"
          />
        </div>
      </div>
      <div className="md:text-justify flex flex-col gap-5">
        <h2 className="text-gray-200 md:text-3xl text-2xl font-bold transition-all">
          Junior Front End Developer
        </h2>
        <p className="text-gray-300 md:text-lg text transition-all">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Profile;
