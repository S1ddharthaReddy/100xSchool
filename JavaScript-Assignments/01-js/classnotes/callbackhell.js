
// callback function - a function which takes another function as argument

// zomato application

const orderDetails = {
    orderId: 123123,
    food: ["Pizza", "Biriyani", "Coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "bangolore",
    restaurant_location: "white valley",
}

function placedOrder(orderDetails, callback){
    console.log(`${orderDetails.cost} Payment is in progress`);

    setTimeout(()=>{
        console.log("Payment is received and order is placed");
        orderDetails.status = true;
        callback(orderDetails);
    }, 3000)
}

function preparingOrder(orderDetails, callback){
    console.log("Your food preparation started");

    setTimeout(()=>{
        console.log("Your order is now prepared");
        callback();
    }, 3000)
}


// placedOrder();
// preparingOrder();

/* output
Payment is in progress
Your food preparation started
Payment is received and order is placed
Your order is now prepared
*/

function pickupOrder(callback){
    console.log("Delivery boii on the way to pick up the order");

    setTimeout(()=>{
        console.log("I have picked the order");
        callback();
    }, 3000);
}

function deliverOrder(){
    console.log("I am on my way to deliver order");

    setTimeout(()=>{
        console.log("order delivered successfully");
    }, 3000)
}

placedOrder(orderDetails, (orderDetails)=>{
    preparingOrder(orderDetails, ()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
});