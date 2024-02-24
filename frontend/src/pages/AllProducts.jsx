import React from 'react'
import { useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards'
import ProductCard from '../components/Cards/ProductCard';

// import TVimg from "../assets/logo.png";
// const products = [
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },
//   {
//     title: "Designer Vase",
//     productImage: TVimg,
//     description: "new vase for your living room",
//     brand: "Not from sweatshop",
//     carbonFP: 10,
//   },

// ];

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