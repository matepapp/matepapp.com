import { FC } from "react";

export const Card: FC<HTMLDivElement> = ({ children, className }) => (
  <div
    className={
      "px-5 py-4 rounded-lg shadow-md dark:shadow-outline-gray" + className
    }
  >
    {children}
  </div>
);
