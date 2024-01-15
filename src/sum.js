import React from "react";

export const Sum = () => {
    return (
        <div>
            <label>
                <input id="credit-sum" type="number"
                       min="0" max="10000000"
                       required placeholder="Enter the credit amount"
                       className="inputSum"/>
            </label>
        </div>
    )
}

