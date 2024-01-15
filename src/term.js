import React from "react";

export const Term = () => {
    return (
        <div>
            <label>
                <input id="total-term" type="number"
                       min="0" max="100"
                       required placeholder="Enter the number of years"
                       className="inputTerm"/>
            </label>
        </div>
    )
}