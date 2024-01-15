import React from "react";
import './Components.css';
import {Sum} from "./sum";
import {Rate} from "./rate";
import {Term} from "./term";
import {BasicTable} from "./table";
import {Total} from "./Total";




function App() {
    return (
    <div className="backgroundOfPage">
        <div className="mainBlock">
            <div className="sumBlock">
                <Sum/>
            </div>
            <div className="rateBlock">
                <Rate/>
            </div>
            <div className="termBlock">
                <Term/>
            </div>
            <button className="paymentsButton">
                Total
            </button>
        </div>
    </div>
  );
}

export default App;

