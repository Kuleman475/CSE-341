// const { response } = require("express");


const props = "http://localhost:8080/contacts"

async function getContacts() {
const response = await fetch(props);
console.log(response.json())
} 
console.log(getContacts())



// console.log(response)

