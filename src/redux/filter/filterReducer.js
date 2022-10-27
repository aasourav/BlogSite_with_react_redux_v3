import { BYAUTHOR, BYCATEGORY, SEARCH } from "./actionType";
import initState from "./initialState";

const filterReducer = (state=initState,action)=>{
    switch(action.type){
        case BYAUTHOR:
            return{
                ...state,
                by_author: action.payload,
            }
        case BYCATEGORY:
            return{
                ...state,
                by_category: action.payload
            }
        case SEARCH:
            return{
                ...state,
                by_search: action.payload
            }
        default:
            return {...state}
    }
}

export default filterReducer