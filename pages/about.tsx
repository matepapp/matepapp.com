import { NextPage } from "next";
import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
  const title = "About | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>About</h1>
    </>
  );
};

export default AboutPage;
