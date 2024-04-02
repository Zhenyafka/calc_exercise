import { React, useState } from 'react';
import axios from 'axios';
import "../Components.css";
import {Paper, TextField} from "@mui/material";




export const InfoPage = () => {
    const [request, setRequest] = useState('');
    const [url, setUrl] = useState();


    const getPosts = () => {
        axios.get(url)
            .then(response => {
                const message = `Accept request with status = ${response.status} and headers: ${response.headers}`;
                setRequest(message)
            })
            .catch((error) => {
                const showError = `Error returned with ${error}`
                setRequest(showError)
            })
    }

    return (

        <div className="backgroundOfPage">
            <div className="mainBlock">
                <div>
                    <TextField onChange={event => setUrl(event.target.value || "")} value={url}
                                       label={'Enter your URL'} className="urlBlock"/>
                </div>
                <div>
                    <Paper className="textBlock" >
                        {request}
                    </Paper>
                    <button onClick={getPosts} className="requestButton">Get Info</button>
                </div>

            </div>
        </div>
    )
}