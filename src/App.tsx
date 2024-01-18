import {useState} from "react";
import "./Components.css"
import {TextField} from "@mui/material";
import {BasicTable} from "./table.tsx";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


export interface Row {
    id: number
    dateOfPayment: Date
    oneTimePayment: number
}


export const App = () => {
    const [creditAmount, setCreditAmount] = useState(0.);
    const [interestRate, setInterestRate] = useState(0);
    const [numberOfMonth, setNumberOfMonth] = useState(0);
    const [isHiddenTable, setIsHiddenTable] = useState(true)
    const [rows, setRows] = useState([])
    const [date, setDate] = useState(new Date());

    const calculatePayments = (creditAmount, interestRate, numberOfMonth) => {
        const P = creditAmount
        const r = interestRate / 100.
        const n = numberOfMonth
        const base = Math.pow(1 + r, 1 / 12.)
        const oneTimePayments = P * Math.pow(base, n) * (base - 1) / (Math.pow(base, n) - 1)

        const startDay = new Date(date)
        const result: Row[] = []
        for (let i = 0; i < numberOfMonth; i++) {
            let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));//RAZBERIS' 2
            result.push({id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments} as Row)
        }

        return result
    }


    const calculateFormulaAndShowTable = () => {


        if (!isHiddenTable) {
            setIsHiddenTable(true)
            return
        }
        const payments: Row[] = calculatePayments(creditAmount, interestRate, numberOfMonth)
        setRows(payments)
        setIsHiddenTable(false)
    }

    return (
        <div
            className="backgroundOfPage">
            <div className="mainBlock" onKeyDown={(e) => {
                if (e.key === 'Enter') calculateFormulaAndShowTable()
            }}>
                <div className="sumBlock">
                    <TextField onChange={event => setCreditAmount(+event.target.value)} value={creditAmount}
                               label={'creditAmount'}/>
                </div>
                <div className="rateBlock">
                    <TextField onChange={event => setInterestRate(+event.target.value)} value={interestRate}
                               label={'interestRate'}/>
                </div>
                <div className="termBlock">
                    <TextField onChange={event => setNumberOfMonth(+event.target.value)} value={numberOfMonth}
                               label={'numberOfMonth'}/>
                </div>
                <div className='dateBlock'>
                    <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                </div>
                <div className="buttonBlock">
                    <button className="paymentsButton" onClick={calculateFormulaAndShowTable} >
                        Total
                    </button>
                </div>
                <div className="tableBlock">
                    <BasicTable rows={rows} isHiddenTable={isHiddenTable}/>
                </div>
            </div>
        </div>
    );
}

export default App;

