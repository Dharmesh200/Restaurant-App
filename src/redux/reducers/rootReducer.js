import { combineReducers } from "redux"
import { cartReducer } from "./cartReducer"
import { restaurantReducer, menuCardReducer } from "./apiReducer"

const rootReducer = combineReducers({
    restaurantReducer,
    menuCardReducer,
    cartReducer
})

export default rootReducer