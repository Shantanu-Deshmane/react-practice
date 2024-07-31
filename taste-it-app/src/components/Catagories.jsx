import React from 'react'
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/CategorySlice";

function Catagories() {
  const uniqueData = [...new Set(FoodData.map((food => food.category)))]
  const dispatch = useDispatch();
  const selectCategory = useSelector((state) => state.category.category)
  return (
    <>
      <div className=' mt-8 '>
        <h3 className=' text-lg my-4 font-semibold '>Find the best food</h3>
        <div className='my-4 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`${selectCategory === "All" && 'bg-orange-500 text-white'} 
            px-3 py-1 rounded bg-gray-200 font-semibold hover:bg-orange-500 hover:text-white `}>All</button>
          {
            uniqueData.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => dispatch(setCategory(item))}
                  className={`px-3 py-1 rounded bg-gray-200 font-semibold hover:bg-orange-500 
                hover:text-white ${selectCategory === item && "bg-orange-500 text-white"} `}>
                  {item}</button>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Catagories   