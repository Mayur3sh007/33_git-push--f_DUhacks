import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const user = useSelector(state => state.user.data?.data);
  const products = useSelector(state => state.products.data?.data);
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [foundSupplierName, setFoundSupplierName] = useState('');
  const [supplierData, setSupplierData] = useState(null); // State to store supplier data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/review/getByProductId/${slug}`);
        setComments(response.data.reviews); 
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    if (!products) {
      navigate('/');
    } else {
      const foundProduct = products.find(each => each._id === slug);
      setProduct(foundProduct);
      const foundSupplierName = foundProduct.supplier.username;    // Get supplier's name
      setFoundSupplierName(foundSupplierName); // Store the supplier name
    }
  }, [products, navigate, slug]);



  useEffect(() => {
    if (foundSupplierName) {
      const options = {
        method: 'GET',
        url: '/scores',
        params: {
          companyname: 'Apple Inc.' // Use the foundSupplierName here
        },
        headers: {
          'X-RapidAPI-Key': '33ef4a6069mshe660049d750690bp197a5bjsncc2df2cdb993',
          'X-RapidAPI-Host': 'gaialens-esg-scores.p.rapidapi.com'
        }
      };

      const fetchSupplierData = async () => {
        try {
          const response = await axios.request(options);
          setSupplierData(response.data); // Store the supplier data
          console.log(supplierData)
        } catch (error) {
          console.error(error);
        }
      };

      fetchSupplierData();
    }
  }, [foundSupplierName]);

  const handleRatingChange = event => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = event => {
    setComment(event.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/review/add', {
        user: user?._id,
        product: product._id,
        comment: comment,
        rating: rating
      });
      console.log(response.data);
      setRating(0);
      setComment('');
      // Refetch comments after submitting new comment
      const updatedComments = await axios.get(`/api/v1/review/getByProductId/${slug}`)
      setComments(updatedComments.data.reviews);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="w-full text-white px-12">
      {product && (
        <div className="w-full h-[400px] flex items-center my-12 mb-24">
          <div className="w-[40vw] h-full p-3 flex items-center justify-center">
            <img src={product?.productImage} alt={product?.title} className="rounded-2xl" />
          </div>
          <div className="w-[60%] h-full flex flex-col">
            <h1 className="text-4xl font-extrabold text-left mx-8 mb-2 mt-8">{product?.title}</h1>
            <h1 className="text-3xl text-orange-400 font-extrabold text-left mx-8 my-2">{product?.brand}</h1>
            <p className="m-8 text-lg">{product?.description}</p>
            <p className="text-xl mx-8 text-green-400 font-bold">Carbon Footprint : {product?.carbonFP / 100} kgCO2e</p>
          </div>
        </div>
      )}

      {/* Render Supplier Data */}

      {supplierData && supplierData.length > 0 && (
        <div className="mt-8 text-white p-4">
          <h3 className="text-4xl font-bold mb-4">Supplier Information:</h3>
          <p>Company Name: {supplierData[0].companyname}</p>
          <p>Country: {supplierData[0].country}</p>
          <p>Environmental Pillar Score: {supplierData[0]['Environmental Pillar Score']}</p>
          <p>Governance Pillar Score: {supplierData[0]['Governance Pillar Score']}</p>
          <p>Latest Score Date: {supplierData[0]['Latest Score Date']}</p>
        </div>
      )}




      {user ? (
        <form onSubmit={handleSubmitReview} className="w-[80%] mx-auto mt-16 p-4  text-white shadow rounded">
          <h2 className="text-6xl font-bold mb-12 text-center">Reviews</h2>
  
          <div className="flex items-center mt-7 space-x-9">
            {/* Render rating inputs */}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-3xl mb-1 ">Message</label>
            <textarea id="message" value={comment} onChange={handleReviewChange} className="w-full py-2 px-4 rounded border bg-gradient-to-r from-gray-800 to-black border-gray-300 focus:outline-none focus:ring-2 text-xl focus:ring-blue-500"></textarea>
          </div>
          <div className='flex mx-auto w-fit'>
            <button type="submit" className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2  focus:ring-green-500 focus:ring-opacity-50">
              Submit Review
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-8 text-2xl font-semibold">
          Please log in to leave a review.
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-4xl font-bold mb-4">Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
