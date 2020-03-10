import { FC } from "react";

const FeatherIconLink: FC<{ href: string }> = ({ children, href }) => (
  <a
    href={href}
    className="mx-1 duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 stroke-current stroke-1"
      fill="none"
      stroke-linejoin="round"
    >
      {children}
    </svg>
  </a>
);

const IndexPage = () => (
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold">Mate Papp</h1>
    <h2 className="text-xl text-gray-300">Software Engineer</h2>
    <div className="text-gray-200 text-md">
      Co-Founder and CTO{" "}
      <a
        href="https://cogito.study"
        className="transition duration-300 ease-in-out hover:text-yellow-300"
      >
        @cogito.study
      </a>
    </div>
    <div className="flex mt-4">
      <FeatherIconLink href="https://instagram.com/pappmate">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </FeatherIconLink>
      <FeatherIconLink href="https://facebook.com/pappmatesz">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </FeatherIconLink>
    </div>
  </div>
);

export default IndexPage;
