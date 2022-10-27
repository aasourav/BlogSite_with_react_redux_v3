import articles from "./initialState";

const articleReducer = (state=articles,action)=>{
    return [...state]
}
export default articleReducer;