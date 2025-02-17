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

//Task 6: Higher Order Functions
//Scenario: Filtering High Value Transcations
let transactions = [500, 1200, 3000, 800, 2200]; //array given 
function filterHighValueTransactions(transactions,filterFunction)  //function made off of amount of transaction
{
    return transactions.filter(filterFunction);
}
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); //Expected output: 1200, 3000, 2200

//Task 7: Closures
//Scenario: Budget Tracker
function createBudgetTracker() {
    let balance = 0;
    return function (expense) {
        balance += expense;
        return `Current Balance: -$${balance}`;  //keeps a running balance
    };
}
let budget = createBudgetTracker ();
console.log(budget(300)); //should return -$300 since started from zero
console.log(budget(200)); //then -500

//Task 8: Recursion in JavaScript
//Scenario: Business Growth Projection
function calculateGrowth (years, revenue) {
    if (years <10) {  
        return calculateGrowth(years + 1, revenue * 1.05 );  //formula made off of revenue increasing by 5% until 10 years
    }
    return `Projected Revenue: $${revenue.toFixed(2)}`;
}
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"