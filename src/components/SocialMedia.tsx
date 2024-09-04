import socialMediaData from "../../public/data/social-media.json";

export const SocialMedia = () => {
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
        className="block"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        title={title}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewbox}
          fill="#E0E0E0"
          className="h-6 w-6 transition-transform duration-200 ease-in-out hover:scale-125 drop-shadow-[0_2px_1px_#4723a5] hover:drop-shadow-[0_2px_2px_#4723a5]"
          aria-hidden="true"
        >
          <path d={path}></path>
        </svg>
      </a>
    </li>
  );

  return (
    <div className="flex h-[100px]  sticky py-5 items-center justify-center md:justify-between gap-5">
      <ul className="flex space-x-7">
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
