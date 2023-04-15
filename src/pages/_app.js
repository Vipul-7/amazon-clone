import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import FixedLayoutHeaders from "@/components/Layouts/FixedLayoutHeaders";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <FixedLayoutHeaders>
        {" "}
        <Component {...pageProps} />
      </FixedLayoutHeaders>
    </Provider>
  );
}
