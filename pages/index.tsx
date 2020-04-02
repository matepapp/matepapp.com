import { NextSeo } from "next-seo";
import { SVGIconLink } from "../components/svg-icon";

const IndexPage = () => {
  return (
    <>
      <NextSeo title="Mate Papp" openGraph={{ title: "Mate Papp" }} />
      <div className="flex flex-col justify-center max-w-md m-4 overflow-hidden rounded-lg shadow-2xl md:max-w-4xl md:flex-row md:items-center">
        <img
          src="/assets/profile.jpeg"
          alt="profile"
          className="dark:rounded-lg md:w-1/2"
        />
        <div className="flex flex-col m-4 md:ml-6 md:w-1/2">
          <h1 className="text-5xl font-bold">Mate Papp</h1>
          <div className="text-xl text-gray-700 dark:text-gray-200">
            Co-Founder and CTO{" "}
            <a
              href="https://cogito.study"
              className="text-yellow-400 transition duration-300 ease-in-out hover:underline"
            >
              @cogito.study
            </a>
          </div>
          <p className="mt-4 leading-relaxed">
            Crafting amazing digital experiences with GraphQL, React,
            TypeScript, NextJS, Gatsby, Swift.
          </p>
          <div className="flex mt-6">
            <SVGIconLink href="https://twitter.com/matepappp">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </SVGIconLink>
            <SVGIconLink href="https://instagram.com/pappmate">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </SVGIconLink>
            <SVGIconLink href="https://facebook.com/pappmatesz">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </SVGIconLink>
            <SVGIconLink href="https://github.com/matepapp">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </SVGIconLink>
            <SVGIconLink href="https://www.linkedin.com/in/matepapp/">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </SVGIconLink>
            <SVGIconLink href="mailto:matepapp@icloud.com">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </SVGIconLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
