import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eva Decker</title>
        <meta
          name="description"
          content="Eva Decker is a Product Designer based in Brooklyn, New York."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Eva Decker is a Product Designer based in Brooklyn, New York. She
          designs and codes interfaces for the web.
        </h1>
      </main>
    </div>
  );
};

export default Home;
