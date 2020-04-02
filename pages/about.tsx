import { NextPage } from "next";
import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About | Mate Papp"
        openGraph={{ title: "About | Mate Papp" }}
      />
      <h1>About</h1>
    </>
  );
};

export default AboutPage;
