import earth from '../../assets/earth.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div className='bg-gray-950 px-12 h-screen flex flex-col items-center my-auto'>
            <div className="py-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div className="flex flex-col w-full justify-center items-start p-8">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-3xl md:text-7xl py-2 text-green-500 tracking-loose">Clean N Green</motion.h1>
                        <motion.h2
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-2xl md:text-3xl leading-relaxed md:leading-snug mb-2 text-gray-50">Protecting today for a sustainable tomorrow
                        </motion.h2>
                        <p className="text-lg md:text-lg text-gray-50 mb-4">One product at a time</p>
                        <Link to="/allProducts" className="h-full w-full">
                            <button
                                className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                            >
                                EXPLORE NOW
                            </button>
                        </Link>


                    </div>
                    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                        <div className="h-48 flex flex-wrap content-center">

                            <div>
                                <motion.img
                                    initial={{ scale: 1 }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 2 }}
                                    className="inline-block w-[500px] mt-24 md:mt-0 p-8 md:p-0 rounded-full" src={earth}>
                                </motion.img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;
