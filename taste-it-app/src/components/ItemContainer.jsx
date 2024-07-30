import React from 'react'
import ItemCard from './ItemCard'
import FoodData from "../data/FoodData";

function ItemContainer() {
  return (
    <>
        <div className='flex flex-wrap justify-center gap-10 lg:justify-start mx-6 my-10'>
        {
            FoodData.map((item) => (
                <ItemCard 
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                desc={item.desc}
                rating={item.rating}
                />
            ))
        }

        </div>
    </>
  )
}

export default ItemContainer