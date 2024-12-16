import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Potter_books() {
    const [books, setBooks] = useState([]);
    const {category } = useParams();

    const url = `https://potterapi-fedeperin.vercel.app/en/${category || "books"}`;

    const fetchData = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const booksData = data.map((item) => ({
                    id: item.number,
                    title: item.title,
                    date: item.releaseDate,
                    pages: item.pages,
                    image: item.cover,
                }));
                setBooks(booksData);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-gray-200 py-10 px-6">
            {/* <h1 className="text-5xl font-extrabold text-yellow-400 mb-12 text-center tracking-widest shadow-glow">
                {category.charAt(0).toUpperCase() + category.slice(1)} Archives
            </h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {books.map((x) => (
                    <div
                        key={x.id}
                        className="bg-gradient-to-br from-gray-800 via-gray-700 to-black rounded-3xl shadow-lg p-6 relative group transform hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-yellow-500"
                    >
                        <div className="overflow-hidden rounded-lg shadow-xl border-2 border-yellow-500 group-hover:shadow-md group-hover:shadow-yellow-400">
                            <img
                                src={x.image}
                                alt={x.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold text-yellow-300 group-hover:text-yellow-500 tracking-wide transition duration-300">
                                {x.title}
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">
                                <span className="font-semibold text-yellow-400">Release Date:</span>{" "}
                                {x.date}
                            </p>
                            <p className="text-sm text-gray-400">
                                <span className="font-semibold text-yellow-400">Pages:</span> {x.pages}
                            </p>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-yellow-500 text-black text-xs font-bold rounded-full px-4 py-1 shadow-xl animate-pulse">
                            #{x.id}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Potter_books;
