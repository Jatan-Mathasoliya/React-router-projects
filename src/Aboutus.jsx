import React from 'react';

function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-300 p-8 rounded shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700">
          Explore a world of possibilities! Our platform is your gateway to exciting content about meals, cocktails, books, and banking information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">🍴 Delicious Meals</h2>
          <p className="text-gray-600">
            Craving something tasty? We bring you a curated list of recipes with step-by-step instructions to create mouthwatering meals.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Classic cuisines and modern dishes.</li>
            <li>Easy-to-follow instructions.</li>
            <li>Health-conscious meal plans.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">🍹 Cocktails Galore</h2>
          <p className="text-gray-600">
            Love cocktails? Discover a world of flavors and learn to craft the perfect drink for any occasion.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Classic and modern cocktail recipes.</li>
            <li>Mixology tips and tricks.</li>
            <li>Non-alcoholic options for everyone.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">📚 Books for Every Reader</h2>
          <p className="text-gray-600">
            Dive into the world of books. Whether you're a fan of fiction, non-fiction, or anything in between, we have something for you.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Best-selling authors and hidden gems.</li>
            <li>Genres spanning thrillers, romance, and more.</li>
            <li>Detailed information about authors and publishers.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">🏦 Comprehensive Bank Details</h2>
          <p className="text-gray-600">
            Need banking information? We've got you covered with a comprehensive database of banks, their branches, and services.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Find banks near you.</li>
            <li>Get detailed branch information.</li>
            <li>Learn about services and facilities.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-700 text-lg">
          Ready to explore? Click on the navigation links above to dive into our exciting sections!
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
