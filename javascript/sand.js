//console.log("hello world");
//console.error("this is an error");
//console.warn("this is an error");


/* variables (let and const) are the best choise since the update
                let can be changed
                const can't be changed*/
//let age = 34;
//age = 45;
//console.log(age);

//const age = 34;
//console.log(age);


//Datatypes (strings, numbers, boolean, null, undefined)
//const name = "Saint"
//const age = 30
//const isCool = true
//const x = null
//const y = undefined
//let z

//console.log(typeof z)

// strings concatination
//const greet = `My name is ${name} and i'm ${age}`
//console.log(greet)

/*object and methods
    object don't have blackets () 
    Methods do have ()*/
const s = "hello world"

//console.log(s.length) //get the legnth

//console.log(s.substring(0,5))

//console.log(s.substring(0,5).toUpperCase())

//console.log(s.toUpperCase())

//console.log(s.toLocaleLowerCase())

//console.log(s.toLowerCase())

//console.log(s.split(""))

const v = "Technology, Medical, Electricity"
//console.log(v.split(","))

//Arrays
/* Array: 
        are simply variables that can hold multiple values
        It also accepts different datatypes within the same array*/
const fruits = ["mangos", "grapes", "peaches"]
const fruitsx = ["Mangos", true, 10]

//console.log(fruitsx, fruits)

fruits[0] = "Orange"
fruits[2] = "avocado"

fruits.push("strawberries") //add to the last

fruits.unshift("Pinenapples") //add to the 0

fruits.pop() //deletes the last one

//console.log(fruits)

//object literals
const person = {
    firstName: "Saint",
    lastName: "Chamak",
    age: 30,
    hobbies: ["coding","programming"],
    address: {
        street: "32 street NY",
        city: "NY",
        state: "NY"
    }
}

//console.log(person.firstName)
//console.log(person.lastName)
//console.log(person.age)
//console.log(person.address.street)

const {firstName, lastName, address:{city}} = person

//console.log(firstName)//creating another function
//console.log(city)

person.email = "Saint@chamak.com"//object literal addition

//console.log(person)


const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Go to the Supermarket",
        isCompleted: true
    },
    {
        id: 3,
        text: "Prepare some food",
        isCompleted: true
    }
]

//console.log(todos[0].text)
//console.log(todos[1].text)
//console.log(todos[2].text)
console.log(todos)

//JSON 
/* data is sent to server in a JSON format*/

const todosJSON = JSON.stringify(todos)// convert javascript to JSON format
console.log(todosJSON)
