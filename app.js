
// JSON library moved into JS

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



// create Dino Constructor

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



// create Dino Objects

let Triceratops = new DinoConstructor(0);
let Tyrannosaurus = new DinoConstructor(1);
let Anklyosaurus = new DinoConstructor(2);
let Brachiosaurus = new DinoConstructor(3);
let Stegosaurus = new DinoConstructor(4);
let Elasmosaurus = new DinoConstructor(5);
let Pteranodon = new DinoConstructor(6);
let Pigeon = new DinoConstructor(7);



// create Human Object

let humanObject = {}; 



// get human data from form

const getHumanData = () => {
 
  humanObject.name = document.form.name.value;
  humanObject.feet = document.form.feet.value;
  humanObject.inches = document.form.inches.value;
  humanObject.weight = document.form.weight.value;
  humanObject.diet = document.form.diet.value.toLowerCase();
  humanObject.species = 'human';
  humanObject.dietComparison = '';
  humanObject.heightComparison2 = '';
  humanObject.weightComparison3 = '';

};



// create Dino Compare Method 1

compareDiet = (dinosaur) => {

    if (humanObject.diet === dinosaur.diet) {
      humanObject.dietComparison = `You have the same diet as the ${dinosaur.species}`;
    } else { humanObject.dietComparison = `You are a ${humanObject.diet} and the ${dinosaur.species} is a ${dinosaur.diet}`;
  }
}



// create Dino Compare Method 2

compareHeight = (dinosaur) => {

  let humanHeight = humanObject.feet + humanObject.inches;
    if (humanHeight === dinosaur.height) {
      humanObject.heightComparison = `You are the same height as the ${dinosaur.species}`;
    } else if (humanHeight < dinosaur.height) {
      humanObject.heightComparison = `You are ${dinosaur.height - humanHeight} inches shorter than the ${dinosaur.species}`;
    } else { humanObject.heightComparison = `You are ${humanHeight - dinosaur.height} inches taller than the ${dinosaur.species}`;
  }
}



// create Dino Compare Method 3

compareWeight = (dinosaur) => {

    if (humanObject.weight === dinosaur.weight) {
      humanObject.weightComparison = `You are the same weight as the ${dinosaur.species}`;
    } else if (humanObject.weight < dinosaur.weight) {
      humanObject.weightComparison = `You weigh ${dinosaur.weight - humanObject.weight} lbs less than the ${dinosaur.species}`;
    } else { dinosaur.weightComparison = `You weigh ${humanObject.weight - dinosaur.weight} lbs more than the ${dinosaur.species}!`;
  }
}
 


// generate Random Array of Dinosaurs

var randomDinos = [];



// populate empty array with all dinosaurs and no repeats

const randomArray = () => {

const baseArray = [Triceratops, Tyrannosaurus, Anklyosaurus, Brachiosaurus, Stegosaurus, Elasmosaurus, Pteranodon, Pigeon];
i = baseArray.length;
j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i+1));
    randomDinos.push(baseArray[j]);
    baseArray.splice(j, 1);
  } 
return randomDinos;

}



//add human tile to 5th position in array

randomArray();
randomDinos.splice(4, 0, humanObject);



// Generate Tiles for each Dino in Array

const generateTile = (i) => {

  let tile = document.createElement('div');
  tile.classList.add('grid-item');
  let name = document.createElement('h3');
  let fact = document.createElement('p');
  let comparison = document.createElement('p');
  let image = document.createElement('img');
  let dietComparison = randomDinos[i].dietComparison;
  let heightComparison = randomDinos[i].heightComparison;
  let weightComparison = randomDinos[i].weightComparison;


// human tile parameters

    if (randomDinos[i].species === 'human') {

    
      name.innerHTML = randomDinos[i].name;
      image.src = `images/${randomDinos[i].species}.png`;
      comparison.innerHTML = dietComparison + '.  ' + heightComparison + ' and ' + weightComparison + '!';
  

      tile.appendChild(name);
      tile.appendChild(image);
      tile.appendChild(comparison);
    
  return tile;


  // pigeon tile parameters

    } else if (randomDinos[i].species === 'Pigeon') {

    name.innerHTML = randomDinos[i].species;
    fact.innerHTML = randomDinos[i].fact;
    image.src = `images/${randomDinos[i].species}.png`;

    tile.appendChild(name);
    tile.appendChild(fact);
    tile.appendChild(image);

  return tile;


// all other tile parameters

} else {
  
    let height = document.createElement('p');
    let weight = document.createElement('p');
    let diet = document.createElement('p');
    let where = document.createElement('p');
    let when = document.createElement('p');

    height.innerHTML = randomDinos[i].height + ' inches tall';
    weight.innerHTML = randomDinos[i].weight + ' pounds';
    diet.innerHTML = randomDinos[i].diet;
    where.innerHTML = randomDinos[i].where;
    when.innerHTML = randomDinos[i].when;

    name.innerHTML = randomDinos[i].species;
    fact.innerHTML = randomDinos[i].fact;
    image.src = `images/${randomDinos[i].species}.png`

  tile.appendChild(name);


// random fact display conditionals

  var j = Math.floor(Math.random() * 4);
    if (j === 0) {
      tile.appendChild(height);
  } else if (j === 1) {
      tile.appendChild(weight);
  } else if (j === 2) {
      tile.appendChild(diet);
  } else if (j === 3) {
      tile.appendChild(where);
  } else if (j === 4) {
      tile.appendChild(when);
  }
  tile.appendChild(image);
  
  }
  return tile;
}



// append tiles to grid

const displayTiles = () => {
  for (let i = 0; i < 9; i++) {
    let tile = generateTile (i);
    grid.appendChild(tile);
  }
}



// select random dinosaur for comparison displays

const comparisonSelector = () => {
  let dinosaursOnly = [Triceratops, Tyrannosaurus, Anklyosaurus, Brachiosaurus, Stegosaurus, Elasmosaurus, Pteranodon, Pigeon];
  return dinosaursOnly[Math.floor(Math.random() * 8)];
}



// remove form from screen

function hideForm() {
  document.getElementsByClassName("form-container")[0].style.display = "none";
}

// display infographic

function displayGrid() {
  document.getElementById("grid").style.display = "flex";
}


// activate button

document.getElementById("btn").addEventListener("click", () => {
 
 hideForm();
 getHumanData();
 compareDiet(comparisonSelector());
 compareHeight(comparisonSelector());
 compareWeight(comparisonSelector());
 displayGrid();
 displayTiles();
});









