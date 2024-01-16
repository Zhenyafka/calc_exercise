import {FC} from "react";

interface SumProps {
    creditAmount,
    setCreditAmount
}

export const Sum: FC<SumProps> = ({creditAmount, setCreditAmount}) => {
    return (
        <div>
            <label>
                <input id="credit-sum" type="number"
                       min="0" max="10000000"
                       required placeholder="Enter the credit amount"
                       className="inputSum"
                       onChange={setCreditAmount}/>
            </label>
        </div>
    )
}

