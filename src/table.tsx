import * as React from 'react';
import {FC} from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Row} from "./App";

export interface BasicTableProps {
    rows: Row[]
    isHiddenTable: boolean
}

interface Column {
    id: 'paymentDate' | 'amountOfPayment';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    {id: 'paymentDate', label: 'Payment Date', minWidth: 170},
    {id: 'amountOfPayment', label: 'Amount of Payment', minWidth: 170},
]

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});

export const BasicTable: FC<BasicTableProps> = ({rows,isHiddenTable}) => {
    const classes = useStyles();
    return (
        isHiddenTable ? <div/> :
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.dateOfPayment.toDateString()}</TableCell>
                                <TableCell>{row.oneTimePayment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}