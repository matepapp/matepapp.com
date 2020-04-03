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
      <h2 className="mt-2 text-xl text-gray-700 dark:text-gray-300">
        Feel free to reach me out anywhere! Preferably on twitter or email, but
        you can find me on almost every major social media (except TikTok).
      </h2>
      <ul className="grid grid-cols-1 gap-5 mt-1 sm:grid-cols-2 lg:grid-cols-3">
        <li className="text-lg text-white card default-transition dark:shadow-outline-gray hover:bg-green-400">
          <a href="mailto:matepapp@icloud.com" className="block w-full h-full">
            <FiMail className="contact-social-icon" />
            mail
          </a>
        </li>

        <li className="mt-3">
          <a href="https://twitter.com/matepappp" className="text-lg twitter">
            <FiTwitter className="contact-social-icon" />
            twitter
          </a>
        </li>

        <li className="mt-3">
          <a
            href="https://instagram.com/pappmate"
            className="text-lg instagram"
          >
            <FiInstagram className="contact-social-icon" />
            instagram
          </a>
        </li>

        <li className="mt-3">
          <a
            href="https://facebook.com/pappmatesz"
            className="text-lg facebook"
          >
            <FiFacebook className="contact-social-icon" />
            facebook
          </a>
        </li>

        <li className="mt-3">
          <a
            href="https://github.com/matepapp"
            className="text-lg hover:text-gray-500"
          >
            <FiGithub className="contact-social-icon" />
            github
          </a>
        </li>

        <li className="mt-3">
          <a
            href="https://www.linkedin.com/in/matepapp/"
            className="text-lg linkedin"
          >
            <FiLinkedin className="contact-social-icon" />
            linkedin
          </a>
        </li>
      </ul>
    </>
  );
};

export default ContactPage;
