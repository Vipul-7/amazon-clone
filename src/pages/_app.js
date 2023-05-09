import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import FixedLayoutHeaders from "@/components/Layouts/FixedLayoutHeaders";

import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      NProgress.start();
    };

    const handleRouteChangeComplete = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, []);

  return (
    <Provider store={store}>
      {/* <NProgress color="#29D" height={3} /> */}
      <FixedLayoutHeaders>
        {" "}
        <Component {...pageProps} />
      </FixedLayoutHeaders>
    </Provider>
  );
}
