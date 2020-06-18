import Head from "next/head";

import "bootstrap/dist/css/bootstrap-grid.css";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Lukas Caldr</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
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
