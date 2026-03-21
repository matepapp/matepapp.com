import { ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  showArrowIcon: boolean;
};

export function ButtonLink({
  children,
  className,
  href,
  showArrowIcon,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={clsx(
        "text-link group inline-flex items-center gap-2 font-medium tracking-tight",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
      {showArrowIcon ? (
        <ArrowRightIcon className="inline-block h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      ) : null}
    </a>
  );
}
