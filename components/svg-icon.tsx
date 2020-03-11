import { FC } from "react";

export const SVGIconLink: FC<{ href: string }> = ({ children, href }) => (
  <a
    href={href}
    className="mx-2 duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 stroke-current stroke-2"
      fill="none"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </a>
);
