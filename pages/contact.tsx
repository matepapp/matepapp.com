import { NextPage } from "next";
import { NextSeo } from "next-seo";

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Contact | Mate Papp"
        openGraph={{ title: "Contact | Mate Papp" }}
      />
      <h1>Contact</h1>
    </>
  );
};

export default ContactPage;
