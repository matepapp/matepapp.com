import { NextSeo } from "next-seo";
import Link from "next/link";

const IndexPage = () => {
  const title = "Mate Papp";

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1 className="sm:mt-10">Hey, I'm Mate! 👋🏻</h1>
      <h2 className="text-xl text-gray-700 uppercase dark:text-gray-300">
        Software Engineer & Designer
      </h2>

      <div className="mt-5 card dark:bg-black dark:shadow-outline-gray">
        <p className="text-lg text-gray-800 sm:text-xl dark:text-gray-200">
          Focusing on building apps that people love to use by crafting the best
          user experience. I'm trying to stay up-to-date with the latest hot
          trends and topics by visiting meetups, conferences and listening
          podcasts.
        </p>
        <Link href="/about" passHref>
          <a className="block mt-4 text-xl text-green-400 hover:underline">
            More about me...
          </a>
        </Link>
      </div>

      <div className="mt-8 card dark:bg-black dark:shadow-outline-gray">
        <p className="text-lg text-gray-800 sm:text-xl dark:text-gray-200">
          I started my career as an iOS Developer then discovered the Web &
          Serverless world. Successfully worked on several client projects and
          co-founded a startup.
        </p>
        <Link href="/career" passHref>
          <a className="block mt-4 text-xl text-green-400 hover:underline">
            The rest is history...
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;
