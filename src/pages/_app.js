import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (location) {
      location.replace("https://www.recall-app.com" + location.pathname);
    }
  }, []);

  return <Component {...pageProps} />;
}
