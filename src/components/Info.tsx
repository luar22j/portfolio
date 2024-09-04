import informationData from "../../public/data/information.json";

interface InformationItem {
  title: string;
  description: string;
  years: string;
  technologies?: string[];
}

export const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {Object.entries(informationData).map(([key, item]) => {
        const { title, description, years, technologies } =
          item as InformationItem;
        return (
          <a
            key={key}
            className="flex justify-start gap-5 transition-all py-5 px-10 rounded-lg group hover:shadow bg-purple-900 bg-opacity-15 hover:bg-opacity-25 w-full cursor-pointer"
          >
            <div className="flex text-gray-400">
              <p className="text-center text-sm whitespace-nowrap">{years}</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <h2 className="text-[#E0E0E0] font-bold">{title}</h2>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#E0E0E0"
                    className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-justify text-gray-300 text-sm">
                  {description}
                </p>
                {technologies && (
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((name, index) => (
                      <button
                        key={index}
                        className="py-1 px-4 rounded-full text-gray-200 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg shadow-purple-500/50"
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Info;
