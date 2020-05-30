import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createEncryptor from "redux-persist-transform-encrypt";
import { userActiveReducer } from "../reducers";

const encryptor = createEncryptor({
    secretKey: "my-super-secret-key"
});

const persistConfig = {
    key: "primary",
    storage,
    transforms: [encryptor]
};

const rootReducer = combineReducers({
    userActive: userActiveReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor }
};