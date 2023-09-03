const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/kart');
  // console.log("we are connected");

// new schema defined
  const kittySchema = new mongoose.Schema({
    name: String
  });


kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema); //schema is made a model

const sapien = new Kitten({ name: 'Sapien' });
console.log(sapien.name); // 'Silence'
sapien.speak();
const kittens = await Kitten.find();
console.log(kittens);

// // saving silence
await sapien.save();
sapien.speak();
}