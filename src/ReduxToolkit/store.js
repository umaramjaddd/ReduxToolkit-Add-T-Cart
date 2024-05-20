import { configureStore } from '@reduxjs/toolkit';
import cartReducer2 from './cartSlice';


const myStore2 = configureStore({
    reducer:{
        cart2: cartReducer2,
    },
});

export default myStore2;