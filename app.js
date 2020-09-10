let dinoLibrary = [
  {
      "species": "Triceratops",
      "weight": 13000,
      "height": 114,
      "diet": "herbavor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "First discovered in 1889 by Othniel Charles Marsh",
      "comparison": [],
  },
  {
      "species": "Tyrannosaurus Rex",
      "weight": 11905,
      "height": 144,
      "diet": "carnivor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "The largest known skull measures in at 5 feet long.",
      "comparison": [],
  },
  {
      "species": "Anklyosaurus",
      "weight": 10500,
      "height": 55,
      "diet": "herbavor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Anklyosaurus survived for approximately 135 million years.",
      "comparison": [],
  },
  {
      "species": "Brachiosaurus",
      "weight": 70000,
      "height": "372",
      "diet": "herbavor",
      "where": "North America",
      "when": "Late Jurasic",
      "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
      "comparison": [],
  },
  {
      "species": "Stegosaurus",
      "weight": 11600,
      "height": 79,
      "diet": "herbavor",
      "where": "North America, Europe, Asia",
      "when": "Late Jurasic to Early Cretaceous",
      "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
      "comparison": [],
  },
  {
      "species": "Elasmosaurus",
      "weight": 16000,
      "height": 59,
      "diet": "carnivor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
      "comparison": [],
  },
  {
      "species": "Pteranodon",
      "weight": 44,
      "height": 20,
      "diet": "carnivor",
      "where": "North America",
      "when": "Late Cretaceous",
      "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
      "comparison": [],
  },
  {
      "species": "Pigeon",
      "weight": 0.5,
      "height": 9,
      "diet": "herbavor",
      "where": "World Wide",
      "when": "Holocene",
      "fact": "All birds are living dinosaurs.",
      "comparison": [],
  }
]

// Create Dino Constructor



function DinoConstructor (i) {

  this.species = dinoLibrary[i].species;
  this.weight = dinoLibrary[i].weight;
  this.height = dinoLibrary[i].height;
  this.diet = dinoLibrary[i].diet; 
  this.where = dinoLibrary[i].where; 
  this.when = dinoLibrary[i].when; 
  this.fact = dinoLibrary[i].fact; 
  this.comparison = dinoLibrary[i].comparison;

}



// Create Dino Objects

let Triceratops = new DinoConstructor(0);
let Tyrannosaurus = new DinoConstructor(1);
let Anklyosaurus = new DinoConstructor(2);
let Brachiosaurus = new DinoConstructor(3);
let Stegosaurus = new DinoConstructor(4);
let Elasmosaurus = new DinoConstructor(5);
let Pteranodon = new DinoConstructor(6);
let Pigeon = new DinoConstructor(7);


// Create Human Object


// Use IIFE to get human data from form

let getHumanData = (function (name, feet, inches, weight, diet) {
return {
  name: document.getElementById("name").value,
  feet: document.getElementById("feet").value,
  inches: document.getElementById("inches").value,
  weight: document.getElementById("weight").value,
  diet: document.getElementById("diet").value,
  }
}
)();

let human = getHumanData

  // Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


  
compareHeight = (dinosaur) => {

  let humanHeight = (human.feet * 12) + human.inches;
    if (humanHeight === dinosaur.height) {
      dinosaur.comparison.push(`you are the same height as the ${dinosaur.species}`);
  } else if (humanHeight < dinosaur.height) {
  dinosaur.comparison.push(`you are ${dinosaur.height - humanHeight} inches shorter than the ${dinosaur.species}`)
  } else { dinosaur.comparison.push(`you are ${humanHeight - dinosaur.height} inches taller than the ${dinosaur.species}`)
}
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 



compareWeight = (dinosaur) => {

    if (human.weight === dinosaur.weight) {
      dinosaur.comparison.push(`you are the same weight as the ${dinosaur.species}`);
  } else if (human.weight < dinosaur.weight) {
      dinosaur.comparison.push(`you weigh ${dinosaur.weight - human.weight} lbs less than the ${dinosaur.species}`)
  } else { dinosaur.comparison.push(`you weigh ${human.weight - dinosaur.weight} lbs more than the ${dinosaur.species}`)
}
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.



compareDiet = (dinosaur) => {

    if (human.diet === dinosaur.diet) {
      dinosaur.comparison.push(`you have the same diet as the ${dinosaur.species}`);
  } else { dinosaur[comparison].push(`you are an ${human.diet} and the ${dinosaur.species} is a ${dinosaur.diet}`);
}
}


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.



// Generate Tiles for each Dino in Array

var randomDinos = [];

function randomArray () {

const baseArray = [Triceratops, Tyrannosaurus, Anklyosaurus, Brachiosaurus, Stegosaurus, Elasmosaurus, Pteranodon, Pigeon];
i = baseArray.length;
j = 0;

while (i--) {
j = Math.floor(Math.random() * (i+1));
  randomDinos.push(baseArray[j]);
  baseArray.splice(j,1);
} 
return randomDinos;
}

// Random property function




// create tiles and add to DOM




// Add tiles to DOM

//push tiles to DOM with three properties

randomArray();

var grid = document.createElement('div');              
var name = document.createElement('h3');
var fact = document.createElement('p');
var img = document.createElement('img');

name.innerHTML = 'nathan';
fact.innerHTML = 'is cool';
img.src = `images/triceratops.png`;

document.grid.appendChild(name);
document.grid.appendChild(fact);
document.grid.appendChild(img); 

function displayTiles () {
for (let i = 0; i < 9; i++) {
  document.getElementById('grid').appendChild(grid);
}
}






// Remove form from screen

function hideForm() {
  document.getElementsByClassName("form-container")[0].style.visibility = "hidden";
}

document.getElementById("btn").addEventListener("click", hideForm);



// On button click, prepare and display infographic

document.getElementById("btn").addEventListener("click", displayGrid);



function displayGrid() {
  document.getElementById("grid").style.display = "flex";
}

document.getElementById("btn").addEventListener("click", displayTiles);



