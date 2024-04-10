import {React, useState} from "react";
import "../Components.css"
import {FormControl, InputLabel, MenuItem, Select, TextField, Box, Slider} from "@mui/material";
import {BasicTable} from "../table.tsx";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {listOfSelectedFunction} from "../formulas.tsx";
import {dataRecord} from "../data_record.tsx";
import {Modal} from "../components/modal_window.tsx";

export const MainPage = () => {
    const [creditAmount, setCreditAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [numberOfMonth, setNumberOfMonth] = useState(0);
    const [isHiddenTable, setIsHiddenTable] = useState(true)
    const [rows, setRows] = useState([])
    const [date, setDate] = useState(new Date());
    const [selectedFunctionForCreditCalculation, setSelectedFunctionForCreditCalculation] = useState(listOfSelectedFunction[0])
    const [modalActive, setModalActive] = useState(false)



    const marksForTerm = [
        {value: 0, label: '0',},
        {value: 3, label: '3',},
        {value: 6, label: '6',},
        {value: 9, label: '9',},
        {value: 12,label: '12',},
        {value: 24, label: '24',},
    ];


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
                               label={'Сумма кредита'}/>
                    <Box sx={{ width: 240 }}>
                        <Slider
                            min={0}
                            max={1000000}
                            step={1000}
                           onChange={event => setCreditAmount(+event.target.value)} value={creditAmount}/>
                    </Box>
                </div>
                <div className="rateBlock">
                    <TextField onChange={event => setInterestRate(+event.target.value)} value={interestRate}
                               label={'Процентная ставка'}/>
                    <Box sx={{ width: 240 }}>
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                           onChange={event => setInterestRate(+event.target.value)} value={interestRate}/>
                    </Box>
                </div>


                <div className="termBlock">
                    <TextField onChange={event => setNumberOfMonth(+event.target.value)} value={numberOfMonth}
                               label={'Срок кредита'}/>
                    <Box sx={{ width: 240 }}>
                        <Slider
                            min={0}
                            max={24}
                            step={null}
                            marks={marksForTerm}
                            onChange={event => setNumberOfMonth(+event.target.value)} value={numberOfMonth}
                        />
                    </Box>
                </div>



                <div className="dateBlock">
                    <DatePicker label={'qwe'} selected={date} onChange={(date) => setDate(date)}/>
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

