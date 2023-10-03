const parties = document.getElementById('parties');
const newPartyForm = document.getElementById('new-party-form');newPartyForm.addEventListener('submit', 
(event) => {  event.preventDefault();  const name = document.getElementById('name').value;  const date = document.getElementById('date').value;  
const time = document.getElementById('time').value;  const location = document.getElementById('location').value;  const description = document.getElementById('description').value;  
const party = {    name,    date,    time,    location,    description  };  parties.innerHTML += `    <li>      <span>${party.name}</span>      <span>${party.date}</span>      <span>${party.time}</span>      <span>${party.location}</span>      <span>${party.description}</span>      <button>Delete</button>    </li>  `;});parties.addEventListener('click', (event) => {  if (event.target.tagName === 'BUTTON')
 {    const party = event.target.parentNode;   
     parties.removeChild(party);  }});