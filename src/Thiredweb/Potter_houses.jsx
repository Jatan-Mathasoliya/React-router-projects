import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Potter_houses() {
  const [houses, setHouses] = useState([]);
  const { language } = useParams(); // Extract language from URL

  const url = `https://potterapi-fedeperin.vercel.app/en/houses`;

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const houseData = data.map((item) => ({
          id: item.index,
          name: item.name,
          founder: item.founder,
          animal: item.animal,
          colors: item.colors.join(", "),
          ghost: item.emoji,
          element: item.element,
        }));
        setHouses(houseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [language]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-indigo-900 text-gray-200 py-10 px-6">
      <h1 className="text-6xl font-extrabold text-yellow-400 mb-12 text-center tracking-widest shadow-glow animate-pulse">
        Hogwarts Houses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {houses.map((house) => (
          <div
            key={house.id}
            className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-black rounded-xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500 transform hover:scale-105 transition duration-500 p-6 group"
          >
            {/* House Name */}
            <h2 className="text-3xl font-extrabold text-yellow-400 group-hover:text-yellow-500 tracking-widest transition duration-300 mb-4">
              {house.name}
            </h2>

            {/* House Information */}
            <div className="mt-4 text-gray-400 space-y-3">
              <p className="text-sm">
                <span className="font-semibold text-yellow-400">Founder:</span>{" "}
                {house.founder || "Unknown"}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-yellow-400">Animal:</span>{" "}
                {house.animal || "Unknown"}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-yellow-400">Colors:</span>{" "}
                {house.colors || "Unknown"}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-yellow-400">Logo of House:</span>{" "}
                <span className="text-3xl">{house.ghost || "Unknown"}</span>
              </p>
              <p className="text-sm">
                <span className="font-semibold text-yellow-400">Element:</span>{" "}
                {house.element || "Unknown"}
              </p>
            </div>

            {/* House Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full px-3 py-1 shadow-lg animate-pulse">
              #{house.id}
            </div>

            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-t from-yellow-500 via-orange-500 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Potter_houses;
