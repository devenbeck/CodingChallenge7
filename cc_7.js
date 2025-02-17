//Task 1: Function Declaration
//Scenario: Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount; //formula given 
    return `Total Invoice: ${total.toFixed(2)}`; //keeps it to 2 decimal places
}; 
console.log(calculateInvoice(100, 0.08 ,5)); //for a 100 subtotal at an 8% tax with a 5 dollar discount output should be $103
console.log(calculateInvoice(500, 0.1 , 20)); 

// Task 2 : Function Expression
//Scenario: Employee Hourly Wage Calculation
function calculateHourlyWage(salary, hoursPerWeek) {
    const hourlyWage = (salary / (hoursPerWeek * 52)); //formula given
    return `Hourly wage: $${hourlyWage.toFixed(2)}`; //same as above just different formula
};
console.log(calculateHourlyWage(52000, 40));  //should return $25.00
console.log(calculateHourlyWage(75000, 35));