import { useState, useEffect } from "react"

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})
    //using useEffect to load and whenever the function is called it calls the api directly.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

            //converting into json
            .then((res) => res.json())
            //hold the data in the json format
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
