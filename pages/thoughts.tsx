import { NextPage } from "next";
import { NextSeo } from "next-seo";

const ThoughtsPage: NextPage = () => {
  const title = "Thoughts | Mate Papp ";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Thoughts</h1>
    </>
  );
};

export default ThoughtsPage;
