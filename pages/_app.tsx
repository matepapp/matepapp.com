import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion/src/styles.css";
import { Layout } from "../components";
import "../css/notion.css";
import "../css/tailwind.css";
import { SEO } from "../utils/seo";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const url = SEO.url(router.pathname);

  return (
    <>
      <DefaultSeo
        canonical={url}
        description={SEO.description}
        openGraph={{
          url,
          description: SEO.description,
          images: [
            {
              url:
                "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/44932812_2120289778001346_6477928589340704768_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=DDiVel8Quo8AX-s2MIs&_nc_ht=scontent-vie1-1.xx&oh=c3a891698a897901cebda669450267d9&oe=5EABEE7D",
              width: 1024,
              height: 1024,
              alt: "Mate Papp Profile",
            },
          ],
        }}
        twitter={{
          handle: "@matepappp",
          site: "@matepappp",
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
