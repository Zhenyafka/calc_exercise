import {React, useState} from "react";
import "../Components.css"
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {BasicTable} from "../table.tsx";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {listOfSelectedFunction} from "../formulas.tsx";
import {dataRecord} from "../data_record.tsx";
import {Modal} from "../components/modal_window.tsx";

export const MainPage = () => {
    const [creditAmount, setCreditAmount] = useState(0.);
    const [interestRate, setInterestRate] = useState(0);
    const [numberOfMonth, setNumberOfMonth] = useState(0);
    const [isHiddenTable, setIsHiddenTable] = useState(true)
    const [rows, setRows] = useState([])
    const [date, setDate] = useState(new Date());
    const [selectedFunctionForCreditCalculation, setSelectedFunctionForCreditCalculation] = useState(listOfSelectedFunction[0])
    const [modalActive, setModalActive] = useState(false)





    const calculateFormulaAndShowTable = () => {
        if (!isHiddenTable) {
            setIsHiddenTable(true)
            return
        }

        setRows(selectedFunctionForCreditCalculation.method(creditAmount, interestRate, numberOfMonth, date))
        setIsHiddenTable(false)
        dataRecord(creditAmount, interestRate, numberOfMonth, date)
        setModalActive(true)
        setTimeout(()=> {setModalActive(false)}, 5000)
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
                                <MenuItem key={row.label} value={row}>{row.label}  </MenuItem>
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
                <div className= "modalBlock">
                    <Modal active={modalActive} setActive={setModalActive}/>
                </div>
                <div className="tableBlock">
                    <BasicTable rows={rows} isHiddenTable={isHiddenTable}/>
                </div>
            </div>
        </div>
    );
}

