import type { AppProps } from "next/app";
import Head from "next/head";

import "./../styles/app.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Estalo</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, minimal-ui"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
