import { NextPage } from "next";
import { NextSeo } from "next-seo";

const CareerPage: NextPage = () => {
  const title = "Career | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Career</h1>
      <h2>Jobs</h2>
      <h2>Education</h2>
      <h2>Workshop</h2>
    </>
  );
};

export default CareerPage;
