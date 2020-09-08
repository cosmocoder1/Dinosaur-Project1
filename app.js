let dinoLibrary = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
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

let human = {
  name: name,
  feet: feet,
  inches: inches,
  weight: weight,
  diet: diet
}

// Use IIFE to get human data from form

let getHumanData = (function (name, feet, inches, weight, diet) {
  return {
    name: document.getElementById("name").value,
    feet: document.getElementById("feet").value,
    inches: document.getElementById("inches").value,
    weight: document.getElementById("weight").value,
    diet: document.getElementById("diet").value,
  }})();
    // Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
    


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 



// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

var ranNums = [];

function randomArray () {

const baseArray = [Triceratops, Tyrannosaurus, Anklyosaurus, Brachiosaurus, Stegosaurus, Elasmosaurus, Pteranodon, Pigeon];
i = baseArray.length;
j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i+1));
    ranNums.push(baseArray[j]);
    baseArray.splice(j,1);
  } 
  return ranNums;
}

// retrieve single tile from random array

function retrieveTile () {
  return randomArray();
}

let result = retrieveTile();
console.log(result); 

//push tiles to DOM with three properties
/*
function displayTiles () {
  document.main.appendChild();
}
*/



// Add tiles to DOM

/*push tiles to DOM with three properties

var tile = document.createElement("DIV");                 // Create a <div> node
var textnode = document.createTextNode("Dinosaur");         // Create a text node
tile.appendChild(textnode); 

function displayTiles () {
  randomArray();
  for (let i = 0; i < 9; i++) {
    document.getElementById('grid').appendChild(tile);
  }
}

*/



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

/*
document.getElementById("btn").addEventListener("click", displayTiles);
*/


