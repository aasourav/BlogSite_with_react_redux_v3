import React from 'react'
import { useDispatch } from 'react-redux'
import { byAuthor, byCategory } from '../redux/filter/actionCreator'

const Card = ({data}) => {
  const dispatch = useDispatch()

  const handleAuthor = ()=>{
    dispatch(byAuthor(data.author))
  }
  const handleCategory =()=>{
    dispatch(byCategory(data.category))
  }
  return (
        <div key={Math.random()}>
                    {/* <!-- single card  --> */}
                    <div
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            className="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <span
                                        onClick={handleCategory}
                                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                    >
                                        {data.category}
                                    </span>
                                </p>
                                <a href='google.com' className="block mt-1">
                                    <p
                                        className="text-xl font-semibold text-gray-900"
                                    >
                                        {data.article_title}
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p
                                        onClick={handleAuthor}
                                        className="text-sm font-medium text-gray-900 hover:underline"
                                    >
                                        {data.author}
                                    </p>
                                    <div
                                        className="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time dateTime="2020-03-16"
                                            >20 Mar, 2022
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> 9 min read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Card