// Searching for data in mango db
use kart 

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})
db.items.find({rating: {$gt: 3.5}})

// And operator
db.items.find({rating: {$gt/$lt: 3.5}, price: {$gt: 4000}})

