import React from 'react';

const profiles = [
    {
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
        title: "Clean N Green",
        subtitle: "A sustainable tomorrow",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

];

const Aboutus = () => {
    return (
        <div className="bg-gradient-to-r from-black to-gray-800 min-h-screen flex justify-center items-center">
            <div className="max-w-4xl bg-gradient-to-r  from-gray-700 to-black text-white rounded-lg p-10 gap-7 flex flex-col border-green-300 border-2 shadow-green-500 shadow-2xl backdrop-blur-3xl">
                {profiles.map((profile, index) => (

                    <div key={index} className="">
                        <div className='flex'>
                            <img
                                src={profile.photoUrl}
                                alt="Profile Photo"
                                className="mx-8 w-80 rounded-xl"
                            />
                            <div className='m-2'>
                                <h1 className="text-5xl font-bold text-green-500 mb-2 text-center">{profile.title}</h1>
                                <h2 className="text-3xl text-white mb-4 text-center">{profile.subtitle}</h2>
                                <p className="text-white leading-relaxed">{profile.description}</p>

                            </div>


                        </div>

                    </div>


                ))}
            </div>

        </div>
    );
};

export default Aboutus;