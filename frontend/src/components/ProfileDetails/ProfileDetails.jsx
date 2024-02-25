import React from 'react'

function ProfileDetails() {
    return (
        <div>


            <div>


                <div
                    className=" h-full flex flex-col justify-center items-center  border border-gray-700 bg-gray-700 text-gray-50   transition-shadow shadow-xl hover:shadow-xl">
                    <div className="flex items-center">
                        <div className=" flex flex-col items-center w-full">
                            <div
                                className="my-10">
                                <img className="h-40 w-40 rounded-full" src='https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg' alt="dfdf" />
                            </div>
                            <div className="flex flex-col  justify-center items-center  w-full">
                                <div className='text-5xl my-3 font-bold'>name and surname</div>
                                <p className="text-xl text-gray-200">
                                    I can't start my day without a coffee cup
                                </p>
                                <div className="py-2 flex space-x-2">
                                    <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-400 text-purple-400  hover:border-purple-500 px-4 py-1  items-center hover:shadow-lg"><span className="mr-2"></span>FOLLOW<span className="ml-2"></span></button>

                                    <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 items-center hover:shadow-lg"><span className="mr-2"><svg height="20" width="20" viewBox="0 0 32 32" className="fill-current text-red-100"><path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path></svg></span>SPONSOR <span className="ml-2"></span></button>
                                </div>
                                <div
                                    className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                                    <span className="text-center px-2"><span className="font-bold text-gray-50">56</span><span className="text-gray-100"> followers</span></span><span className="text-center px-2"><span className="font-bold text-gray-50">112</span><span className="text-gray-100"> following</span></span><span className="text-center px-2"><span className="font-bold text-gray-50">27</span><span className="text-gray-100"> repos</span></span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='flex w-[80%] mx-auto justify-between'>


                    <div class="min-h-28 w-full">
                        <div class="w-full py-4">
                            <div class="flex gap-6">
                                <div class="bg-white w-80 shadow rounded-lg overflow-hidden">
                                    <img src="https://loremflickr.com/320/240?random=1" class="object-cover h-52 w-full" alt="" />
                                    <div class="p-6">
                                        <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
                                        <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                                            <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                                                Finding best places to visit in California</a></h3>
                                        <div class="flex mt-4 gap-4 items-center">
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                35
                                            </span>
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>

                                                20
                                            </span>
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                                </svg>


                                                15
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="min-h-28 w-full">
                        <div class="w-full py-4">
                            <div class="flex gap-6">
                                <div class="bg-white w-80 shadow rounded-lg overflow-hidden">
                                    <img src="https://loremflickr.com/320/240?random=1" class="object-cover h-52 w-full" alt="" />
                                    <div class="p-6">
                                        <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
                                        <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                                            <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                                                Finding best places to visit in California</a></h3>
                                        <div class="flex mt-4 gap-4 items-center">
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                35
                                            </span>
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>

                                                20
                                            </span>
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                                </svg>


                                                15
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="min-h-28 w-full">
                        <div class="w-full py-4">
                            <div class="flex gap-6">
                                <div class="bg-white w-80 shadow rounded-lg overflow-hidden">
                                    <img src="https://loremflickr.com/320/240?random=1" class="object-cover h-52 w-full" alt="" />
                                    <div class="p-6">
                                        <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
                                        <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                                            <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                                                Finding best places to visit in California</a></h3>
                                        <div class="flex mt-4 gap-4 items-center">
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                35
                                            </span>
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>

                                                20
                                            </span>
                                            <span class="flex gap-1 items-center text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                                </svg>


                                                15
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileDetails