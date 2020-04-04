import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { CareerCard } from "../components/career-card";
import { JobMeta } from "../types/job";
import { fetchJobMetaList } from "../utils/fetch-jobs";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { jobs: fetchJobMetaList() } };
};

type CareerPageProps = {
  jobs: JobMeta[];
};

const CareerPage: NextPage<CareerPageProps> = ({ jobs }) => {
  console.log({ jobs });
  const title = "Career | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Career</h1>
      <h2 className="mt-4 text-2xl font-bold">Jobs</h2>
      <div className="grid grid-cols-1 gap-6">
        {jobs.map(({ title, company, date, slug }, index) => (
          <CareerCard title={title} tag={date} key={index}>
            <p className="mt-1 text-lg text-gray-700 dark:text-gray-200">
              {company}
            </p>
            <Link href="/jobs/[slug]" as={`/jobs/${slug}`} passHref>
              <a className="block mt-4 text-green-400 default-transition hover:underline">
                Read More
              </a>
            </Link>
          </CareerCard>
        ))}
      </div>

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
