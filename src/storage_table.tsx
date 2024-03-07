import * as React from 'react';
import {FC} from 'react';
import {makeStyles} from '@material-ui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Row} from "./data_record.tsx";


export interface StorageTableProps {
    rows: Row[]
}

interface Column {
    id: 'amountOfPayment' | 'interestRate' | 'amountOfMonths' | 'currentDate';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    {id: 'amountOfPayment', label: 'Amount of Payment', minWidth: 170},
    {id: 'interestRate', label: 'Interest Rate', minWidth: 170},
    {id: 'amountOfMonths', label: 'Amount of Months', minWidth: 170},
    {id: 'currentDate', label: 'Current Date', minWidth: 170},
]


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});

function fixedFormat(num: number) {
    return `${num.toFixed(2)}`;
}

export const StorageTable: FC<StorageTableProps> = ({rows}) => {
    const classes = useStyles();
    return (
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns?.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell>{fixedFormat(row.creditSum)}</TableCell>
                                    <TableCell>{row.percent}</TableCell>
                                    <TableCell>{row.term}</TableCell>
                                    <TableCell>{row.currentDate.toDateString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
    );
}