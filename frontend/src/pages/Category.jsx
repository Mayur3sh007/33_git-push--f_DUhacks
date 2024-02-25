import React from 'react';
import { Link } from 'react-router-dom';

const categoriesEnum = ["Electronics", "Clothing", "Food&Beverages", "Home", "Beauty", "Books", "Sports", "Toys"];

const Category = () => {
  return (
    <div className="bg-gray-950 container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-200 m-4 text-center">Categories</h1>
      <ul className="flex flex-wrap justify-center">
        {categoriesEnum.map(category => (
          <li key={category} className="bg-gray-800 w-[25%] m-4 rounded-lg shadow-md hover:bg-gray-900">
            <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="block py-4 px-6 text-lg font-medium text-gray-300 ">{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
