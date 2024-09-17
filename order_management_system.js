//Create an inventory Array of Product Objects

 let inventory = [
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

let orders = [];

function Customername(name, order) {        //Create a Customer Object
    this.name = name;
    this.order = order;
    this.items = order.map(item => ({ name: item.name, quantity: item.quantity }));
    this.status = "Pending" || "Completed";
}