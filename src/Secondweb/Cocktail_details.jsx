import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Cocktail_details() {
    const {name} = useParams()
    const {search} = useParams();
    const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name || search}`
    const [recipe, setrecipe] = useState([])
    const [loading, setLoading] = useState(true);

const fetching_recipe = ()=>{
    setLoading(true)
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const recipe_data = data.drinks.map((item)=>({
            id:item.idDrink,
            name:item.strDrink,
            category:item.strCategory,
            image:item.strDrinkThumb,
            alco:item.strAlcoholic,
            glass:item.strGlass,
            instruction:item.strInstructions
        }))
        setrecipe(recipe_data)
        setLoading(false)
    })
    .catch((error)=>{
        console.error(error)
        setLoading(false)
    })
}

useEffect(()=>{
    fetching_recipe()
},[name])

if (loading) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-r-4 border-blue-400"></div>
        </div>
    );
}

  return (
    
    <div className="p-8 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipe.map((x) => (
                    <div
                        key={x.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Image Section */}
                        <img
                            src={x.image}
                            alt={x.name}
                            className="w-full h-60 object-cover rounded-t-xl"
                        />

                        {/* Content Section */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-blue-700 mb-2">{x.name}</h2>
                            <p className="text-sm text-gray-600 mb-4 italic">{x.category}</p>

                            <div className="text-gray-800 space-y-2">
                                <p>
                                    <strong>Alcoholic:</strong> {x.alco}
                                </p>
                                <p>
                                    <strong>Glass:</strong> {x.glass}
                                </p>
                                <p>
                                    <strong>Instructions:</strong> {x.instruction}
                                </p>
                            </div>
                        </div>

                        {/* Button Section */}
                        <div className="px-6 pb-6 flex justify-center">
                            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Try Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Cocktail_details