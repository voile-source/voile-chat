import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleProvider hashPriority="high">
          <Component {...pageProps} />
        </StyleProvider>
      </PersistGate>
    </Provider>
  );
}
