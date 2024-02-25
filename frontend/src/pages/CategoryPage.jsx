import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/Cards/ProductCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { slug } = useParams();
  const products = useSelector(state => state.products.data?.data);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        // Preprocess the slug to match the API route format
        const formattedSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        // Filter products by category
        const filtered = products.filter(product => product.category.toLowerCase() === formattedSlug.toLowerCase());
        setFilteredProducts(filtered);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProductsByCategory();
  }, [slug, products]);

  return (
    <div className="bg-gray-900 text-gray-300 px-4 py-8">
      <h1 className="text-4xl font-bold text-green-500 mb-6">{slug} Products</h1>
      <div className="">
        {filteredProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
