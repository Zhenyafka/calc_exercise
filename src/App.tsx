// @ts-ignore
import React from "react";
import {useState} from "react";
import "./Components.css"
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {BasicTable} from "./table.tsx";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const annuityPayments = (creditAmount: number, interestRate: number, numberOfMonth: number, date:Date) => {
    const P = creditAmount
    const r = interestRate / 100.
    const n = numberOfMonth
    const base = Math.pow(1 + r, 1 / 12.)
    const oneTimePayments = P * Math.pow(base, n) * (base - 1) / (Math.pow(base, n) - 1)
    const mainOneTimePayments = P / n
    const percentageOneTimePayments = oneTimePayments - mainOneTimePayments
    const startDay = new Date(date)

    const result: Row[] = []
    for (let i = 0; i < numberOfMonth; i++) {
        let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));
        result.push({
            id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments,
            mainOneTimePayment: mainOneTimePayments, percentageOneTimePayment: percentageOneTimePayments
        } as Row)
    }

    return result
}

export const simplePayments = (creditAmount: number, interestRate: number, numberOfMonth: number, date:Date) => {
    const P = creditAmount
    const r = interestRate / 100.
    const n = numberOfMonth
    const oneTimePayments = P * r
    const mainOneTimePayments = P / n
    const percentageOneTimePayments = oneTimePayments - mainOneTimePayments
    const startDay = new Date(date)

    const result: Row[] = []
    for (let i = 0; i < numberOfMonth; i++) {
        let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));
        result.push({
            id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments,
            mainOneTimePayment: mainOneTimePayments, percentageOneTimePayment: percentageOneTimePayments
        } as Row)
    }

    return result
}

export const differentialPayments = (creditAmount: number, interestRate: number, numberOfMonth: number, date:Date) => {
    const creditSum = creditAmount
    const percent = interestRate / 100.
    const term = numberOfMonth
    const startDay = new Date(date)
    let oneTimePayments = 0
    let balanceOwed = creditSum
    let mainOneTimePayments
    let percentageOneTimePayments

    const result: Row[] = []
    for (let i = 0; i < numberOfMonth; i++) {
        let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));
        balanceOwed = balanceOwed - oneTimePayments
        oneTimePayments = (balanceOwed - oneTimePayments) / numberOfMonth + (balanceOwed - oneTimePayments) * percent / 12
        mainOneTimePayments = (balanceOwed - oneTimePayments) / numberOfMonth
        percentageOneTimePayments = oneTimePayments - mainOneTimePayments
        result.push({
            id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments,
            mainOneTimePayment: mainOneTimePayments, percentageOneTimePayment: percentageOneTimePayments
        } as Row)
    }

    return result
}


export interface Row {
    id: number
    dateOfPayment: Date
    oneTimePayment: number
    mainOneTimePayment: number
    percentageOneTimePayment: number

}

export interface SelectedFunction {
    label: string
    method: (creditAmount: number, interestRate: number, numberOfMonth: number, date:Date)=>Row[];
}

export const listOfSelectedFunction: SelectedFunction[] = [
    {label: "Annuity Payments", method: annuityPayments},
    {label: "Simple Payments", method: simplePayments},
    {label: "Differential Payments", method: differentialPayments}
]


const App = () => {
    const [creditAmount, setCreditAmount] = useState(0.);
    const [interestRate, setInterestRate] = useState(0);
    const [numberOfMonth, setNumberOfMonth] = useState(0);
    const [isHiddenTable, setIsHiddenTable] = useState(true);
    const [rows, setRows] = useState([]);
    const [date, setDate] = useState(new Date());
    const [selectedFunctionForCreditCalculation, setSelectedFunctionForCreditCalculation] = useState<any>(listOfSelectedFunction[0])


    const calculateFormulaAndShowTable = () => {
        if (!isHiddenTable) {
            setIsHiddenTable(true)
            return
        }

        // @ts-ignore
        setRows(selectedFunctionForCreditCalculation.method(creditAmount, interestRate, numberOfMonth, date))
        setIsHiddenTable(false)


        let x = document.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') calculateFormulaAndShowTable()
        })

        // @ts-ignore
        return (

            <div className="backgroundOfPage" onChange={() => x}>
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
                        <DatePicker selected={date} onChange={(date: Date) => setDate(date)}/>
                    </div>
                    <div className="selectorBlock">
                        <FormControl variant="standard" sx={{m: 1, minWidth: 150}}>
                            <InputLabel id="demo-simple-select-standard-label">Type of Calculation</InputLabel>
                            <Select
                                value={selectedFunctionForCreditCalculation}
                                onChange={(e) => {
                                    setSelectedFunctionForCreditCalculation(e.target.value)
                                }}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Type of Calculation">
                                {listOfSelectedFunction.map((row) => (
                                    <MenuItem {...row.method}>{row.label}  </MenuItem>
                                ))}

                            </Select>
                        </FormControl>

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
    }}

export default App;
