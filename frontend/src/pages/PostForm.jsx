import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
  const supplier = useSelector((state) => state.supplier);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    supplyChain: [],
    productImage: null,
    imagePreview: null,
    supplier: supplier.data?._id,
    buyproductlink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSupplyChainChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSupplyChain = [...formData.supplyChain];
    updatedSupplyChain[index] = { ...updatedSupplyChain[index], [name]: value };
    setFormData({ ...formData, supplyChain: updatedSupplyChain });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      productImage: imageFile,
      imagePreview: URL.createObjectURL(imageFile),
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    delete formData.imagePreview;
    try {
      const response = await axios.post(
        '/api/product/createProduct',
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form");
    }
  };

  const addSupplyChainItem = () => {
    setFormData({
      ...formData,
      supplyChain: [...formData.supplyChain, { title: "", description: "" }],
    });
  };

  if (!supplier.status) {
    return <div className="text-center text-white text-8xl h-screen">You are not authorized to access this form.</div>;
  }

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white min-h-screen flex flex-col justify-center px-10">
      <h1 className="text-6xl mb-6 text-green-500">Create New Product</h1>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full"
      >
        <div className="flex justify-between">
          <div className="w-[40%]">
            <div className="mb-4">
              <label htmlFor="title" className="block mb-1 text-white">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-400 bg-gradient-to-r from-gray-900 to-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-1 text-white">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                required
              />
            </div>

            {/* Supply chain fields */}
            {formData.supplyChain.map((item, index) => (
              <div key={index}>
                <div className="mb-4">
                  <label
                    htmlFor={`supplyChainTitle${index}`}
                    className="block mb-1 text-white"
                  >
                    Supply Chain Title:
                  </label>
                  <input
                    type="text"
                    id={`supplyChainTitle${index}`}
                    name="title" // Set the name attribute to "title"
                    placeholder="Chain Title"
                    value={item.title}
                    onChange={(e) => handleSupplyChainChange(index, e)}
                    className="w-full p-2 border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor={`supplyChainDescription${index}`}
                    className="block mb-1 text-white"
                  >
                    Supply Chain Description:
                  </label>
                  <textarea
                    id={`supplyChainDescription${index}`}
                    name="description" // Set the name attribute to "description"
                    placeholder="Chain Description"
                    value={item.description}
                    onChange={(e) => handleSupplyChainChange(index, e)}
                    rows="4"
                    className="w-full p-2 border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                  />
                </div>
              </div>
            ))}

            <div className="mb-4">
              <label htmlFor="buyproductlink" className="block mb-1 text-white">
                Buy Product Link:
              </label>
              <input
                type="url"
                id="buyproductlink"
                name="buyproductlink"
                placeholder="This link will be displayed to the customer wanting to buy this product"
                value={formData.buyproductlink}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                required
              />
            </div>

            {/* Button to add more supply chain items */}
            <div className="mb-4">
              <button
                type="button"
                onClick={addSupplyChainItem}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
              >
                Add Supply Chain Item
              </button>
            </div>
          </div>

          <div className="w-[40%]">
            <div className="mb-4 w-full">
              <label htmlFor="productImage" className="block mb-1 text-white">
                Product Image:
              </label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-400 bg-gradient-to-r from-gray-900 to-black rounded"
                required
              />
              {/* Display image preview */}
              {formData.imagePreview && (
                <img
                  src={formData.imagePreview}
                  alt="Product Preview"
                  className="mt-2 max-w-[180px] mx-auto"
                />
              )}
            </div>
          </div>
        </div>

        {/* Form submission button */}
        <div className="flex justify-center mx-auto">
          <button
            type="submit"
            className="mx-auto relative py-2 px-8 text-white border text-base font-bold rounded-full overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
