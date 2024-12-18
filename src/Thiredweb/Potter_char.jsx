import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Potter_characters() {
  const [characters, setCharacters] = useState([]);
  const { category } = useParams(); // Extract language from URL

  const url = `https://potterapi-fedeperin.vercel.app/en/${category || "characters"}`;

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const characterData = data.map((item) => ({
          id: item.index,
          name: item.fullName,
          house: item.hogwartsHouse,
          image: item.image,
          birthdate: item.birthdate,
          actor: item.interpretedBy,
        }));
        setCharacters(characterData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-indigo-900 text-gray-200 py-10 px-6">
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-12 text-center tracking-widest shadow-glow">
        Hogwarts Characters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {characters.map((character) => (
          <div
            key={character.id}
            className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-black rounded-xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500 transform hover:scale-105 transition duration-500 p-6 group"
          >
            {/* Card Image */}
            <div className="overflow-hidden rounded-lg border-4 border-yellow-400 shadow-md">
              <img
                src={character.image || "https://via.placeholder.com/150"}
                alt={character.name}
                className="w-full h-72 object-contain bg-black p-2 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="mt-6 text-center">
              <h2 className="text-3xl font-bold text-yellow-300 group-hover:text-yellow-500 tracking-wide transition duration-300">
                {character.name}
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                <span className="font-semibold text-yellow-400">House:</span>{" "}
                {character.house || "Unknown"}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-yellow-400">Actor/Actress:</span>{" "}
                {character.actor || "Unknown"}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-yellow-400">Birthdate:</span>{" "}
                {character.birthdate || "Unknown"}
              </p>
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold rounded-full px-3 py-1 shadow-lg animate-pulse">
              #{character.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Potter_characters;
