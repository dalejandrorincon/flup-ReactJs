import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movieReducer from "../reducer/index.js";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    movieReducer,
    composeEnhacer(applyMiddleware(thunk))
    )


export default store;