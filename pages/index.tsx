import { NextSeo } from "next-seo";

const IndexPage = () => {
  const title = "Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1 className="text-7xl">Hi! 👋🏻</h1>
    </>
  );
};

export default IndexPage;
