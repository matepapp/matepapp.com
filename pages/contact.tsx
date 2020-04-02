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
      <h2 className="text-xl text-gray-700 dark:text-gray-300">
        Feel free to reach me out anywhere! Preferably on twitter or email, but
        you can find me on almost every major social media (except TikTok).
      </h2>
      <ul className="mx-8 my-6">
        <li>
          <a
            href="mailto:matepapp@icloud.com"
            className="text-lg hover:text-green-400"
          >
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
