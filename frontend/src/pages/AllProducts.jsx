import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/Cards/ProductCard';
import axios from 'axios';
import { setData } from '../store/productSlice';

function Filters({ applyFilter, resetFilters, filterOptions }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [filterInput, setFilterInput] = useState('');

  return (
    <div className="flex flex-wrap items justify-end mb-8 text-white">
      <div className="relative mr-2 mb-2">
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="rounded-lg pl-5 w-60 btn btn-green-500  outline-none h-10 font-extrabold  bg-green-500 hover:bg-green-600 ">
          <option value="">Filter By</option>
          {filterOptions.map(option => (
            <option key={option.key} value={option.key} className='hover:bg-gray-950 text-lg text-white ' >{option.label}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-gray-900 rounded-e-lg ">
          <svg className="fill-current h-4 w-4 rotate-90 text-4xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill="#fff" d="M8.3 10.3a1 1 0 0 0 1.4 1.4l3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 1 0-1.4 1.4L10.58 7H4a1 1 0 1 0 0 2h6.58zM12 5h4a1 1 0 1 0 0-2h-4a1 1 0 0 0 0 2z" />
          </svg>
        </div>
      </div>
      <input className=" bg-green-800 outline-none rounded-lg brightness-200 px-2 h-10 font-bold focus:outline-green-700" type="text" placeholder="Enter search term" value={filterInput} onChange={e => setFilterInput(e.target.value)} style={{ display: filterOptions.find(option => option.key === selectedOption)?.type === 'text' ? 'inline-block' : 'none' }} />
      <button onClick={() => applyFilter(selectedOption, filterInput)} className="btn btn-green-500 hover:bg-green-700 mx-1 rounded-lg px-3">Apply Filter</button>
      <button onClick={resetFilters} className="btn btn-gray-500 hover:bg-green-700  rounded-lg mx-1  px-3">Reset Filters</button>
    </div>
  );
}

// Main component
function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data?.data);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterOptions = [
    { label: 'Carbon FP 0-50', key: 'carbonFP0-50' },
    { label: 'Carbon FP 51-100', key: 'carbonFP51-100' },
    { label: 'Rating 0-3', key: 'rating0-3' },
    { label: 'Rating 3-4', key: 'rating3-4' },
    { label: 'Rating 4-5', key: 'rating4-5' },
    { label: 'Search by Supplier', key: 'supplierName', type: 'text' }, // Example of a text input filter
    // Add more filter options here as needed
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/product/getAllProducts');
        dispatch(setData(response.data)); // Push all products into store
        setFilteredProducts(response.data.data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (!products) {
      fetchProducts();
    } else {
      setFilteredProducts(products); // Set filteredProducts to all products initially
    }
  }, [dispatch, products]);

  const applyFilter = (filterOption, filterInput) => {
    let filtered = [...products];
    switch (filterOption) {
      case 'carbonFP0-50':
        filtered = filtered.filter(product => product.carbonFP >= 0 && product.carbonFP <= 50);
        break;
      case 'carbonFP51-100':
        filtered = filtered.filter(product => product.carbonFP >= 51 && product.carbonFP <= 100);
        break;
      case 'rating0-3':
        filtered = filtered.filter(product => product.averageRating >= 0 && product.averageRating < 3);
        break;
      case 'rating3-4':
        filtered = filtered.filter(product => product.averageRating >= 3 && product.averageRating < 4);
        break;
      case 'rating4-5':
        filtered = filtered.filter(product => product.averageRating >= 4 && product.averageRating <= 5);
        break;
      case 'supplierName':
        filtered = filtered.filter(product => product.supplier.username.toLowerCase().includes(filterInput.toLowerCase()));
        break;
      default:
        break;
    }
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setFilteredProducts(products);
  };

  if (!products) {
    return <div className='text-white'>Loading...</div>; // Render a loading indicator
  }
  return (
    <>

      <div className="bg-gray-950 text-gray-300 px-4 py-8">
        <h1 className="text-4xl font-bold text-green-500 mb-6 ml-[66px]">Products</h1>
        <Filters applyFilter={applyFilter} resetFilters={resetFilters} filterOptions={filterOptions} />
        {filteredProducts.length === 0 && <div className='text-white text-4xl text-center my-4'>No products found</div>}
        <div className="">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
