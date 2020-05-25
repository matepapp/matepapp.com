import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Thought } from "../../types/thought";
import { fetchThought, fetchThoughtMetaList } from "../../utils/fetch-thoughts";
import { SEO } from "../../utils/seo";

type ThoughtPageProps = {
  thought: Thought;
};

const ThoughtPage: NextPage<ThoughtPageProps> = ({ thought }) => {
  const { meta, content } = thought;
  const title = SEO.titleTemplate(meta.title);

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <div className="flex flex-row flex-wrap items-center">
        <h1 className="mr-4">{meta.title}</h1>
        <div className="px-2 my-1 text-white bg-gray-500 rounded-md">
          {meta.createdAt}
        </div>
      </div>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const thought = fetchThought(params.slug as string);
  return { props: { thought } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const thoughtMetaList = fetchThoughtMetaList();

  return {
    paths: thoughtMetaList.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default ThoughtPage;
