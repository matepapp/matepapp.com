import { NextPage } from "next";
import { NextSeo } from "next-seo";

const ContactPage: NextPage = () => {
  const title = "Contact | Mate Papp";
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Contact</h1>
    </>
  );
};

export default ContactPage;
