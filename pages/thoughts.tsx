import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { SEO } from "../utils/seo";

const ThoughtsPage: NextPage = () => {
  const title = SEO.titleTemplate("Thoughts");

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Thoughts</h1>
      <div className="pt-4 text-xl text-gray-700 dark:text-gray-300">
        One of my goals is to write articles, blog posts or anything that I find
        interesting to share. Until this point, I procrastinated more than I
        should but in the future, I'll take more time to focus on writing.
      </div>
    </>
  );
};

export default ThoughtsPage;
