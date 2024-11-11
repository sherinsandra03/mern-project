import { combineReducers } from "redux"; // Corrected import
import cartReducer from "./cart/cartSlice";
import productReducer from "./menu/productSlice";
import addressReducer from "./userInfo/addressSlice";


const rootreducer = combineReducers(
    { 
        cart: cartReducer,
        products: productReducer,
        adress: addressReducer
     }
);

export default rootreducer;
