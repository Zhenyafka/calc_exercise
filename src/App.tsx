import {React, useState} from "react";
import "./Components.css"
// import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
// import {BasicTable} from "./table.tsx";
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
// import {listOfSelectedFunction} from "./formulas.tsx";
// import {dataRecord} from "./data_record.tsx";
// import {Modal} from "./Components/modal_window.tsx";
import {MainPage} from "./first_tab.tsx";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}





const App = () => {

    return (
        <div>
           <div>
               <MainPage/>
           </div>
        </div>
    );
}

export default App;

