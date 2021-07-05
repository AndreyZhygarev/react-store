import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../index";

const middleWare = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middleWare);
