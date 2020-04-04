import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Job } from "../../types/job";
import { fetchJob, fetchJobMetaList } from "../../utils/fetch-jobs";

type JobPageProps = {
  job: Job;
};

const JobPage: NextPage<JobPageProps> = ({ job }) => {
  const { meta, content } = job;
  return (
    <>
      <div className="flex flex-row flex-wrap items-center">
        <h1 className="mr-4">{meta.title}</h1>
        <div className="px-2 text-white bg-gray-400 rounded-md">
          {meta.date}
        </div>
      </div>
      <div>{meta.company}</div>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const job = fetchJob(params.slug as string);
  return { props: { job } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const jobMetaList = fetchJobMetaList();

  return {
    paths: jobMetaList.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  };
};

export default JobPage;
