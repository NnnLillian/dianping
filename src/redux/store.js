import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./modules";

let store;

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_) {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
} else {

    store = createStore(rootReducer, applyMiddleware(thunk));
}


export default store;