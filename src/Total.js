export function Total () {
    const sum = document.getElementById("creditSum").value;
    const months = document.getElementById("monthCount").value;
    const rate = document.getElementById("rate").value;
    const monthlyRate = rate / 100;
    const payments = months;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthlyPayment = (sum * x * monthlyRate) / (x - 1).toFixed(2);
    const totalPayment = (monthlyPayment * sum).toFixed(2);
    const totalRate = (totalPayment - sum).toFixed(2);
    return totalRate
}