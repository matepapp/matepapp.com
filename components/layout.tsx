import { FC } from "react";

export const Layout: FC = ({ children }) => (
  <div className="antialiased text-gray-100 flex items-center justify-center min-h-screen bg-black">
    {children}
  </div>
);
