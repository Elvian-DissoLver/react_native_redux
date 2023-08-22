import counterReducer from './reducers';
import {createStore} from 'redux';

const store = createStore(counterReducer);

export default store;
