import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Cocktails() {
    const [categories, setCategories] = useState([]);
    const [cocktails, setCocktails] = useState([]);
    const [cat, setCat] = useState("Cocktail");
    const [loading, setLoading] = useState(true);
    const [serach, setsearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const cardsPerPage = 12; // Number of cards per page

    const category_url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
    const drinks_url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`;

    const fetchCategories = () => {
        fetch(category_url)
            .then((response) => response.json())
            .then((data) => {
                const categories = data.drinks.map((item) => ({
                    cat: item.strCategory,
                }));
                setCategories(categories);
            })
            .catch((error) => console.error(error));
    };

    const fetchDrinks = () => {
        setLoading(true); // Show loader while fetching
        fetch(drinks_url)
            .then((response) => response.json())
            .then((data) => {
                const drinks = data.drinks.map((item) => ({
                    id: item.idDrink,
                    image: item.strDrinkThumb,
                    name: item.strDrink,
                }));
                setCocktails(drinks);
                setLoading(false); // Hide loader once data is fetched
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // Hide loader on error
            });
    };

    useEffect(() => {
        fetchCategories();
        fetchDrinks();
    }, [cat]); // Refetch drinks when category changes

    // Calculate the current cards to display
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cocktails.slice(indexOfFirstCard, indexOfLastCard);

    // Handle Pagination
    const totalPages = Math.ceil(cocktails.length / cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        setsearch(serach)
    }
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-r-4 border-blue-400"></div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 min-h-screen">

<div className="text-center mb-6">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
                    Welcome to the Cocktail Paradise!
                </h1>
                <p className="text-lg text-gray-600">
                    Discover the art of mixology! Dive into the details of your favorite cocktails, explore their unique flavors, and find inspiration for your next drink.
                </p>
            </div>

            {/* Brief Description */}
            <div className="text-center mb-8">
                <p className="text-xl text-gray-700">
                    Here, you’ll find everything you need to know about your selected cocktail. From its category and type to detailed instructions on how to prepare it, let this guide transform your home into a cocktail bar.
                </p>
            </div>

            <div className="flex justify-center m-7">
                <form onSubmit={onSubmit} className="flex gap-4">
                    <input type="text" value={serach} onChange={(e) => { setsearch(e.target.value) }} placeholder="Enter drink name" className=" h-10 w-96 px-5 rounded-lg hover:border-blue-600" />
                    <button type="submit" className=" border px-5 border-2 rounded-lg border-blue-300 hover:border-blue-600 hover:bg-blue-400 hover:text-white transition-all duration-400">
                        <NavLink to={`/Cocktails/${serach}`}>Search</NavLink>
                    </button>
                </form>
            </div>

            {/* Top Selection Bar */}
            <form className="mb-8 flex justify-center items-center">
                <label className="text-lg font-bold text-blue-800 mr-4">
                    Select a Cocktail Category:
                </label>
                <select
                    name="categories"
                    onChange={(e) => {
                        setCat(e.target.value);
                        setCurrentPage(1); // Reset to first page when category changes
                    }}
                    value={cat}
                    className="bg-white text-blue-800 font-semibold border-2 border-blue-400 rounded-lg p-2 shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-200"
                >
                    {categories.map((x) => (
                        <option key={x.cat} value={x.cat}>
                            {x.cat}
                        </option>
                    ))}
                </select>
            </form>

            {/* Cocktails Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {currentCards.map((q) => (
                    <div
                        key={q.id}
                        className="bg-white border border-blue-200 rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        <img
                            src={q.image}
                            alt={q.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-semibold text-blue-800 mb-2">
                                {q.name}
                            </h2>
                            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-200">
                                <NavLink to={`/Cocktails/${q.name.toLowerCase()}`}>
                                    View more
                                </NavLink>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-4 py-2 rounded-md font-medium ${currentPage === index + 1
                                ? "bg-blue-600 text-white"
                                : "bg-blue-200 text-blue-800 hover:bg-blue-300"
                            } transition-all duration-200`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Cocktails;
