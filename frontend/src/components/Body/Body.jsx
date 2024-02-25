import Cards from "../Cards/Cards"
import axios from "axios";
import { useState, useEffect } from "react";
import TVimg from "../../assets/logo.png";
import { useDispatch } from 'react-redux';
import { setData } from '../../store/productSlice';



// const products = [
//     {
//         title: "Designer Vase",
//         productImage: TVimg,
//         description: "new vase for your living room",
//         brand: "Not from sweatshop",
//         carbonFP: 10,
//     },
//     {
//         title: "Designer Vase",
//         productImage: TVimg,
//         description: "new vase for your living room",
//         brand: "Not from sweatshop",
//         carbonFP: 10,
//     },
//     {
//         title: "Designer Vase",
//         productImage: TVimg,
//         description: "new vase for your living room",
//         brand: "Not from sweatshop",
//         carbonFP: 10,
//     },
//     {
//         title: "Designer Vase",
//         productImage: TVimg,
//         description: "new vase for your living room",
//         brand: "Not from sweatshop",
//         carbonFP: 10,
//     },


// ];



export default function Body() {

    const dispatch = useDispatch();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/v1/product/getAllProducts');
                setProducts(response.data.data);
                dispatch(setData(response.data)) //push all products into store
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    if (!products) {
        return (
            <div className="text-white py-4 bg-gray-900">
                Loading...
            </div>
        )
    }
    return (

        <div className=" py-4 bg-gray-900 pb-24">
            <p className="px-12 my-4 text-4xl font-extrabold text-gray-200">Latest Products</p>
            <Cards cardInfo={products.slice(-4)} />
        </div>
    )
}