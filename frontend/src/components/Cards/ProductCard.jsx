import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // console.log(product)
  return (
    <Link to={`/productDetails/${product._id}`}>
      <div className="flex items-start mx-3 my-5 text-white h-[40vh] p-3">
        <div className='w-[30%] h-full bg-transparent flex justify-center items-center'>
          <div className="bg-gray-200 rounded-lg p-2 mr-2 h-full">
            {product.productImage && (
              <img
                src={product.productImage}
                alt={product.title}
                className="h-full max-w-xs mx-auto "
              />
            )}
          </div>
        </div>
        <div className='mx-2'>
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <h2 className="text-xl font-semibold mb-2">by {product.supplier.username}</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className='text-[#ffc107] flex items-center'>
            <FaStar />
            <span className='text-white ml-2'>
              {product.averageRating.toFixed(1) || 0}
            </span>
          </p>
          <p className='text-green-400 my-2'>
            Carbon Footprint : {product.carbonFP} kgCO2e
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
