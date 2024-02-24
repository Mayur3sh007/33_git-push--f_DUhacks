import Cards from "../Cards/Cards"
import TVimg from "../../assets/logo.png";

const products = [
    {
        title: "Designer Vase",
        productImage: TVimg,
        description: "new vase for your living room",
        brand: "Not from sweatshop",
        carbonFP: 10,
    },
    {
        title: "Designer Vase",
        productImage: TVimg,
        description: "new vase for your living room",
        brand: "Not from sweatshop",
        carbonFP: 10,
    },
    {
        title: "Designer Vase",
        productImage: TVimg,
        description: "new vase for your living room",
        brand: "Not from sweatshop",
        carbonFP: 10,
    },
    {
        title: "Designer Vase",
        productImage: TVimg,
        description: "new vase for your living room",
        brand: "Not from sweatshop",
        carbonFP: 10,
    },


];

export default function Body() {

    if (!products) {
        return (
            <div className=" py-4 bg-gradient-to-r from-black to-gray-800">
                Loading...
            </div>
        )
    }
    return (
        <div className=" py-4 bg-gradient-to-r from-black to-gray-800 pb-24">
            <Cards cardInfo={products.slice(-4)} />
        </div>
    )
}