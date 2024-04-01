import { React, useState } from 'react';
import axios from 'axios';
import "../Components.css";
import {Paper} from "@mui/material";



const apiUrl = 'https://jsonplaceholder.typicode.com';




export const InfoPage = () => {
    const [request, setRequest] = useState()


    const getPosts = async () => {

        try {
            const response = await axios.get(apiUrl)
            const message = `Accept request with status = ${response.status} and headers: ${response.headers}`
            setRequest(message)
        }
        catch (error) {
            console.error(error.toJSON())
        }
    }

    return (

        <div className="backgroundOfPage">
            <div className="mainBlock">
                <Paper className="textBlock" >
                    {request}
                </Paper>
                <button onClick={getPosts}>Axios</button>
            </div>
        </div>
    )
}