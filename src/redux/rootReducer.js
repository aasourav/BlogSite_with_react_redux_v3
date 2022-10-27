import { combineReducers } from 'redux';
import articleReducer from './article/articleReducer';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
    articles: articleReducer,
    filter: filterReducer
})

export default rootReducer;

