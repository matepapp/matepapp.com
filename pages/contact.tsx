import { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter
} from "react-icons/fi";

const ContactPage: NextPage = () => {
  const title = "Contact | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Contact</h1>
      <div className="pt-4 text-xl text-gray-700 dark:text-gray-300">
        Feel free to reach me out anywhere! Preferably on twitter or email, but
        you can find me on almost every major social media (except TikTok).
      </div>
      <ul className="grid grid-cols-1 gap-3 pt-8 text-lg list-none sm:grid-cols-2 lg:grid-cols-3">
        <li className="p-0 m-0 card dark:bg-black hover:text-gray-100 default-transition dark:shadow-outline-gray hover:bg-green-400">
          <a
            href="mailto:matepapp@icloud.com"
            className="block w-full h-full px-4 py-3"
          >
            <FiMail className="inline w-8 h-8 mr-3" />
            mail
          </a>
        </li>

        <li className="p-0 m-0 card dark:bg-black hover:text-gray-100 default-transition dark:shadow-outline-gray twitter">
          <a
            href="https://twitter.com/matepappp"
            className="block w-full h-full px-4 py-3"
          >
            <FiTwitter className="inline w-8 h-8 mr-3" />
            twitter
          </a>
        </li>

        <li className="p-0 m-0 card dark:bg-black hover:text-gray-100 default-transition dark:shadow-outline-gray instagram">
          <a
            href="https://instagram.com/pappmate"
            className="block w-full h-full px-4 py-3"
          >
            <FiInstagram className="inline w-8 h-8 mr-3" />
            instagram
          </a>
        </li>

        <li className="p-0 m-0 card dark:bg-black hover:text-gray-100 default-transition dark:shadow-outline-gray facebook">
          <a
            href="https://facebook.com/pappmatesz"
            className="block w-full h-full px-4 py-3"
          >
            <FiFacebook className="inline w-8 h-8 mr-3" />
            facebook
          </a>
        </li>

        <li className="p-0 m-0 card dark:bg-black hover:text-gray-100 default-transition hover:bg-gray-500 dark:shadow-outline-gray">
          <a
            href="https://github.com/matepapp"
            className="block w-full h-full px-4 py-3"
          >
            <FiGithub className="inline w-8 h-8 mr-3" />
            github
          </a>
        </li>

        <li className="p-0 m-0 card dark:bg-black hover:text-gray-100 linkedin default-transition dark:shadow-outline-gray">
          <a
            href="https://www.linkedin.com/in/matepapp/"
            className="block w-full h-full px-4 py-3"
          >
            <FiLinkedin className="inline w-8 h-8 mr-3" />
            linkedin
          </a>
        </li>
      </ul>
    </>
  );
};

export default ContactPage;
