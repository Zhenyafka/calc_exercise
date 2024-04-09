import {React, useState} from 'react';
import axios from 'axios';
import "../Components.css";
import {List, ListItem, ListItemText, TextField, Paper} from "@mui/material";


export interface Row {
    message: string
}

export const InfoPage = () => {
    const [url, setUrl] = useState();
    const [list, setList] = useState<Row[]>([])


    const getPosts = () => {
        axios.get(url)
            .then(response => {
                const message = `Accept request with status = ${response.status} and headers: ${response.headers} `;
                const row: Row = {message}
                setList(old => [...old, row])
            })
            .catch((error) => {
                const message = `Error returned with ${error}`
                const row: Row = {message}
                setList(old => [...old, row])
            })
    }

    return (

        <div className="backgroundOfPage">
            <div className="mainBlock">
                <div>
                    <TextField onChange={event => setUrl(event.target.value || "")} value={url}
                               onKeyDown={event=> {
                                   if (event.keyCode == 13) getPosts()
                               }}
                               label={'Enter your URL'} className="urlBlock"/>
                </div>
                <div>
                    <Paper className="textBlock">
                    <List>
                        {list.map(value => <ListItem><ListItemText>{value.message}</ListItemText></ListItem>)}
                    </List >
                    </Paper>
                    <button onClick={getPosts} className="requestButton">Get Info
                    </button>
                </div>

            </div>
        </div>
    )
}