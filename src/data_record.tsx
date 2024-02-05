export interface RowForData {
    id: number
    creditSum: number
    percent: number
    term: number
    currentDate: Date
}

export const dataResult: RowForData[] = []

export const dataRecord = (creditAmount: number, interestRate: number, numberOfMonth: number, date: Date) => {
    const record: RowForData = {
        id: dataResult.length + 1,
        creditSum: creditAmount,
        percent: interestRate,
        term: numberOfMonth,
        currentDate: date
    }
    dataResult.push(record)
    console.log(dataResult)
    return dataResult
}