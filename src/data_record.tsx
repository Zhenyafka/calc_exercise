export interface Row {
    id: number
    creditSum: number
    percent: number
    term: number
    currentDate: Date
}

export const dataResult: Row[] = []

export const dataRecord = (creditAmount: number, interestRate: number, numberOfMonth: number, date: Date) => {
// eslint-disable-next-line
    const record: Row = {
        id: dataResult.length + 1,
        creditSum: creditAmount,
        percent: interestRate,
        term: numberOfMonth,
        currentDate: date
    }
    dataResult.push({
        id: dataResult.length + 1, creditSum: creditAmount, percent: interestRate,
        term: numberOfMonth, currentDate: date
    } as Row)
    return dataResult

}