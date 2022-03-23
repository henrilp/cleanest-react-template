import "../styles/globals.css";
import type { AppProps } from "next/app";

// module i18n
// can be dynamically ("lazily") imported via next "dynamic" property
import "../modules/i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
