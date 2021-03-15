import Link from "next/link";
import { FC } from "react";
import { FiHeart } from "react-icons/fi";
import { NavLink } from "./nav-link";

export const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <nav className="z-20 flex items-start w-full px-4 py-3 text-lg tracking-tight">
        <div className="flex flex-col justify-between flex-1 sm:items-center sm:flex-row">
          <Link href="/" passHref>
            <a>
              <img src="/assets/mp.png" alt="matepapp.com" className="w-8 h-8" />
            </a>
          </Link>

          <div className="flex items-center mt-3 overflow-auto sm:mt-0">
            <NavLink href="/about">about</NavLink>
            <NavLink href="/career">career</NavLink>
            <NavLink href="/thoughts">thoughts</NavLink>
            <NavLink href="/contact">contact</NavLink>
          </div>
        </div>
      </nav>
      <main className="flex flex-col flex-1 w-full px-4 mt-6 lg:max-w-3xl sm:max-w-lg sm:px-0">
        {children}
      </main>
      <footer className="flex flex-col items-center mt-8 mb-2 text-xs text-gray-500 dark:text-gray-400">
        <p>
          built with <FiHeart className="inline w-4 h-4 text-green-400" /> in Budapest,
          Hungary
        </p>
      </footer>
    </div>
  );
};
