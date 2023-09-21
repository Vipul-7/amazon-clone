import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import FixedLayoutHeaders from "@/components/Layouts/FixedLayoutHeaders";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/util/http";

import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  NProgress.configure({ showSpinner: false });

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

  useEffect(() => {
    const checkTokenExpiry = () => {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        const { exp } = jwtDecode(token); //

        const currentTimeInSeconds = Math.floor(Date.now() / 1000);

        const tokenExpirationInSeconds = exp;

        const remainingTimeInSeconds =
          tokenExpirationInSeconds - currentTimeInSeconds;

        if (remainingTimeInSeconds <= 0) {
          // Token has expired, log the user out
          localStorage.removeItem("jwtToken");
          // Redirect to the login page or perform any other logout actions
        }
      }
    };

    const tokenCheckInterval = setInterval(checkTokenExpiry, 300000); // 5 minutes
    return () => clearInterval(tokenCheckInterval);
  }, []);

  const routesWithoutHeader = ["/auth/login", "/auth/signup"];
  const shouldShowHeader = !routesWithoutHeader.includes(router.pathname);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {shouldShowHeader ? (
          <FixedLayoutHeaders>
            <Component {...pageProps} />
          </FixedLayoutHeaders>
        ) : (
          <Component {...pageProps} />
        )}
      </QueryClientProvider>
    </Provider>
  );
}
