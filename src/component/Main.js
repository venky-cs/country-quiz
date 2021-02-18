import React,{useEffect} from 'react'
import Axios from 'axios'
import axios from 'axios'


function Main() {
    useEffect(() => {
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
            console.log(res.data)
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Main
