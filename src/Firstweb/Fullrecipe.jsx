import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Fullrecipe() {
    const { name } = useParams()

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`

    const [fullrecipe, setfullrecipe] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {


                const fulldata = data.meals.map((item) => {
                    const ingredients = [];
                    // Loop through strIngredient1 to strIngredient20
                    for (let i = 1; i <= 20; i++) {
                        const ingredient = item[`strIngredient${i}`];
                        if (ingredient && ingredient.trim()) {
                            ingredients.push(ingredient.trim());
                        }
                    }

                    return {
                        id: item.idMeal,
                        name: item.strMeal,
                        category: item.strCategory,
                        area: item.strArea,
                        recipe: item.strInstructions,
                        image: item.strMealThumb,
                        ingredients,
                    };
                });
                setfullrecipe(fulldata)
            })
            .catch((error) => console.error(error));
    }, [url])

    return (
        <div>
            {fullrecipe.map((x) => (
                <div key={x.id}>
                    <h1 className=' text-2xl font-bold'>{x.name}</h1>
                    <img src={x.image} alt="" />
                    <p><strong>Category: </strong>{x.category}</p>
                    <p><strong>Area: </strong>{x.area}</p>
                    <p><strong>Recipe: </strong>{x.recipe}</p>
                    <div>
                        <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
                        <ul className="list-disc pl-5 mt-2">
                            {x.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Fullrecipe