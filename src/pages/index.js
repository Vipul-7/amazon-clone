import NavBelt from "@/components/Navigation Bars/NavBelt";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBelt />
    </>
  );
}
