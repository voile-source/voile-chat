import Layout from "./layout";
import store from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
