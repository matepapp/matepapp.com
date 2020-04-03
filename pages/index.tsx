import { NextSeo } from "next-seo";
import Link from "next/link";

const IndexPage = () => {
  const title = "Mate Papp";

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1 className="sm:mt-10">Hey, I'm Mate! 👋🏻</h1>
      <h2 className="mt-2 text-xl text-gray-700 uppercase dark:text-gray-300">
        Software Engineer & Designer
      </h2>

      <p className="mt-6 text-lg text-gray-800 sm:text-xl dark:text-gray-200">
        Focusing on building apps that people love to use by crafting the best
        user experience. I'm trying to stay up-to-date with the latest hot
        trends and topics by visiting meetups, conferences and listening
        podcasts.
      </p>
      <Link href="/about" passHref>
        <a className="mt-2 text-xl default-transition underline-green-400">
          More about me...
        </a>
      </Link>

      <p className="mt-8 text-lg text-gray-800 sm:text-xl dark:text-gray-200">
        I started my career as an iOS Developer then discovered the Web &
        Serverless world. Successfully worked on several client projects and
        co-founded a startup.
      </p>
      <Link href="/career" passHref>
        <a className="mt-2 text-xl default-transition underline-green-400">
          The rest is history...
        </a>
      </Link>
    </>
  );
};

export default IndexPage;
