import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { BlockMapType, NotionRenderer } from "react-notion";
import { ThoughtMeta } from "../../types/thought";
import { fetchThought, fetchThoughtMetaList } from "../../utils/fetch-thoughts";
import { SEO } from "../../utils/seo";

type ThoughtPageProps = {
  thought: {
    content: BlockMapType;
    meta: ThoughtMeta;
  };
};

const ThoughtPage: NextPage<ThoughtPageProps> = ({ thought }) => {
  const { meta, content } = thought;
  const title = SEO.titleTemplate(meta.Name);

  // TODO: SEO Description
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <div className="flex flex-row flex-wrap items-center">
        <h1 className="mr-4">{meta.Name}</h1>
        <div className="px-2 my-1 text-white bg-gray-500 rounded-md">
          {meta.CreatedAt}
        </div>
      </div>
      {content && <NotionRenderer blockMap={content} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const thoughtMetaList = await fetchThoughtMetaList();
  const meta = thoughtMetaList.find((thought) => thought.Slug === slug);
  const content = await fetchThought(meta.id);

  return {
    props: {
      thought: { meta, content },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const thoughtMetaList = await fetchThoughtMetaList();

  return {
    paths: thoughtMetaList.map(({ id, Slug }) => ({
      params: {
        id,
        slug: Slug,
      },
    })),
    fallback: false,
  };
};

export default ThoughtPage;
