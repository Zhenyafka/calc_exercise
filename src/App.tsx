import {useState} from "react";
import "./Components.css"
import {FormControl, InputLabel, MenuItem, TextField} from "@mui/material";
import {BasicTable} from "./table.tsx";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {React} from "react";


export interface Row {
    id: number
    dateOfPayment: Date
    oneTimePayment: number
    mainOneTimePayment: number
    percentageOneTimePayment : number

}


export const App = () => {
    const [creditAmount, setCreditAmount] = useState(0.);
    const [interestRate, setInterestRate] = useState(0);
    const [numberOfMonth, setNumberOfMonth] = useState(0);
    const [isHiddenTable, setIsHiddenTable] = useState(true)
    const [rows, setRows] = useState([])
    const [date, setDate] = useState(new Date());

    const annuityPayments = (creditAmount, interestRate, numberOfMonth) => {
        const P = creditAmount
        const r = interestRate / 100.
        const n = numberOfMonth
        const base = Math.pow(1 + r, 1 / 12.)
        const oneTimePayments = P * Math.pow(base, n) * (base - 1) / (Math.pow(base, n) - 1)
        const mainOneTimePayments = P/n
        const percentageOneTimePayments = oneTimePayments - mainOneTimePayments



        const startDay = new Date(date)
        const result: Row[] = []
        for (let i = 0; i < numberOfMonth; i++) {
            let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));//RAZBERIS' 2
            result.push({id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments,
                mainOneTimePayment:mainOneTimePayments, percentageOneTimePayment:percentageOneTimePayments} as Row)
        }

        return result
    }

    // const simplePayments = (creditAmount, interestRate, numberOfMonth) => {
    //     const P = creditAmount
    //     const r = interestRate / 100.
    //     const n = numberOfMonth
    //     const total = (P*r)*n
    //     const oneTimePayments = total/n
    //
    //     const startDay = new Date(date)
    //     const result: Row[] = []
    //     for (let i = 0; i < numberOfMonth; i++) {
    //         let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));//RAZBERIS' 2
    //         result.push({id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments} as Row)
    //     }
    //
    //     return result
    // }


    // const calculatePaymentsDiff = (creditAmount, interestRate, numberOfMonth) => {
    //     const P = creditAmount
    //     const r = interestRate / 100.
    //     const n = numberOfMonth
    //     const diffPayment = P / n + P * r
    //     const BalanceOwed = P - diffPayment
    //     const newPayment = new BalanceOwed
    //
    //     const startDay = new Date(date)
    //     const result: Row[] = []
    //     for (let i = 0; i < numberOfMonth; i++) {
    //         let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));//RAZBERIS' 2
    //         result.push({id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments} as Row)
    //     }
    // }

    const calculateFormulaAndShowTable = () => {


        if (!isHiddenTable) {
            setIsHiddenTable(true)
            return
        }

        const annuity: Row[] = annuityPayments(creditAmount, interestRate, numberOfMonth)
        setRows(annuity)
        setIsHiddenTable(false)

    }



    let x = document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') calculateFormulaAndShowTable()
    })


    return (

        <div className="backgroundOfPage" onChange={x}>
            <div className="mainBlock">
                <div className="sumBlock">
                    <TextField onChange={event => setCreditAmount(+event.target.value)} value={creditAmount}
                               label={'creditAmount'}/>
                    <input className="slider" type="range" min={0} max={1000000}
                           onChange={event => setCreditAmount(+event.target.value)} value={creditAmount}/>
                </div>
                <div className="rateBlock">
                    <TextField onChange={event => setInterestRate(+event.target.value)} value={interestRate}
                               label={'interestRate'}/>
                    <input className="slider" type="range" min={1} max={100}
                           onChange={event => setInterestRate(+event.target.value)} value={interestRate}/>
                </div>
                <div className="termBlock">
                    <TextField onChange={event => setNumberOfMonth(+event.target.value)} value={numberOfMonth}
                               label={'numberOfMonth'}/>
                    <input className="slider" type="range" min={1} max={1200}
                           onChange={event => setNumberOfMonth(+event.target.value)} value={numberOfMonth}/>
                </div>
                <div className="dateBlock">
                    <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                </div>
                <div className="selectorBlock">
                    <select className="selectType">
                        <option value={"annuity"}>Annuity payment</option>
                        <option value={"simple"}>Simple payment</option>
                        <option value={"differentiated"}>Differentiated payment</option>
                    </select>
                </div>
                <div className="buttonBlock">
                    <button className="paymentsButton" onClick={calculateFormulaAndShowTable}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') calculateFormulaAndShowTable()
                            }}>
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

