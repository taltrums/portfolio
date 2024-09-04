import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FallingNumbers from "../components/FallingNumbers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FallingNumbers />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
