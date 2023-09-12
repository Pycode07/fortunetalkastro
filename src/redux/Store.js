import {createStore} from 'redux';
import appReducer from '../redux/appReducer'
export const store = createStore(appReducer);
