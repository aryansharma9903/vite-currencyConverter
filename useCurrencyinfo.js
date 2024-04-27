//creating our own custom hook
//as the hooks provided by react are functions so we can create our own custom hooks
import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('api.frankfurter.app')
            //the data fetched is in form of string, so we convert this data into json format
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            //res[currency] accepts the currency value from json file and then sets the new value.
            //setting the current value of currency to one fetched from api
    }, [currency])
    console.log(data)
    return data
}
export default useCurrencyInfo;