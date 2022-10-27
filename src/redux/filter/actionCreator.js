import { BYAUTHOR, BYCATEGORY, SEARCH } from "./actionType"

export const byAuthor = (author)=>{
    return{
        type:BYAUTHOR,
        payload:author
    }
}

export const byCategory = (category)=>{
    return{
        type:BYCATEGORY,
        payload:category
    }
}

export const bySearch = (search_txt)=>{
    return{
        type:SEARCH,
        payload:search_txt
    }
}