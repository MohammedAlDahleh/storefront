import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from "./categories";
import products from "./products";
// if we have more one reducer
const reducers = combineReducers({
    categories: categories,
    products: products
})
// if we have one reducer
// const reducers = combineReducers({})
const store = () => {
   
    return createStore(reducers, composeWithDevTools());

}

export default store();