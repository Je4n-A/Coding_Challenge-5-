//Create an inventory Array of Product Objects

 const inventory = [
    {
        name: "coffee",
        price: 2.50,
        quantity: 10
    },
    {
        name: "latte",
        price: 3.50,
        quantity: 20
    },
    {
        name: "cappuccino",
        price: 4.50,
        quantity: 30
    },
    {
        name: "espresso",
        price: 1.50,
        quantity: 40
    }
];

//Create an Orders Array of Order Objects

const orders = [];

function Customer(name, order) {        //Create a Customer Object
    this.name = name;
    this.order = order;
    this.items = order.map(item => ({ name: item.name, quantity: item.quantity }));
    this.status = "Pending";
}

// Create a function to Place an Order 
function placeOrder(name, order) {
    for (let item of order) {
        let product = inventory.find(product => product.name === item.name);
        if (!product || product.quantity < item.quantity) {
            return "Order cannot be placed";
        }
    }
    for (let item of order) {
        let product = inventory.find(product => product.name === item.name);
        product.quantity -= item.quantity;
    }

    const customer = new Customer(name, order);
    orders.push(customer);
    return "Order placed successfully"; 

    }
console.log(placeOrder("John Doe", [
    { name: "coffee", quantity: 2 },
    { name: "latte", quantity: 1 }
    ]));
console.log(orders);
console.log(inventory);

// Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    return order.reduce((total, item) => {
        let product = inventory.find(product => product.name === item.name);
        return total + product.price * item.quantity;
    }, 0);
}
