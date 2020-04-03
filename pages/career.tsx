import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { FC, HTMLAttributes } from "react";

type CareerCardProps = {
  title: string;
  tag: string;
} & HTMLAttributes<HTMLDivElement>;

const CareerCard: FC<CareerCardProps> = ({
  children,
  title,
  tag,
  className
}) => (
  <div className={"card dark:shadow-outline-gray " + className}>
    <div className="flex flex-row flex-wrap items-center">
      <h3 className="mr-2 text-xl">{title}</h3>
      <div className="px-2 text-sm text-white bg-gray-400 rounded-md">
        {tag}
      </div>
    </div>
    {children}
  </div>
);

const CareerPage: NextPage = () => {
  const title = "Career | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Career</h1>
      <h2 className="mt-4 text-2xl font-bold">Jobs</h2>
      <CareerCard title="Junior iOS Developer" tag="July 2016 - Feb 2017">
        <p className="mt-1 text-lg text-gray-700 dark:text-gray-200">
          POSSIBLE CEE
        </p>
        <a className="mt-4 default-transition underline-green-400">Read More</a>
      </CareerCard>

      <h2 className="mt-8 text-2xl font-bold">Education</h2>
      <CareerCard title="University" tag="2014 - 2018" className="mt-4">
        <p className="mt-1 text-gray-700 dark:text-gray-200">
          University Budapest University of Technology and Economics Computer
          <i className="block">Engineering BSc Major - Systems Engineering</i>
        </p>
      </CareerCard>

      <CareerCard title="High School" tag="2010 - 2014" className="mt-4">
        <p className="mt-1 text-gray-700 dark:text-gray-200">
          Nagy Lajos Gimnázium Szombathely <i className="block">Mathematics</i>
        </p>
      </CareerCard>

      <h2 className="mt-4 text-2xl font-bold">Workshop</h2>
    </>
  );
};

export default CareerPage;
