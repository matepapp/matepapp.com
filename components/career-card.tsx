import { FC } from "react";

type CareerCardProps = {
  title: string;
  tag: string;
  subtitle: string;
  description?: string;
};

export const CareerCard: FC<CareerCardProps> = ({
  children,
  title,
  tag,
  subtitle,
  description
}) => (
  <div className={"card dark:bg-black dark:shadow-outline-gray"}>
    <div className="flex flex-row flex-wrap items-center">
      <h3 className="p-0 mr-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="px-2 text-sm text-white bg-gray-400 rounded-md">
        {tag}
      </div>
    </div>
    <p className="pt-1 text-lg text-gray-700 dark:text-gray-300">{subtitle}</p>
    {description && (
      <p className="text-gray-600 uppercase dark:text-gray-400">
        {description}
      </p>
    )}
    {children}
  </div>
);
