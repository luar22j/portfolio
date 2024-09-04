import projectsData from "../../public/data/projects.json";

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  tecnologies: string[];
}

export const Project = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {Object.entries(projectsData as unknown as Record<string, Project>).map(
        ([key, { name, description, image, link, tecnologies }]) => (
          <a
            href={link}
            target="_blank"
            key={key}
            className="flex justify-start gap-5 transition-all py-5 px-10 rounded-lg group hover:shadow bg-purple-900 bg-opacity-15 hover:bg-opacity-25 w-full"
          >
            <div className="flex flex-col gap-5 w-full">
              <div className="aspect-video relative overflow-hidden rounded-lg transition-all shadow-[1px_1px_3px_#4723a5] w-full">
                <img
                  className="w-full h-full object-cover"
                  src={`./img/projects/${image}`}
                  alt={name}
                />
              </div>
              <div className="flex flex-col flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-gray-200 break-words">
                    {name}
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#E0E0E0"
                    className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-justify text-sm">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {tecnologies.map((name, index) => (
                    <button
                      key={index}
                      className="py-1 px-4 rounded-full text-gray-200 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg shadow-purple-500/50"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </a>
        )
      )}
    </div>
  );
};

export default Project;
