import Layout from "../components/layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
