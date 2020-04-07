import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";
import { FiChevronRight } from "react-icons/fi";

export const ButtonLink: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  className,
  href,
  as,

  children,
}) => (
  <Link href={href} as={as} passHref>
    <a
      className={
        "inline-flex items-center px-3 py-1 bg-green-100 text-green-500 duration-200 ease-in-out transform hover:scale-105 rounded-lg dark:text-green-200 dark:bg-green-900 text-green-400 " +
        className
      }
    >
      {children}
      <FiChevronRight className="inline-block w-5 h-5 ml-1" />
    </a>
  </Link>
);
