import { combineReducers } from "redux";
import { KhoaHocReducer } from "./KhoaHocReducer";

export const RootReducer = combineReducers({
    KhoaHocReducer: KhoaHocReducer
})