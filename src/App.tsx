import {useState} from "react";
import "./Components.css"
import {TextField} from "@mui/material";
import {BasicTable} from "./table.tsx";

export interface Row {
    dateOfPayment: string
    oneTimePayment: number
}


export const App = () => {
    const [creditAmount, setCreditAmount] = useState(0.);
    const [interestRate, setInterestRate] = useState(0);
    const [numberOfMonth, setNumberOfMonth] = useState(0);
    const [isHiddenTable, setIsHiddenTable] = useState(true)
    const [rows, setRows] = useState([])

    const calculatePayments = (creditAmount, interestRate, numberOfMonth) => {
        const P = creditAmount
        const r = interestRate / 100.
        const n = numberOfMonth
        const base = Math.pow(1 + r, 1 / 12.)
        const oneTimePayments = P * Math.pow(base, n) * (base - 1) / (Math.pow(base, n) - 1)

        const startDay = new Date()
        const firstPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1))
        const paymentMonth = [firstPaymentMonth]
        for (let i = 0; i < numberOfMonth; i++) {

        }

        return []
    }

    const calculateFormulaAndShowTable = () => {
        const payments: Row[] = calculatePayments(creditAmount, interestRate, numberOfMonth)
        setRows(payments)
        setIsHiddenTable(false)
    }
    return (
        <div className="backgroundOfPage">
            <div className="mainBlock">
                <div className="sumBlock">
                    <TextField onChange={event => setCreditAmount(+event.target.value)} value={creditAmount}/>
                </div>
                <div className="rateBlock">
                    <TextField onChange={event => setInterestRate(+event.target.value)} value={interestRate}/>
                </div>
                <div className="termBlock">
                    <TextField onChange={event => setNumberOfMonth(+event.target.value)} value={numberOfMonth}/>
                </div>
                <button className="paymentsButton" onClick={calculateFormulaAndShowTable}>
                    Total
                </button>
                <BasicTable rows={rows}/>
            </div>
        </div>
    );
}

export default App;

