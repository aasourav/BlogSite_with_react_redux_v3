import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
const appStore = createStore(rootReducer,composeWithDevTools())
export default appStore;