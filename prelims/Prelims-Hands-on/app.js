const calculation = require('./calculation');

const ratePerHour = 300;
const hourWork = 4;
const day = 6;

const grossIncome = calculation.product(hourWork, ratePerHour * day);
const tax = calculation.product(0.1, grossIncome);
const sss = 1200;
const pagibigFund = 300;
const philHealth = 400;
const totalDeduction = calculation.sum(tax + sss + pagibigFund + philHealth, 0);
const netSalary = calculation.difference(grossIncome, totalDeduction);

console.log('The gross income is ' + grossIncome);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig Fund: ' + pagibigFund);
console.log('PhilHealth: ' + philHealth);
console.log('Total Deduction: ' + totalDeduction);
console.log('Net Salary: ' + netSalary);


