import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { ThoughtMeta } from "../../types/thought";
import { fetchThoughtMetaList } from "../../utils/fetch-thoughts";
import { SEO } from "../../utils/seo";

type ThoughtsPageProps = {
  thoughts: ThoughtMeta[];
};

const ThoughtsPage: NextPage<ThoughtsPageProps> = ({ thoughts }) => {
  const title = SEO.titleTemplate("Thoughts");

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Thoughts</h1>
      {thoughts.map(({ Slug, Name }) => (
        <Link passHref href={`/thoughts/${Slug}`} key={Slug}>
          <a>
            <div className="card">{Name}</div>
          </a>
        </Link>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const thoughts = await fetchThoughtMetaList();
  return { props: { thoughts } };
};

export default ThoughtsPage;
