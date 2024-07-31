import React from 'react'
import ItemCard from './ItemCard'
import FoodData from "../data/FoodData";
import { useSelector } from "react-redux";
//used react-hot-toast library to add toast messages when we add product into cart 
import toast, { Toaster } from 'react-hot-toast';

function ItemContainer() {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search)
  console.log(search)
  const HandleToast = (itemName) => {
    return toast.success(`${itemName} added successfully`)
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='flex flex-wrap justify-center gap-10 lg:justify-start mx-6 my-10'>
        {
          FoodData.filter((food) => {
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase())
            } else {
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
          }).map((item) => {
            return (
              <ItemCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                desc={item.desc}
                rating={item.rating}
                HandleToast={HandleToast}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default ItemContainer