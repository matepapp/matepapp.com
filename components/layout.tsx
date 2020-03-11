import { FC } from "react";

export const Layout: FC = ({ children }) => (
  <div className="flex items-center justify-center min-h-screen antialiased text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-black">
    {children}
  </div>
);
