// const { response } = require("express");


const props = "http://localhost:8080/contacts"

async function getContacts() {
const response = await fetch(props);
console.log(response.json())
} 
console.log(getContacts())



// console.log(response)

  function generateContactsTemplate(getContacts) {
    return `
      <div class="contact-card">
        <h1 id="contactName"> ${contact.firstName}, ${contact.lastName} </h1>
      </div>
    `};
    const container = document.querySelector(".pokemon-cards");
     function renderPokemonDetails(template, container) {
      const card = document.createElement("div");
      card.innerHTML = template;
      container.appendChild(card);
    }
    renderPokemonDetails
    generateContactsTemplate