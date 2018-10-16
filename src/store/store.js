import { createStore , compose , applyMiddleware } from 'redux';
import HouseReducer from '../store/reducer';

const store = createStore(
    HouseReducer,
    compose(applyMiddleware())
);

export default store;