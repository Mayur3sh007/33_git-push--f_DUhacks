import React from 'react'

function ProductDetails() {
    return (
        <div>
            <div className="bg-gradient-to-r from-black to-gray-800 dark:bg-gray-800 py-8">
                <div className=" mx-auto px-4  sm:px-6 lg:px-8">
                    <div className="flex mx-auto w-fit md:w-[90%] justify-between items-center ">
                        {/* left */}
                        <div className="md:flex-1 flex ">
                            <div className="h-[460px] rounded-full bg-gray-300 dark:bg-gray-700 mb-4 ">
                                <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
                            </div>

                        </div>
                        {/* right */}
                        <div className="md:flex-1   px-4">
                            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                            </p>
                            <div className="flex my-4 flex-col">
                                <div className="mr-4 py-2">
                                    <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">Rating:</span>
                                    <span className="text-gray-600 px-6 dark:text-gray-300">$29.99</span>
                                </div>
                                <div className="mr-4 py-2">
                                    <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">Carbon footprint:</span>
                                    <span className="text-gray-600 px-6 dark:text-gray-300">$29.99</span>
                                </div>

                            </div>

                            <div>
                                <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-lg mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-2 bg-white m-24 rounded-full'></div>



                <form className="w-[80%] mx-auto mt-16 p-4  text-white shadow rounded">
                    <h2 className="text-6xl font-bold mb-12 text-center">Reviews</h2>

                    <div className="flex flex-col justify-between my-10">
                        <label className=" mb-1 text-3xl">Rating</label>
                        <div className="flex items-center mt-7 space-x-9">
                            <input type="radio" name="rating" id="rating1" value="1" className=" focus:outline-none focus:ring-2  focus:ring-blue-500  w-6 h-6 " />
                            <label for="rating1" className='text-2xl'>1</label>
                            <input type="radio" name="rating" id="rating2" value="2" className=" focus:outline-none focus:ring-2  focus:ring-blue-500 w-6 h-6" />
                            <label for="rating2" className='text-2xl'>2</label>
                            <input type="radio" name="rating" id="rating3" value="3" className=" focus:outline-none focus:ring-2  focus:ring-blue-500 w-6 h-6" />
                            <label for="rating3" className='text-2xl'>3</label>
                            <input type="radio" name="rating" id="rating4" value="4" className=" focus:outline-none focus:ring-2  focus:ring-blue-500 w-6 h-6" />
                            <label for="rating4" className='text-2xl'>4</label>
                            <input type="radio" name="rating" id="rating5" value="5" className=" focus:outline-none focus:ring-2  focus:ring-blue-500 w-6 h-6" />
                            <label for="rating5" className='text-2xl'>5</label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label for="message" className="block text-3xl mb-1 ">Message</label>
                        <textarea id="message" className="w-full py-2 px-4 rounded border bg-gradient-to-r from-gray-800 to-black border-gray-300 focus:outline-none focus:ring-2 text-xl focus:ring-blue-500"></textarea>
                    </div>
                    <div className='flex mx-auto w-fit'>
                        <button
                            // onClick={handleSubmitReview}
                            className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2  focus:ring-green-500 focus:ring-opacity-50"
                        >
                            Submit Review
                        </button>

                    </div>
                </form>

                {/* <div className='h-2 bg-white m-24 rounded-full'></div> */}



                <article className='w-[80%] my-10 flex flex-col justify-center mx-auto'>
                    <div className="flex items-center mb-4">
                        <img className="w-10 h-10 me-4 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div className="font-medium dark:text-white">
                            <p className='font-extrabold text-2xl'>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                        </div>
                    </div>
                    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                    </div>
                    <footer className="mb-5 text-sm text-white dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                    <p className="mb-2 text-white ">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>

                </article>

            </div>
        </div>
    )
}

export default ProductDetails
