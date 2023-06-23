console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

/**
 * 
 * @param {string} item item should be a string
 */

function addItem(item) {
    basket.push(item);
    return true;
}
 addItem("Ball");
 addItem("String");
 //added two items to make sure listItems was working properly
 console.log('What is in my Basket', basket);

// create function called list items make it list the items

 function listItems(basket) {
    for (i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
 }

console.log("List of items in basket");
listItems(basket);

// create a function called empty

function empty() {
    basket = [];
    console.log('basket is now empty');
}

empty(basket);
console.log("basket should be empty", basket);









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
