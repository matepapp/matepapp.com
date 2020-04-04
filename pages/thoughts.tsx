import { NextPage } from "next";
import { NextSeo } from "next-seo";

const ThoughtsPage: NextPage = () => {
  const title = "Thoughts | Mate Papp ";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Thoughts</h1>
      <div className="pt-4 text-xl text-gray-700 dark:text-gray-300">
        Promise, that I'll write articles, blog post or anything that I find
        interesting to share. When I do, this will be the output of my brain.
      </div>
    </>
  );
};

export default ThoughtsPage;
