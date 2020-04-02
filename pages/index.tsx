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

      <div className="mt-8 text-xl text-gray-800 dark:text-gray-200">
        I'm passionate about building apps that people love to use by crafting
        the best user experience with code.
      </div>
      <Link href="/about" passHref>
        <a className="mt-2 text-xl transition duration-200 ease-in-out underline-green-400">
          Read more about it!
        </a>
      </Link>

      <div className="mt-8 text-xl text-gray-800 dark:text-gray-200">
        Started my career as an iOS Developer then discovered the web &
        serverless world. Successfully worked on several client's projects and
        co-founded a startup.
      </div>
      <Link href="/career" passHref>
        <a className="mt-2 text-xl transition duration-200 ease-in-out underline-green-400">
          The rest is history...
        </a>
      </Link>
    </>
  );
};

export default IndexPage;
