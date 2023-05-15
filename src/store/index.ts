import { legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

// const store = createStore(rootReducer);

const persitConfig = {
  key: "root",
  storage: storage,
};

const persist_reducers = persistReducer(persitConfig, rootReducer);
const store = createStore(persist_reducers);
const persistor = persistStore(store);

export { store, persistor };
