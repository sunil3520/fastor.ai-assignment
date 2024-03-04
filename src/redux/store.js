import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { ProductReducer } from "./product/product.reduer";

const rootReducer = combineReducers({
 authReducer,
 ProductReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))