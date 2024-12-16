import React, { useEffect, useState } from "react";

function Potter_spells() {
  const [spells, setSpells] = useState([]);
  const url = `https://potterapi-fedeperin.vercel.app/en/spells`;

  const fetchingData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const spell = data.map((spell) => ({
          name: spell.spell,
          use: spell.use,
          id: spell.index,
        }));
        setSpells(spell);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-indigo-900 text-gray-200 py-12 px-6">
      <h1 className="text-6xl font-extrabold text-yellow-400 mb-12 text-center tracking-widest shadow-glow animate-pulse">
        Magical Spells
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {spells.map((spell) => (
          <div
            key={spell.id}
            className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-black rounded-xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500 transform hover:scale-105 transition duration-500 p-6 group"
          >
            {/* Hover Effect - Background */}
            <div className="absolute inset-0 bg-opacity-20 bg-gradient-to-t from-yellow-500 via-orange-500 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Spell Name */}
            <h2 className="text-3xl font-extrabold text-yellow-400 group-hover:text-yellow-500 tracking-widest transition duration-300 mb-4">
              {spell.name}
            </h2>

            {/* Spell Use */}
            <div className="text-gray-400 space-y-3 group-hover:text-yellow-300 transition duration-300">
              <p className="text-sm">
                <span className="font-semibold text-yellow-400">Use:</span>{" "}
                {spell.use || "Unknown"}
              </p>
            </div>

            {/* Badge with Spell ID */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full px-3 py-1 shadow-lg animate-pulse">
              #{spell.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Potter_spells;