import React from "react";

export const Rate = () => {
    return (
        <div>
            <label>
                <input id="total-rate" type="number"
                       min="0" max="100"
                       required placeholder="Enter interest rate"
                       className="inputRate"/>
            </label>
        </div>
    )
}