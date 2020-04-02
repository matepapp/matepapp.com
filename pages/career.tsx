import { NextPage } from "next";
import { NextSeo } from "next-seo";

const CareerPage: NextPage = () => {
  const title = "Career | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Career</h1>
    </>
  );
};

export default CareerPage;
