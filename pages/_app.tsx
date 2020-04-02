import { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout";
import "../css/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/assets/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
