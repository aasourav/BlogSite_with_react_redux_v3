import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Body = () => {
    const articles = useSelector(state=> state.articles)
    const filters = useSelector(state=> state.filter)
    // console.log(articles)
  return (
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>

                {/* <!-- card grid  --> */}
                <div className="mt-12 max-w-lg mx-auto grid 
                        gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    {articles
                    .filter((data)=>{
                        //for author
                        if(!filters.by_author) return data
                        
                        return data.author === filters.by_author
                        
                    })
                    .filter(data=>{
                        //for category
                        if(!filters.by_category) return data
                        return data.category === filters.by_category
                    })
                    .filter(data=>{
                        //for search
                        const to_lower_data = data.article_title.toLowerCase()
                        const to_lower_data_search = filters.by_search.toLowerCase()
                        const isMatched = to_lower_data.includes(to_lower_data_search)
                        // console.log(isMatched)
                        if(!filters.by_search || isMatched) return data
                        return false
                    })  
                    .map((data)=>(
                        <Card data={data}/>
                    ))}
                </div>
                
                
            </div>
        </section>
  )
}

export default Body