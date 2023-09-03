show dbs 
use kart 
show collections 

db.items.find({price: 9000})

// Deleting form mongo db
db.items.deleteOne({price: 9000})/deleteMany()
db.items.insertOne({name: "", price: 2000, rating: 2.0, qty: 3, sold: 2})/insertMany

db.items.updateOne({name: "Motorola"}, ($set: {price: 2000}))