import { FC, HTMLAttributes } from "react";
type CareerCardProps = {
  title: string;
  tag: string;
} & HTMLAttributes<HTMLDivElement>;

export const CareerCard: FC<CareerCardProps> = ({
  children,
  title,
  tag,
  className
}) => (
  <div className={"card dark:bg-black dark:shadow-outline-gray " + className}>
    <div className="flex flex-row flex-wrap items-center">
      <h3 className="mr-2 text-xl">{title}</h3>
      <div className="px-2 text-sm text-white bg-gray-400 rounded-md">
        {tag}
      </div>
    </div>
    {children}
  </div>
);
