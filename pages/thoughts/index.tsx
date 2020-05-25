import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ThoughtMeta } from "../../types/thought";
import { fetchThoughtMetaList } from "../../utils/fetch-thoughts";
import { SEO } from "../../utils/seo";
import { Card } from "../../components";
import Link from "next/link";

type ThoughtsPageProps = {
  thoughts: ThoughtMeta[];
};

const ThoughtsPage: NextPage<ThoughtsPageProps> = ({ thoughts }) => {
  const title = SEO.titleTemplate("Thoughts");

  console.log({ thoughts });

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Thoughts</h1>
      {thoughts.map(({ slug, title }) => (
        <Link passHref href={`/thoughts/${slug}`} key={slug}>
          <a>
            <Card>{title}</Card>
          </a>
        </Link>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { thoughts: fetchThoughtMetaList() } };
};

export default ThoughtsPage;
