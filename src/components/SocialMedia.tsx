import socialMediaData from "../../public/data/social-media.json";

interface SocialMediaProps {
  isDarkMode: boolean;
}

export const SocialMedia = ({ isDarkMode }: SocialMediaProps) => {
  const svg = (
    key: string,
    href: string,
    label: string,
    title: string,
    viewbox: string,
    path: string
  ) => (
    <li key={key}>
      <a
        className="block hover:text-slate-200"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        title={title}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewbox}
          fill={isDarkMode ? "white" : "black"}
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d={path}></path>
        </svg>
      </a>
    </li>
  );

  return (
    <div>
      <ul className="flex space-x-4">
        {Object.entries(socialMediaData).map(([key, value]) =>
          svg(
            key,
            value.href,
            value.label,
            value.title,
            value.viewbox,
            value.path
          )
        )}
      </ul>
    </div>
  );
};

export default SocialMedia;
