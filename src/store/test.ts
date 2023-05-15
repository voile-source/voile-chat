import store from ".";
import { setUser } from "./actions/user";

console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(setUser({ name: "voile", avatar: "123", phone: "1" }));

console.log(store.getState());
unsubscribe();
