import { React, useEffect, useState } from 'react';
import axios from 'axios';
import "../Components.css";

const apiUrl = 'https://jsonplaceholder.typicode.com';

const getPosts = () => {
    axios.get(apiUrl)
        .then(response => {
            console.log("headers:", response.headers)
            console.log("data:", response.data)
            console.log("status:", response.status)
        })
        .catch((error) => {
            console.log("error:", error)
        })
}
export const InfoPage = () => {


    return (

        <div className="backgroundOfPage">
            <div className="mainBlock">
                {/*<button onClick={getPosts(apiUrl)}>Axios</button>*/}
            </div>
        </div>
    )
}