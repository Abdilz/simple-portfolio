const setup = () => {
    
    // registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);
    
    
    
	// registreer click event listener 'wisAlles' bij #btnClear
	let btnClear = document.querySelector("#btnClear");
    btnClear.addEventListener("click", wisAlles);
    
	// registreer click event listener 'maakBelangrijk' bij elke <ul> in element
    let ul = document.querySelector("#lstIngredients");
    ul.addEventListener("click", maakBelangrijk);
    
    
}

const voegToe = () => {
	// Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    
    let ul = document.querySelector("#lstIngredients");
    ul.insertAdjacentHTML("beforeend", `<li> ${ingredient}</li>`);
    
}

const wisAlles = () => {
	// Wis alle ingredienten
	// Je kunt dit doen door alle de .innerHTML van #lstIngredients een lege string in te stellen
    let ul = document.querySelector("#lstIngredients");
    ul.innerHTML = "";
}

const maakBelangrijk = (event) => {
    let element = event.target;
    element.classList.add("belangrijk");
}
	
window.addEventListener('load',setup);



















