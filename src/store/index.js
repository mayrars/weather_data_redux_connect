import { createStore } from 'redux';
import { city } from './../reducers/city'
const initialState = {
    city: 'Mexico,mx'
}
export const store = createStore(city, initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())