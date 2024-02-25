import React from 'react';
import { Link } from 'react-router-dom';

const categoriesEnum = ["Electronics", "Clothing", "Food&Beverages", "Home", "Beauty", "Books", "Sports", "Toys"];

const Category = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Categories</h1>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categoriesEnum.map(category => (
          <li key={category} className="bg-white rounded-lg shadow-md">
            <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="block py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100">{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
