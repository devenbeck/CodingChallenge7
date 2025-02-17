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

//Task 3: Arrow Function
//Scenario: Customer Loyalty Discount
let calculateLoyaltyDiscount = (amount, years) => {
    let discountRate
    if (years >= 5){
        discountRate = 0.15; //15% discount if over 5 years
    }
    else if (years >= 3){
        discountRate = 0.10;  //10% discount if over 3 years
    }
    else if (years < 3) {
        discountRate = 0.05;  //5% discount if under 3 years
    }
    discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
}
console.log(calculateLoyaltyDiscount(100, 6)); // Should be Discounted Price: $85.00
console.log(calculateLoyaltyDiscount(200, 2)); 

//Task 4: Parameters and Arguments
//Scenario: Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false ) {   //function given
    let flatRate;
    if (location === "USA") {   
        flatRate = 5 + (0.5 * weight); //$5 plus 0.5 per lb 
    }
    else if (location === "Canada") {
        flatRate = 10 + (0.7 * weight);
    }
    if (expedited) {
        flatRate += 10;
    }
    return `Shipping Cost: $ ${flatRate.toFixed(2)}`;
}; 
console.log(calculateShippingCost(10, "USA", true)); // Should readShipping Cost: $20.00
console.log(calculateShippingCost(5, "Canada", false)); // Shipping Cost: $13.50

//Task 5: Returning Values
//Scenario: Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years) {  
    let interest = principal * rate * years;              //formula given for loan calculation
    return `Total Interest: $${interest.toFixed(2)}`;
}
console.log(calculateLoanInterest(1000, 0.05, 3)); //Output will be $150.00 
console.log(calculateLoanInterest(5000, 0.07, 5));