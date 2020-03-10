import { FC } from "react";

export const Layout: FC = ({ children }) => (
  <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
    {children}
  </div>
);
