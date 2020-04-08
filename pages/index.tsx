import { NextSeo } from "next-seo";
import { ButtonLink } from "../components";
import { SEO } from "../utils/seo";

const IndexPage = () => {
  const { title } = SEO;

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Hey, I'm Mate! 👋🏻</h1>
      <div className="text-xl text-gray-700 uppercase dark:text-gray-300">
        Software Engineer
      </div>

      <div className="grid grid-cols-1 gap-5 mt-8">
        <div className="card dark:bg-black dark:shadow-outline-gray">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            I like to refer to myself as &frac12; Software Engineer, &frac14;
            Designer, and &frac14; Entrepreneur who is focusing on building
            products that people love to use. I'm passionate about exploring new
            things and staying up-to-date with the latest hot trends and topics
            by attending (and occasionally speaking at) meetups, conferences and
            listening to podcasts.
          </p>
          <ButtonLink href="/about" className="mt-4">
            More About Me
          </ButtonLink>
        </div>

        <div className="card dark:bg-black dark:shadow-outline-gray">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            I've started my career as an iOS Developer then discovered the
            beauty of the Web & Serverless world with GraphQL and the JAMStack.
            Over the years, I've successfully worked on several client projects
            in agencies and as a freelancer. Recently, I've co-founded and built
            a startup,
            <a
              href="https://cogito.study"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-green-400 transition duration-200 ease-in-out hover:text-green-300"
            >
              Cogito
            </a>
            .
          </p>
          <ButtonLink href="/career" className="mt-4">
            My Career
          </ButtonLink>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
