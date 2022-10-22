import { useEffect, useState } from "react";
import axios from "axios";

const getApiHook = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(url, {
            headers: {
                Accept: 'application/json',
                Authorization: 'application/json'
            }
        },
        )
            .then(function (response) {
                
               

                setError(response.data.error)
                setData(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [url]);

    return {data};
};

export default getApiHook;