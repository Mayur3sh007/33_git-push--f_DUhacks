import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaLink } from "react-icons/fa";
import Circlebar from "../Circlebar/Circlebar";
import SupplyChain from "../SupplyChain/SupplyChain";

function ProductDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const user = useSelector((state) => state.user.data?.data);
  const products = useSelector((state) => state.products.data?.data);
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [foundSupplierName, setFoundSupplierName] = useState("");
  const [supplierData, setSupplierData] = useState(null); // State to store supplier data

  // star, do not touch
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/review/getByProductId/${slug}`
        );
        setComments(response.data.reviews);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    if (!products) {
      navigate("/");
    } else {
      const foundProduct = products.find((each) => each._id === slug);
      setProduct(foundProduct);
      setFoundSupplierName(foundProduct.supplier.username); // Store the supplier name
    }
  }, [products, navigate, slug]);

  useEffect(() => {
    console.log(foundSupplierName);
    if (foundSupplierName) {
      const options = {
        method: "GET",
        url: "/scores",
        params: {
          companyname: "Apple Inc.", // Use the foundSupplierName here
        },
        headers: {
          "X-RapidAPI-Key":
            "9329084790msha4ae54f44c1c13fp17db99jsn44903bcc0b04",
          "X-RapidAPI-Host": "gaialens-company-names.p.rapidapi.com",
        },
      };

      const fetchSupplierData = async () => {
        try {
          const response = await axios.request(options);
          setSupplierData(response.data); // Store the supplier data
          console.log(supplierData);
        } catch (error) {
          console.error(error);
        }
      };

      fetchSupplierData();
    }
  }, [foundSupplierName]);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post("/api/v1/review/add", {
        user: user?._id,
        product: product._id,
        comment: comment,
        rating: starRating,
      });
      console.log(starRating);
      // console.log(response.data);
      setStarRating(0);
      setComment("");
      // Refetch comments after submitting new comment
      const updatedComments = await axios.get(
        `/api/v1/review/getByProductId/${slug}`
      );
      setComments(updatedComments.data.reviews);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <div className="w-full text-white ">
      {product && (
        <div className="w-full h-[400px] flex items-center mt-12 px-12">
          <div className="w-[40vw] h-full p-3 flex items-center justify-center">
            <img
              src={product?.productImage}
              alt={product?.title}
              className="rounded-2xl w-96"
            />
          </div>
          <div className="w-[30%] h-full flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-left mx-8 mb-2 mt-8">
              {product?.title}
            </h1>
            {/* <h1 className="text-3xl text-orange-400 font-extrabold text-left mx-8 my-2">{product?.brand}</h1> */}
            <p className="m-8 text-lg">{product?.description}</p>
            <p className="text-xl mx-8 text-green-400 font-bold">
              Carbon Footprint : {product?.carbonFP / 100} kgCO2e
            </p>
            <Link to={product?.productLink} className="m-8 text-blue-500">
              Buy from Supplier
              <FaLink className="inline-block ml-2 text-white" />
            </Link>
          </div>
          <div className="w-44 h-44 self-center justify-self-center">
            <a href="#comments">
              <Circlebar rating={product?.averageRating} />
            </a>
          </div>
        </div>
      )}

      {/* Render Supplier Data */}

      {(supplierData && supplierData.length > 0) ? (
        <div>
          <div className="flex px-12">
            <p className="mx-4">Company Name: {supplierData[0].companyname}</p>
            <p className="mx-4">Country: {supplierData[0].country}</p>
          </div>
        
        <div className="mt-8 text-2xl text-white p-4 flex flex-col px-12">
          <h3 className="text-4xl font-bold mb-4">ESG Details</h3>

          <p className="my-4">Environmental Pillar Score: {supplierData[0]['Environmental Pillar Score']}</p>
          <p className="my-4">Governance Pillar Score: {supplierData[0]['Governance Pillar Score']}</p>
          <p className="my-4">Latest Score Date: {supplierData[0]['Latest Score Date']}</p>
        </div>
        </div>
      ) : (
        <div className="mt-8 text-2xl text-white p-4 flex flex-col px-12">
          <h3 className="text-4xl font-bold mb-4">ESG Details</h3>
          <p>No supplier data available.</p>
        </div>
      )}

      <div className="w-full px-14">
        <div className="w-full">
          <div className="container w-[80%] mx-auto p-4 mt-12 mb-20 relative">
            <h1 className="text-3xl font-bold mb-8 text-center text-orange-400">
              Product Journey
            </h1>
            <div className="timeline-container">
              <SupplyChain supplyChain={product?.supplyChain} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 w-full px-14 my-4">
        {user ? (
          <form
            onSubmit={handleSubmitReview}
            className="w-full mx-auto mt-16 pt-8  text-white shadow rounded"
          >
            <h2 className="text-4xl font-bold mb-12">Leave a Review</h2>

            <div className="flex items-center mt-7 space-x-9">
              {/* Render rating inputs */}
              {/* <StarRating /> */}
              <div className="text-white py-6">
                <p className="text-xl">Rate this product</p>
                {[...Array(totalStars)].map((star, index) => {
                  const currentRating = index + 1;

                  return (
                    <label key={index}>
                      <input
                        key={star}
                        type="radio"
                        name="starRating"
                        value={currentRating}
                        onChange={() => setStarRating(currentRating)}
                        // onClick={() => setTotalStars(currentRating)}
                      />
                      <span
                        className="star"
                        style={{
                          color:
                            currentRating <= (hover || starRating)
                              ? "#ffc107"
                              : "#e4e5e9",
                        }}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      >
                        &#9733;
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Write about your experience..."
                value={comment}
                onChange={handleReviewChange}
                className="w-full py-2 px-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 text-xl focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex ml-auto w-fit">
              <button
                type="submit"
                className=" bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2  focus:ring-green-500 focus:ring-opacity-50"
              >
                Submit Review
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 pt-8 text-2xl font-semibold">
            Please log in to leave a review.
          </div>
        )}

        <div className="mt-8">
          {comments.length === 0 ? (
            <h3 className="text-4xl font-bold mb-12" id="comments">
              No comments yet
            </h3>
          ) : (
            <h3 className="text-4xl font-bold mb-4" id="comments">
              Comments:
            </h3>
          )}

          {comments.map((comment, idx) => (
            <div key={idx} className="flex mt-4 rounded-lg p-3 bg-gray-800">
              <div className="">
                <img
                  src={comment.user.avatar}
                  alt=""
                  className="w-32 rounded-lg"
                />
                <p className="text-center">{comment.user.username}</p>
              </div>
              <div className="ml-8">
                <div className=" text-sm text-gray-400">
                  {formatDate(comment.createdAt)}
                </div>
                <div className="mb-2">
                  {[...Array(comment.rating)].map((star, index) => {
                    return (
                      <span
                        key={index}
                        className="text-xl"
                        style={{ color: "#ffc107" }}
                      >
                        &#9733;
                      </span>
                    );
                  })}
                  {[...Array(5 - comment.rating)].map((star, index) => {
                    return (
                      <span
                        key={index}
                        className="text-xl"
                        style={{ color: "#e4e5e9" }}
                      >
                        &#9733;
                      </span>
                    );
                  })}
                </div>
                <div>{comment.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
