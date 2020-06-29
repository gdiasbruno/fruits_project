const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",  {useUnifiedTopology: true,  useNewUrlParser: true });


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
  });

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

  rating: 5,
  review: "Awesome"
});

// fruit.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Awesome"
});

const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Awesome"
});

const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "Awesome"
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Success')
//   }
// });


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
  });

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 8,
  review: "Awesome"
})

// pineapple.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple

});

// person.save();



Fruit.find(function(err, fruits){
  if (err) {
    console.log(err)
  } else {
    console.log(fruits)

mongoose.connection.close();

    // fruits.forEach(logName);
    // function logName(item) {
    //   console.log(item.name);
    // }
    }
  }
);

// Fruit.updateOne({_id:"5ee7d22239dae35e985efb72"},{name:"Platano"}, function(err){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("Success")
//   }
// });

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i].name)

// Fruit.deleteOne({_id:"5ee7d22239dae35e985efb72"}, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful deleted!")
//   }
//   })

// Person.deleteMany({name:"John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted!")
//   }
// })


Person.updateOne({_id:"5ee8aa47a820fd2d1498f1ad"},{favouriteFruit:fruit}, function(err){
  if (err) {
    console.log(err)
  } else {
    console.log("Success")
  }
});
