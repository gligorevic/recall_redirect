import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    if (location) {
      location.replace("https://www.recall-app.com/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Recall Wiki</title>
        <meta name="description" content="Recall Wiki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}></main>
    </>
  );
}
