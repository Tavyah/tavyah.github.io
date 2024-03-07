const greetings = ["Hello little one", "Heyaaaaa", "Greetings o'big one", "Hi green fingers"];
const day = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let plant = {
    _name: "Deliciosa",
    _species: "Monstera",
    _variegation: false,
    get getName() {
        return this._name;
    },
    get getSpecies() {
        return this._species;
    },
    get getVariegation() {
        return this._variegation;
    },
    set name(newName){
        this._name = newName;
    },
    set species(newSpecies) {
        this._species = newSpecies;
    },
    set variegation(newVariegation) {
        this._variegation = newVariegation;
    }
};
const monstera = [["Adansonii", false],
["Borsigiana", false],
["Dubia", false],
["Obliqua", false],
["Standleyana", false]];

const philopdendron = [["Pink Princess", true],
["White Wizard", true],
["White Princess", true],
["Silver Sword", false],
["White Knight", true],
["Prince of Orange", false]];

const plantSpecies = [["Monstera", monstera], ["Philodendron", philopdendron]];


function makePlant() {
    let allPlants = [];
    for(i = 0; i < plantSpecies.length; i++) {

        plantSpecies[i][1].forEach(x => {
            let newPlant = new Object();
            newPlant.name = x[0];
            newPlant.species = plantSpecies[i][0];
            newPlant.variegation = x[1];
            allPlants.push(newPlant);
        })
    }
    /* Returns a list with plants */
    return allPlants;
}

function generate() {
    let plant = makePlant();

    const checkBoxVarigation = document.getElementById("checkbox").checked;
    console.log(checkBoxVarigation);

    if(checkBoxVarigation) {
        /* find a variegated plant */
        const selectedPlant = variegatedPlant(plant);
        setText(selectedPlant);
        setImage(selectedPlant);
    }
    else {
        const selectedPlant = randomPlant(plant);
        setText(selectedPlant);
        setImage(selectedPlant); 
    }    
}

function setImage(plant) {
    let imgResult = document.getElementById("plantResult").querySelector("img");
        
    let imgPlantName = whiteSpaceRemover(plant.name);
        
    /*const imgExit = imgExtension(imgPlantName, plant[randomPlant].species);*/
    const imgExit = ".jpg";

    imgResult.srcset = `./Resources/images/${plant.species}/${imgPlantName}`.toLowerCase() + imgExit;
    imgResult.style.outline = "2px solid white";
}

function setText(plant) {
    let result = document.getElementById("plantResult").querySelector("h3");
    result.innerHTML = `${plant.species} ${plant.name}`;
}

function variegatedPlant(plants) {
    const listWithPlants = plants.filter(plant => plant.variegation);
    return listWithPlants[Math.floor(Math.random() * listWithPlants.length)];
}

function nonVariegatedPlant(plants) {
    const listWithPlants = plants.filter(plant => !plant.variegation);
    return listWithPlants[Math.floor(Math.random() * listWithPlants.length)];
}

function randomPlant(plants) {
    return plants[Math.floor(Math.random() * plants.length)];
}

function randomGreeting() {
    let randomGreet = Math.floor(Math.random() * greetings.length);
    let greeting = document.getElementById("hello");
    greeting.innerHTML = `${greetings[randomGreet]}, you ready to decide what plant you going to buy?`;
}

function checkWhiteSpace(strName) {
    return /\s/.test(strName);
}

function whiteSpaceRemover(strName) {
    let returnString;
    if(checkWhiteSpace(strName)) {
        returnString = strName.replaceAll(" ", "_");
        return returnString;
    }
    else {
        return strName;
    }
}

function imgExtension(file, dir) {
    const extension = ["jpg", "jpeg", "png", "svg"];
    let imgPath = '';

    extension.forEach(ext => {
        const filePath = `./resources/images/${dir}/${file}.${ext}`.toLowerCase();
        console.log(ext);
        const img = new Image();
        img.src = filePath;
        console.log(filePath);
        img.onload = function() {
            imgPath = filePath;
            console.log(imgPath);
            return;
        };
    });
    console.log("img before exit");
    console.log(imgPath);
    return imgPath;
}

function onPageRefresh() {
    randomGreeting();
}

onPageRefresh();