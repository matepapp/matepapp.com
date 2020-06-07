import { FC } from "react";

export const Card: FC<{ className?: string }> = ({ children, className }) => (
  <div className={"px-5 py-4 rounded-lg" + className}>{children}</div>
);
