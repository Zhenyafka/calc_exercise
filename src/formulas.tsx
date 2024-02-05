export interface Row {
    id: number
    dateOfPayment: Date
    oneTimePayment: number
    mainOneTimePayment: number
    percentageOneTimePayment: number

}

export const annuityPayments = (creditAmount, interestRate, numberOfMonth, date) => {
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

export const simplePayments = (creditAmount, interestRate, numberOfMonth, date) => {
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

export const differentialPayments = (creditAmount, interestRate, numberOfMonth, date) => {
    const creditSum = creditAmount
    const percent = interestRate / 100.
    const term = numberOfMonth
    const startDay = new Date(date)
    let oneTimePayments = 0
    let oneTimeDiffPayment = 0
    let balanceOwed = creditSum
    let mainOneTimePayments
    let percentageOneTimePayments

    const result: Row[] = []
    for (let i = 0; i < numberOfMonth; i++) {
        let nextPaymentMonth: Date = new Date(startDay.setMonth(startDay.getMonth() + 1));
        oneTimeDiffPayment = creditSum / term
        balanceOwed = balanceOwed - oneTimePayments
        oneTimePayments = oneTimeDiffPayment + balanceOwed * percent / 12
        mainOneTimePayments = oneTimeDiffPayment
        percentageOneTimePayments = balanceOwed * percent / 12
        result.push({
            id: i, dateOfPayment: nextPaymentMonth, oneTimePayment: oneTimePayments,
            mainOneTimePayment: mainOneTimePayments, percentageOneTimePayment: percentageOneTimePayments
        } as Row)
    }





    return result
}


