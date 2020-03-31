import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { DarkModeSwitcher } from "./dark-mode-switcher";

const NavLink: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();
  const activeStyle = router.pathname === href && "text-green-400";

  return (
    <Link href={href} passHref>
      <a
        className={`pr-4 transition duration-300 ease-in-out hover:text-green-300
          ${activeStyle}`}
      >
        {children}
      </a>
    </Link>
  );
};

export const Layout: FC = ({ children }) => (
  <div className="flex justify-center min-h-screen antialiased text-gray-900 bg-gray-50 dark:text-gray-100 dark:bg-black">
    <nav className="fixed flex items-center justify-between w-full h-12 px-4 text-lg tracking-tight bg-gray-50 dark:bg-black">
      <Link href="/" passHref>
        <a>
          matepapp<span className="font-semibold text-green-400">.</span>com
        </a>
      </Link>

      <div className="flex items-center">
        <NavLink href="/about" passHref>
          about
        </NavLink>
        <NavLink href="/contact" passHref>
          contact
        </NavLink>
        <DarkModeSwitcher />
      </div>
    </nav>
    <main className="container flex items-center justify-center pt-12">
      {children}
    </main>
  </div>
);
