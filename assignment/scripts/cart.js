console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

/**
 * 
 * @param {string} item item should be a string
 */

//updated this function in the stretch goal to add isFull
function addItem(item) {
    if (!isFull()) {
        basket.push(item);
        return true;
    }
   return false;
}


 addItem("Ball");
 addItem("String");
 addItem("hat");
 addItem("chair");
 addItem("log");
 //addItem("paper");

 //added two items to make sure listItems was working properly
 console.log('What is in my Basket', basket);
 console.log(`is it too full ${isFull()}`);
// create function called list items make it list the items

 function listItems() {
    for (i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
 }

console.log("List of items in basket:");
listItems(basket);

// create a function called empty

function empty() {
    basket = [];
    console.log('All items have been removed from basket');
}

empty(basket);
console.log("basket should be empty", basket);

// I do not like the literals or what ever you call the ${}
// Here is my go at testing using that
console.log(`basket is${basket} empty`);
addItem("Ball");
addItem("String");
console.log(`Basket has these item in it ${basket}`);
empty(basket);
console.log(`Basket check is it empty? ${basket}`);

// stretch goals
console.log('you are here now -------------------');
 
function isFull() {
    if (basket.length < maxItems) { 
        return false;
    } else {
        return true; 
    }
}

isFull(basket);
console.log(`Check if basket is full ${isFull()}`);


// add items to the basket 
// doing this breaks the additem check for the problems above so I will leave it commented out

 addItem("Ball");
 addItem("String");
 addItem("hat");
 addItem("chair");
 addItem("log");

// create a function called removeItem
console.log('----- remove item function below this -----');

/**
 * 
 * @param {string} item 
 */



// function removeItem(item) {
//     const index = basket.indexOf(item);
//     if (index !== -1){
//         item = basket.splice(index, 1); // is this possible to set item equal to the spliced index? it worked but i am unsure
//         return item;
//     } else {
//         return null;
//     }
// }

function removeItem(item) {
    const index = basket.indexOf(item);
    if (index !== -1){
        removedItem = basket.splice(index, 1);
        return removedItem;
    } else {
        return null;
    }
}


//console.log('This is the Item Removed', removeItem('Tarp'));
console.log('This is the Item Removed', removeItem('Ball'));
console.log('Basket after the splice', basket);




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
