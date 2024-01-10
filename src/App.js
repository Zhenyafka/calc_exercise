import React from "react";
import {Sum} from "./sum";
import {Rate} from "./rate";
import {Term} from "./term";
import TotalTable from "./table";




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
            <div>
                <TotalTable/>
            </div>
        </div>
    </div>
  );
}

export default App;
