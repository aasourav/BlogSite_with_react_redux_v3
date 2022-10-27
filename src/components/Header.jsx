import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import search_image from '../assets/search.svg'
import { bySearch } from '../redux/filter/actionCreator'


const Header = () => {
    const [data,setData] = useState('')
    const dispatch = useDispatch()

    // function debounde(fn,delay){
        
    //     let timeOut;
    //     return function(){
    //         if(timeOut){
    //             clearTimeout(timeOut)
    //         }
    //         timeOut = setTimeout(()=>{
    //             fn()
    //         },delay)
    //     };
    // }

   
    const handleSearch = (e)=>{
        setData(e.target.value)
        dispatch(bySearch(e.target.value))
        // debounde(dispatch(bySearch(data)),500)
    }

  return (
    <div>
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a className='text-blue-800 text-3xl font-medium' href="index.html">
                    Ahsan's Blog
                </a>
            </div>
        </nav>

        {/* <!-- search --> */}
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                value={data}
                onChange={handleSearch}
                placeholder="Search"
            />
            <img
                className="inline h-6 cursor-pointer"
                src={search_image}
                alt="Search"
            />
        </div>
    </div>
  )
}

export default Header