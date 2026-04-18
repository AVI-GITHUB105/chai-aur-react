// function hello(){
//     return []// variablereturn krdo bangaya cusgtome hookeasy simplefunction hi to h
// }

import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
    //fetch()//direct use nhi kr rhe 
    useEffect(() => {// did this so any change will diectly trigger it
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then( (res)=> res.json())//json capitaljson jsonparse
            .then((res) => {
                // console.log('Fetched data:', res);
                setData(res[currency])
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
            });
    }, [currency])
    console.log('Current data:', data);
    // return [data,setData]//shi h but yaha pr currency ka acess lena h
    return data 
}

export default useCurrencyInfo;// function or method hi return kr rhe jo ki data return krrha h all krne pr