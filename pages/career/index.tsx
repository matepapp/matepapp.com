import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ButtonLink } from "../../components/button-link";
import { CareerCard } from "../../components/career-card";
import { JobMeta } from "../../types/job";
import { fetchJobMetaList } from "../../utils/fetch-jobs";

type CareerPageProps = {
  jobs: JobMeta[];
};

const CareerPage: NextPage<CareerPageProps> = ({ jobs }) => {
  const title = "Career | Mate Papp";

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Career</h1>
      <h2>Jobs</h2>
      <div className="grid grid-cols-1 gap-5 pt-4">
        {jobs.map(({ title, company, date, slug }, index) => (
          <CareerCard title={title} tag={date} subtitle={company} key={index}>
            <ButtonLink
              href="/career/[slug]"
              as={`/career/${slug}`}
              className="mt-4"
            >
              Read More
            </ButtonLink>
          </CareerCard>
        ))}
      </div>

      <h2>Education</h2>
      <div className="grid grid-cols-1 gap-5 pt-4">
        <CareerCard
          title="University"
          tag="2014 - 2018"
          subtitle="University Budapest University of Technology and Economics"
          description="Computer Engineering"
        >
          <i className="block text-sm text-gray-600 dark:text-gray-400">
            Major - Systems Engineering
          </i>
        </CareerCard>

        <CareerCard
          title="High School"
          tag="2010 - 2014"
          subtitle="Nagy Lajos Gimnázium Szombathely"
          description="Mathematics"
        />

        <h2>Events</h2>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { jobs: fetchJobMetaList() } };
};

export default CareerPage;
