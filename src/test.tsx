// import {differentialPayments} from './App.tsx'
//
// const differentialPaymentsFirstTest = (creditAmount, interestRate, numberOfMonth) => {
//     const creditSum = creditAmount
//     const percent = interestRate / 100.
//     const term = numberOfMonth
//     let oneTimePayments = creditSum/term + creditSum*percent/12
//     let balanceOwed = creditSum - oneTimePayments
//     let mainOneTimePayments
//     let percentageOneTimePayments
//     return  oneTimePayments.toFixed(2)
// }
//
//
// test('calculation of first Differential payment', () => {
//     expect(differentialPaymentsFirstTest(1000000, 12, 12)).toBe("93333.33")
// })
//
// const differentialPaymentsSecondTest = (creditAmount, interestRate, numberOfMonth) => {
//     const creditSum = creditAmount
//     const percent = interestRate / 100.
//     const term = numberOfMonth
//     let oneTimePayments = creditSum/term + creditSum*percent/12
//     let balanceOwed = creditSum - oneTimePayments
//     let mainOneTimePayments
//     let percentageOneTimePayments
//     return  balanceOwed
// }
//
// test('calculation of balance od debt on Differential payment', () => {
//     expect(differentialPaymentsSecondTest(1000000, 12, 12)).toBe("916666.67")
// })
//
// test('sadfasdf', ()=>{
//     expect(differentialPayments(100000, 10, 20, new Date())).toBe(1234)
// })
//
// // const differentialPaymentsThirdTest = (creditAmount, interestRate, numberOfMonth) => {
// //     const creditSum = creditAmount
// //     const percent = interestRate / 100.
// //     const term = numberOfMonth
// //     let oneTimePayments = creditSum/term + creditSum*percent/term
// //     let balanceOwed = creditSum - oneTimePayments
// //     let mainOneTimePayments
// //     let percentageOneTimePayments
// //     return  balanceOwed.toFixed(2)
// // }
// //
// // test('calculation of balance od debt on Differential payment', () => {
// //     expect(differentialPaymentsThirdTest(1000000, 12, 12)).toBe("92499.99")
// // })
// //
// //
