import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/Cards/ProductCard";

function SearchResults() {
  const navigate = useNavigate();
  const data = useSelector(state => state.products.data?.data);
  const { slug } = useParams();
  const formattedSlug = slug.replace(/-/g, " ");

  useEffect(() => {
    if (!data) navigate("/");
  }, [slug]);

  
  const filteredData = data?.filter((each) =>
    each.title.toLowerCase().includes(formattedSlug.toLowerCase())
  );

  

  if(filteredData?.length === 0){
    return(
      <h1 className="text-5xl text-pink-600 font-bold mb-4">No Results Found</h1>
    )
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className='ml-6'>
        {filteredData?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults