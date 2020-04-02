import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { IoIosHeart } from "react-icons/io";

const AboutPage: NextPage = () => {
  const title = "About | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>About</h1>
      <p>
        My name is Mate Papp, I'm a Software Engineer & Designer, Entrepreneur,
        currently based in Budapest, Hungary.
      </p>

      <h2 className="mt-3 text-2xl font-bold">Skills</h2>

      <h2 className="mt-3 text-2xl font-bold">Hobbies</h2>

      <h2 className="mt-3 text-2xl font-bold">
        Stuff I
        <IoIosHeart className="inline w-6 h-6 mx-1 mb-1 text-red-500" />
        to use
      </h2>

      <h3 className="mt-2 text-xl font-bold">Programming</h3>
      <div className="grid grid-cols-2 gap-3 mt-1 sm:grid-cols-3">
        <a
          href="https://www.typescriptlang.org"
          className="tech-link"
          style={{ backgroundColor: "#294E80", color: "#e7e7e7" }}
        >
          TypeScript
        </a>
        <a
          href="https://swift.org"
          className="tech-link"
          style={{ backgroundColor: "#f05138", color: "#111" }}
        >
          Swift
        </a>
        <a
          href="https://graphql.org"
          className="text-white tech-link"
          style={{ backgroundColor: "#E10098" }}
        >
          GraphQL
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Functional_reactive_programming"
          className="text-white tech-link"
          style={{ backgroundColor: "#c2185b" }}
        >
          Rx
        </a>
        <a
          href="https://www.javascript.com/"
          className="text-black tech-link"
          style={{ backgroundColor: "rgb(247, 223, 30)" }}
        >
          JavaScript
        </a>
      </div>

      <h3 className="mt-5 text-xl font-bold">Frameworks</h3>
      <div className="grid grid-cols-2 gap-3 mt-1 sm:grid-cols-3">
        <a
          href="https://reactjs.org"
          className="tech-link"
          style={{ color: "#61dafb", backgroundColor: "#20232a" }}
        >
          React
        </a>
        <a
          href="https://developer.apple.com/xcode/swiftui/"
          className="text-black tech-link"
          style={{ backgroundColor: "rgb(1, 216, 251)" }}
        >
          SwiftUI
        </a>
        <a
          href="https://nextjs.org/"
          className="text-white tech-link"
          style={{ backgroundColor: "#111" }}
        >
          NextJS
        </a>
        <a
          href="https://nodejs.org/en/"
          className="text-white tech-link"
          style={{ backgroundColor: "#026e00" }}
        >
          Node.js
        </a>
        <a
          href="https://prisma.io/"
          className="text-white tech-link"
          style={{ backgroundColor: "rgb(12, 52, 75)" }}
        >
          Prisma
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          className="text-white tech-link"
          style={{ backgroundColor: "#663399" }}
        >
          Gatsby
        </a>
        <a
          href="https://serverless.com/"
          className="text-white tech-link"
          style={{ backgroundColor: "#fd5750" }}
        >
          Serverless
        </a>
        <a
          href="https://jamstack.org/"
          className="text-white tech-link"
          style={{ backgroundColor: "#00c7b7" }}
        >
          JAMStack
        </a>
        <a
          href="https://www.apollographql.com/"
          className="text-white tech-link"
          style={{ backgroundColor: "#3f20ba" }}
        >
          Apollo
        </a>
        <a
          href="https://tailwindcss.com/"
          className="text-white bg-teal-500 tech-link"
        >
          TailwindCSS
        </a>
        <a
          href="https://hasura.io/"
          className="text-white tech-link"
          style={{ backgroundColor: "#001934" }}
        >
          Hasura
        </a>
        <a
          href="https://storybook.js.org/"
          className="text-white tech-link"
          style={{ backgroundColor: "rgb(255, 71, 133)" }}
        >
          Storybook JS
        </a>
        <a
          href="https://reactnative.dev/"
          className="tech-link"
          style={{ color: "#61dafb", backgroundColor: "#20232a" }}
        >
          React Native
        </a>
        <a
          href="https://firebase.google.com/"
          className="tech-link"
          style={{ backgroundColor: "rgb(251, 192, 45)", color: "#424242" }}
        >
          Firebase
        </a>
      </div>

      <h3 className="mt-5 text-xl font-bold">Tools</h3>
      <div className="grid grid-cols-2 gap-3 mt-1 sm:grid-cols-3">
        <a
          href="https://www.figma.com/"
          className="text-white bg-black tech-link"
        >
          Figma
        </a>
        <a
          href="https://www.notion.so/"
          className="tech-link"
          style={{ backgroundColor: "#fffefc", color: "#111" }}
        >
          Notion
        </a>
        <a
          href="https://slack.com/"
          className="text-white tech-link"
          style={{ backgroundColor: "#611f69" }}
        >
          Slack
        </a>
        <a
          href="https://code.visualstudio.com/"
          className="text-white tech-link"
          style={{ backgroundColor: "#444" }}
        >
          VSCode
        </a>
        <a
          href="https://www.iterm2.com/"
          className="text-white tech-link"
          style={{
            backgroundColor: "rgb(33, 42, 47)",
            color: "rgb(14, 232, 40)"
          }}
        >
          iTerm
        </a>
        <a
          href="https://www.netlify.com/"
          className="text-white tech-link"
          style={{ backgroundColor: "#00ad9f" }}
        >
          Netlify
        </a>
        <a
          href="https://zeit.co/"
          className="text-white tech-link"
          style={{ backgroundColor: "#111" }}
        >
          Zeit Now
        </a>
      </div>
    </>
  );
};

export default AboutPage;
