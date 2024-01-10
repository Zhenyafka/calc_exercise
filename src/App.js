import React from "react";
import {Sum} from "./sum";
import {Rate} from "./rate";
import {Term} from "./term";




function App() {
    return (
    <div>
        <div>
            <div>
                <Sum/>
            </div>
            <div>
                <Rate/>
            </div>
            <div>
                <Term/>
            </div>
        </div>
            <button onClick="Total()">Calc</button>
    </div>
  );
}

export default App;
