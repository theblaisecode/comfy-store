import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "../reduxToolkit/mobileMenu/mobileMenuSlice";
import themeReducer from "../reduxToolkit/darkMode/darkModeSlice";
import colorReducer from "./product/productColorSlice";
import itemAmountReducer from "./product/productItemAmountSlice";
import cartReducer from "../reduxToolkit/cart/cartSlice";
import userReducer from "../reduxToolkit/user/userSlice";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileReducer,
    themeMode: themeReducer,
    color: colorReducer,
    itemAmount: itemAmountReducer,
    cartState: cartReducer,
    userState: userReducer
  },
});
