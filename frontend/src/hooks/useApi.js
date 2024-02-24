import axios from "axios";
import { setData } from "../store/productSlice.js";
import { useDispatch } from "react-redux";
import {useState, useEffect} from 'react'

const useApi = (url) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        axios
        .get(url)
        .then((res)=>{
            setApiData(res.data)
            dispatch(setData(res.data))
            setIsLoading(false)
        })
        .catch(
            setError("Problems while fecthing products from Backend"),
            setIsLoading(false)
        )
    })

    return {isLoading,error,apiData};

}

export default useApi