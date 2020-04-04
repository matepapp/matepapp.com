import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { IoIosHeart } from "react-icons/io";

const AboutPage: NextPage = () => {
  const title = "About | Mate Papp";

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>About</h1>
      <h2>My Story</h2>
      <div className="flex flex-col pt-4 sm:flex-row">
        <img
          src="/assets/profile.jpeg"
          className="rounded-lg shadow-md sm:w-40 sm:h-40"
        />
        <p className="mt-4 sm:mt-0 sm:ml-4">
          My name is Mate Papp, I'm 24 year old a Software Engineer, Designer,
          Entrepreneur, currently based in Budapest, Hungary.
        </p>
      </div>

      <h2>
        Stuff I
        <IoIosHeart className="inline w-6 h-6 mx-1 mb-1 text-red-500" />
      </h2>

      <h3 className="pt-2 text-gray-800 dark:text-gray-200">Programming</h3>
      <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
        <a
          href="https://www.typescriptlang.org"
          className="card card-transition"
          style={{ backgroundColor: "#294E80", color: "#e7e7e7" }}
        >
          TypeScript
        </a>
        <a
          href="https://swift.org"
          className="card card-transition"
          style={{ backgroundColor: "#f05138", color: "#111" }}
        >
          Swift
        </a>
        <a
          href="https://graphql.org"
          className="text-white card card-transition"
          style={{ backgroundColor: "#E10098" }}
        >
          GraphQL
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Functional_reactive_programming"
          className="text-white card card-transition"
          style={{ backgroundColor: "#c2185b" }}
        >
          Rx
        </a>
        <a
          href="https://www.javascript.com/"
          className="text-black card card-transition"
          style={{ backgroundColor: "rgb(247, 223, 30)" }}
        >
          JavaScript
        </a>
      </div>

      <h3 className="text-gray-800 dark:text-gray-200">Frameworks</h3>
      <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
        <a
          href="https://reactjs.org"
          className="card card-transition"
          style={{ color: "#61dafb", backgroundColor: "#20232a" }}
        >
          React
        </a>
        <a
          href="https://developer.apple.com/xcode/swiftui/"
          className="text-black card card-transition"
          style={{ backgroundColor: "rgb(1, 216, 251)" }}
        >
          SwiftUI
        </a>
        <a
          href="https://nextjs.org/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#111" }}
        >
          NextJS
        </a>
        <a
          href="https://nodejs.org/en/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#026e00" }}
        >
          Node.js
        </a>
        <a
          href="https://prisma.io/"
          className="text-white card card-transition"
          style={{ backgroundColor: "rgb(12, 52, 75)" }}
        >
          Prisma
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#663399" }}
        >
          Gatsby
        </a>
        <a
          href="https://serverless.com/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#fd5750" }}
        >
          Serverless
        </a>
        <a
          href="https://jamstack.org/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#00c7b7" }}
        >
          JAMStack
        </a>
        <a
          href="https://www.apollographql.com/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#3f20ba" }}
        >
          Apollo
        </a>
        <a
          href="https://tailwindcss.com/"
          className="text-white bg-teal-500 card card-transition"
        >
          TailwindCSS
        </a>
        <a
          href="https://hasura.io/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#001934" }}
        >
          Hasura
        </a>
        <a
          href="https://storybook.js.org/"
          className="text-white card card-transition"
          style={{ backgroundColor: "rgb(255, 71, 133)" }}
        >
          Storybook JS
        </a>
        <a
          href="https://reactnative.dev/"
          className="card card-transition"
          style={{ color: "#61dafb", backgroundColor: "#20232a" }}
        >
          React Native
        </a>
        <a
          href="https://firebase.google.com/"
          className="card card-transition"
          style={{ backgroundColor: "rgb(251, 192, 45)", color: "#424242" }}
        >
          Firebase
        </a>
      </div>

      <h3 className="text-gray-800 dark:text-gray-200">Tools</h3>
      <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
        <a
          href="https://www.figma.com/"
          className="text-white bg-black card card-transition"
        >
          Figma
        </a>
        <a
          href="https://www.notion.so/"
          className="card card-transition"
          style={{ backgroundColor: "#fffefc", color: "#111" }}
        >
          Notion
        </a>
        <a
          href="https://slack.com/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#611f69" }}
        >
          Slack
        </a>
        <a
          href="https://code.visualstudio.com/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#444" }}
        >
          VSCode
        </a>
        <a
          href="https://www.iterm2.com/"
          className="text-white card card-transition"
          style={{
            backgroundColor: "rgb(33, 42, 47)",
            color: "rgb(14, 232, 40)"
          }}
        >
          iTerm
        </a>
        <a
          href="https://www.netlify.com/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#00ad9f" }}
        >
          Netlify
        </a>
        <a
          href="https://zeit.co/"
          className="text-white card card-transition"
          style={{ backgroundColor: "#111" }}
        >
          Zeit Now
        </a>
      </div>

      <h2>Hobbies</h2>
      <ul className="grid grid-cols-1 gap-3 list-none sm:grid-cols-2 lg:grid-cols-3">
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          listening podcasts
        </li>
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          reading
        </li>
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          being with friends & family
        </li>
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          functional training
        </li>
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          cycling
        </li>
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          playing boardgames
        </li>
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          cooking
        </li>
        <li className="m-0 card dark:bg-black dark:shadow-outline-gray">
          tasting craftbeer & coffee
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
