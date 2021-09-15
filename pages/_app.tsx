import Head from "next/head";

import "@fontsource/roboto";
import "@fontsource/roboto/700.css";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Lukas Caldr</title>
    </Head>

    <Component {...pageProps} />

    <style jsx global>{`
      html,
      body {
        font-family: "Roboto", sans-serif;
        margin: 0;
      }

      #__next {
        min-height: 100vh;
      }
    `}</style>
  </>
);

export default App;
