// import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Themeals() {

    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

    const [meals, setmeals] = useState([])
    const [loading, setLoading] = useState(true);
    const [username, setusername] = useState("")
    const [entername, setentername] = useState(false)

    const fetchmeals = () => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                const meals_data = data.categories.map((item) => ({
                    id: item.idCategory,
                    category: item.strCategory,
                    image: item.strCategoryThumb,
                    description: item.strCategoryDescription
                }))
                // console.log(data)    
                setmeals(meals_data)
                setLoading(false);
            })
            .catch((error) => { console.error(error) 
                setLoading(false)})
    }

    useEffect(() => {
        fetchmeals()
    }, [])

const handlesubmit = (e)=>{
    e.preventDefault();
    if(username.trim()){
        setentername(true)
    }
}


if (loading) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-r-4 border-blue-400"></div>
        </div>
    );
}

if(!entername){
    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-500 mb-4">Welcome to The Meals!</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Please enter your name to start exploring delicious meal categories!
                    </p>
                    <form onSubmit={handlesubmit} className="flex flex-col items-center">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                            className="border rounded-lg p-3 w-80 text-center mb-4"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
    )
}


    return (    
        <>
         <div className="text-center p-5 bg-blue-100 shadow-md mb-10">
                <h1 className="text-3xl font-bold text-blue-500">Hello, {username}!</h1>
                <p className="text-lg mt-2 text-gray-700">
                    Welcome to The Meals! Here, you can explore a wide variety of meal categories from around the world.
                </p>
                <p className="text-lg text-gray-700">
                    Click on your favorite category to discover delicious recipes and culinary inspirations!
                </p>
            </div>
            <div className=" flex flex-wrap gap-10 justify-center">
                {meals.map((x) => (
                    <div key={x.id} className=" justify-items-center border-8 border-double border-gray-300 rounded-xl p-5 hover:scale-110 transition-transform duration-350">
                        <img src={x.image} alt="" />
                        {/* <div>{x.name}</div> */}
                        <div className=" font-bold text-lg">{x.category}</div>
                        <button className=" border-gray-500 border-2 p-2 mt-4 rounded-xl hover:bg-gray-400 hover:text-white transition-all duration-300">
                            <NavLink to={`/category/${x.category.toLowerCase()}`}>
                                View all meals
                            </NavLink>
                        </button>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Themeals;