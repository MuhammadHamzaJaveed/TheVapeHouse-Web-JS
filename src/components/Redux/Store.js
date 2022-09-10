import { applyMiddleware, combineReducers, createStore } from "redux";
import { Reducer, Reducerprodata, ReducerDepData, ReducerAllProducts,ReducerVegProducts, ReducerChangeName } from "./Reducer";
import thunk from "redux-thunk";

 const rootReducer = combineReducers({
     Reducer, Reducerprodata, ReducerDepData, ReducerAllProducts,ReducerVegProducts, ReducerChangeName
 })

 export const store = createStore(rootReducer, applyMiddleware(thunk))
