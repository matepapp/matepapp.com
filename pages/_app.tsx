import { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout";
import "../css/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
