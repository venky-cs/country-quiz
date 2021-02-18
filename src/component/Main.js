import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Main() {
    const [state, setState] = useState([])
    let randomNumber = Math.floor(Math.random(5)*250)
    useEffect(() => {
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
            console.log(res.data[randomNumber])
            setState(res.data[randomNumber])
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Main
