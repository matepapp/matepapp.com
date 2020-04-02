import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../components/layout";
import "../css/tailwind.css";

const seoTitle = "Mate Papp";
const seoDescription = "Passionate Software Engineer";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="assets/favicon.ico" />
      </Head>
      <DefaultSeo
        title={seoTitle}
        titleTemplate="%s | Mate Papp"
        description={seoDescription}
        openGraph={{
          url: `https://matepapp.com${router.pathname}`,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: "assets/profile.jpeg",
              width: 1024,
              height: 1024,
              alt: "Mate Papp Profile"
            }
          ]
        }}
        twitter={{
          handle: "@matepappp",
          site: "@matepappp",
          cardType: "summary_large_image"
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
