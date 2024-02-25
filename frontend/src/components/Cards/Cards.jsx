import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/*
{
    title: "Designer Vase",
    productImage: "https://images.unsplash.com/photo-1612838320302-3e3e3e3e3e3e",
    description: "new vase for your living room",
    brand: "Not from sweatshop",
    carbonFP: 10,    
}
*/
export default function Cards(props) {
    return (

        < div className="flex flex-col md:flex-row justify-between px-8 " >
            {
                props.cardInfo.map((card, index) => (
                    <motion.div
                        // onClick={handleClick}
                        key={index}
                        initial={{ scale: 0.2, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-[24%] lg:w-[20%] h-full bg-gradient-to-r from-gray-800 to-gray-900 p-4 my-3 rounded-xl border-green-300 text-white border shadow-gray-500 shadow-md">
                        <Link to={`/productDetails/${card._id}`}>
                            <p className="font-bold text-2xl mx-2">{card.title}</p>
                            <p className="font-bold text-lg mx-2 text-green-300">{card.brand}</p>

                            <div className="flex flex-wrap justify-evenly">
                                <div className=" my-4">
                                    <img src={card.productImage} className=" rounded-xl h-full " />
                                    {/* <p className="text-xs">{card.description}</p> */}
                                </div>
                            </div>
                            <p>
                                Carbon Footprint : {card.carbonFP}
                            </p>
                        </Link>
                    </motion.div>

                ))
            }
        </div >
    )
}