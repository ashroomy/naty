import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import State from "../src/context";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Natalia Fonseca</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Natalia Fonseca Coach de salud & fitness" />
        <meta name="author" content="Natalia Fonseca" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <State>
        <PreLoader />
        <Component {...pageProps} />
      </State>
    </>
  );
}
