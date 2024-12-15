import React,{useEffect, useState} from 'react'
import { useParams, NavLink } from 'react-router-dom'
function CategoryPage() {
const { category } = useParams();
const [meals, setmeals] = useState([]);
const [loading, setloading] = useState(true)

const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

useEffect(()=>{
    setloading(true);
    fetch(url)
    .then((response)=>response.json())
    .then(data=>{
        const meals = data.meals.map((item)=>({
            id:item.idMeal,
            image:item.strMealThumb,
            name:item.strMeal
        }))
        setmeals(meals)
        setloading(false)
    })
    .catch((error)=>console.error(error))
    setloading(false)
})

if (loading) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-r-4 border-blue-400"></div>
        </div>
    );
}

  return (
    <>
        <div className=' grid grid-cols-3 gap-20 m-5'>
            {meals.map((x)=>(
                <div key={x.id} className=' justify-items-center hover:shadow-2xl rounded-2xl transition-all duration-500'>
                    <div>
                        <img src={x.image} alt="" className=' rounded-2xl'/>
                    </div>
                    <div className='text-xl p-5 '>{x.name}</div>
                    <button className=" border-gray-500 border-2 p-2 mt-4 rounded-xl hover:bg-gray-400 hover:text-white transition-all duration-300 mb-5">
                        <NavLink to={`/${category}/${x.name.toLowerCase()}`}>
                            View Recipe
                        </NavLink>
                    </button>
                </div>
            ))}
        </div>
    </>
  )
}

export default CategoryPage