import store from ".";
import { login } from "./actions/user";

console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(login({ name: "voile", avatar: "123", account: "1" }));
unsubscribe();
