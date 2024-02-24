import Hero from "../components/Hero/Hero";
import Body from "../components/Body/Body";
import { useDispatch } from 'react-redux';
import { setSupplier } from '../store/supplierSlice';
import axios from "axios";
import { useEffect } from "react";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const checkSupplier = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/v1/supplier/getsupplier",
                );

                if (response.data && response.data.message) {
                    console.log(response.data)
                    alert(response.data.message);
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
        </>
    );
}

export default Home;
