1. Extract Functionality into Utility Functions
Scenario: Formatting Dates
You have code that formats dates repeatedly across your application.



Initial Code
```js
const orderDate = new Date();
const formattedOrderDate = orderDate.toISOString().split('T')[0];

const deliveryDate = new Date();
const formattedDeliveryDate = deliveryDate.toISOString().split('T')[0];
```

Create a utility function formatDate to handle date formatting. Use it for all dates.
Refactored Code 

```js

const formatDate = (date) => date.toISOString().split('T')[0];

const orderDate = new Date();
const formattedOrderDate = formatDate(orderDate);

const deliveryDate = new Date();
const formattedDeliveryDate = formatDate(deliveryDate);

```

2. Use Higher-Order Functions
Scenario: Processing Data
You have a list of items where you need to repeatedly apply transformations.

```js 
const prices = [100, 200, 300];

const discountedPrices = [];
for (let i = 0; i < prices.length; i++) {
    discountedPrices.push(prices[i] * 0.9);
}

const taxedPrices = [];
for (let i = 0; i < discountedPrices.length; i++) {
    taxedPrices.push(discountedPrices[i] * 1.15);
}
```

REFACTOR
```js
const prices = [100, 200, 300];

const applyDiscount = (price) => price * 0.9;
const applyTax = (price) => price * 1.15;

const discountedPrices = prices.map(applyDiscount);
const taxedPrices = discountedPrices.map(applyTax);
```

3. Implement Polymorphism
Scenario: Arithmetic Operations
You have several functions performing arithmetic operations based on a string input.

```js

function calculate(operator, a, b) {
    if (operator === 'add') return a + b;
    if (operator === 'subtract') return a - b;
    if (operator === 'multiply') return a * b;
    if (operator === 'divide') {
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
    }
    throw new Error('Invalid operator');
}
```

REFACTOR

Replace the conditionals with an object that maps operations to functions.

```js

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
    },
};

function calculate(operator, a, b) {
    if (!operations[operator]) throw new Error('Invalid operator');
    return operations[operator](a, b);
}
```



