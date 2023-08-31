// inserting data in mango db
use kart 
db.items.insertOne({name: "Samsung 30s", price: 11000, rating: 4.5, qty: 233, sold: 98}) 
db.items.insertMany([{name: "Samsung 30s", price: 11000, rating: 4.5, qty: 233, sold: 98}, {name: "Motorola", price: 3000, rating: 2.5, qty: 23, sold: 8}, {name: "Motorola", price: 3000, rating: 2.5, qty: 23, sold: 8}, {name: "RedMI", price: 9000, rating: 3.5, qty: 453, sold: 400}]) 




