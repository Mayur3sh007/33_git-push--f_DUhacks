import React from 'react'
import { useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards'

function AllProducts() {

    const products = useSelector(state => state.products.data?.data);
    
    if (!products)
    {
        return <div>Loading...</div>; // Render a loading indicator
    }

  return (
     <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className='ml-6'>
            <Cards cardInfo = {products} />
      </div>
    </div>
  )
}

export default AllProducts