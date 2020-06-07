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
  description,
}) => (
  <div className="card">
    <div className="flex flex-row flex-wrap items-center">
      <h3 className="p-0 mr-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="px-2 text-sm font-medium text-white bg-gray-500 rounded-md">
        {tag}
      </div>
    </div>
    <p className="pt-1 text-lg font-medium text-gray-700 dark:text-gray-300">
      {subtitle}
    </p>
    {description && (
      <p className="pt-2 text-gray-600 dark:text-gray-400">{description}</p>
    )}
    {children}
  </div>
);
