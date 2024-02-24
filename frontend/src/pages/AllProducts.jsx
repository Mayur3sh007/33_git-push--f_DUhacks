import React from 'react'
import { useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards'
import ProductCard from '../components/Cards/ProductCard';

function AllProducts() {

  const products = useSelector(state => state.products.data?.data);
  // console.log(products)

  if (!products) {
    return <div>Loading...</div>; // Render a loading indicator
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className='ml-6'>
        {products?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts