import Hero from "../components/Hero/Hero";
import Body from "../components/Body/Body";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setSupplier } from '../store/supplierSlice';
import axios from "axios";
import { useEffect } from "react";
import InputStarRating from "../components/InputStarRating/InputStarRating";

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const checkSupplier = async () => {
            try {
                const response = await axios.get(
                    "/api/v1/supplier/getsupplier",
                );

                if (response.data && response.data.message) {
                    console.log(response.data)
                    // alert(response.data.message);
                    dispatch(setSupplier(response.data));
                    navigate("/");
                }
            } catch (error) {
                console.error("Error:", error);
                // alert("An error occurred while submitting the form");
            }
        }
        checkSupplier();
    }, [])

    return (
        <>
            <Hero />
            <Body />
            <div className="h-60 w-full border-2">
                <InputStarRating />
            </div>
        </>
    );
}

export default Home;
