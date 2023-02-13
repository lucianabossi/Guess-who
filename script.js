//Getting chracters from json file
import data from './resources/characters.json' assert {type: 'json'};
console.log(data);

//Getting elements from html
const logo = document.getElementById('logo');
const buttonPlay = document.getElementById('btnPlay');
const buttonRules = document.getElementById('btnRules');
const rules = document.getElementById('rules');
const buttonCloseRules = document.getElementById('btnCloseRules');
const characters = document.getElementById('characters');
const hints = document.getElementById('hints');
const accessories = document.getElementById('accessories');
const face = document.getElementById('face');
const gender = document.getElementById('gender');
const hair = document.getElementById('hair');
const headAccessory = document.getElementById('headAccessory');
const earrings = document.getElementById('earrings');
const beard = document.getElementById('beard');
const glasses = document.getElementById('glasses');
const sunglasses = document.getElementById('sunglasses');
const male = document.getElementById('male');
const female = document.getElementById('female');
const bald = document.getElementById('bald');
const curly = document.getElementById('curly');
const wavy = document.getElementById('wavy');
const straight = document.getElementById('straight');

var computerCharacter;
var charactersCards = data.characters;

//draw computer character
const drawCard = () => {
    var cardNumber = parseInt(Math.random() *3);
    computerCharacter = charactersCards[cardNumber];
}

drawCard();
console.log(computerCharacter);

//Logo animation
const logoAnimation = setTimeout(logoUp, 2000);
function logoUp() {
    logo.classList.remove('logo_center');
    logo.classList.add('logo_topLeft');
    logo.style.width = "200px";
    logo.style.height = "216px";
    buttonPlay.classList.remove('display_none');
    buttonRules.classList.remove('display_none');
    buttonPlay.classList.add('display_flex');
    buttonRules.classList.add('display_flex');
}

//Display main categories
function mainCategories() {
    accessories.classList.remove('display_none');
    face.classList.remove('display_none');
    gender.classList.remove('display_none');
    hair.classList.remove('display_none');
    accessories.classList.add('category');
    face.classList.add('category');
    gender.classList.add('category');
    hair.classList.add('category');
}

//Hide accessories subCategories
function hideAccessories() {
    headAccessory.classList.remove('category');
    earrings.classList.remove('category');
    headAccessory.classList.add('display_none');
    earrings.classList.add('display_none');
    accessories.classList.remove('clickable');
    accessories.classList.add('non-clickable');
    accessories.classList.add('text-line-through')
}

//Hide face subCategories
function hideFace() {
    beard.classList.remove('category');
    glasses.classList.remove('category');
    sunglasses.classList.remove('category');
    beard.classList.add('display_none');
    glasses.classList.add('display_none');
    sunglasses.classList.add('display_none');
    face.classList.remove('clickable');
    face.classList.add('non-clickable');
    face.classList.add('text-line-through')
}

//Hide gender subCategories
function hideGender() {
    male.classList.remove('category');
    female.classList.remove('category');
    male.classList.add('display_none');
    female.classList.add('display_none');
    gender.classList.remove('clickable');
    gender.classList.add('non-clickable');
    gender.classList.add('text-line-through')
}

//Hide hair subCategories
function hideHair() {
    bald.classList.remove('category');
    curly.classList.remove('category');
    wavy.classList.remove('category');
    straight.classList.remove('category');
    bald.classList.add('display_none');
    curly.classList.add('display_none');
    wavy.classList.add('display_none');
    straight.classList.add('display_none');
    hair.classList.remove('clickable');
    hair.classList.add('non-clickable');
    hair.classList.add('text-line-through')
}

//Display rules
buttonRules.addEventListener('click', (event) => {
    buttonPlay.classList.remove('display_flex');
    buttonRules.classList.remove('display_flex');
    buttonPlay.classList.add('display_none');
    buttonRules.classList.add('display_none');
    rules.classList.remove('display_none');
    rules.classList.add('display_block');
})

buttonCloseRules.addEventListener('click', (event) => {
    rules.classList.remove('display_block');
    rules.classList.add('display_none');
    buttonPlay.classList.remove('display_none');
    buttonRules.classList.remove('display_none');
    buttonPlay.classList.add('display_flex');
    buttonRules.classList.add('display_flex');
})

//Start game
buttonPlay.addEventListener('click', (event) => {
    buttonPlay.classList.remove('display_flex');
    buttonRules.classList.remove('display_flex');
    buttonPlay.classList.add('display_none');
    buttonRules.classList.add('display_none');
    logo.classList.add('display_none');
    characters.classList.remove('display_none');
    characters.classList.add('container');
    hints.classList.remove('display_none');
    hints.classList.add('hints');
})

//Accessories category
accessories.addEventListener('click', (event) => {
    //enable-disable visibility (css display)
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hair.classList.add('display_none');
    headAccessory.classList.remove('display_none');
    headAccessory.classList.add('category');
    earrings.classList.remove('display_none');
    earrings.classList.add('category');    
})

headAccessory.addEventListener('click', (event) => {
    earrings.classList.remove('clickable');
    earrings.classList.add('non-clickable');
    headAccessory.classList.remove('clickable');
    headAccessory.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.usesHairAccessorie === true) {
            headAccessory.classList.remove('background-color-gray');
            headAccessory.classList.add('background-color-green');
        } else {
            headAccessory.classList.remove('background-color-gray');
            headAccessory.classList.add('background-color-red');
        }
    }
    const allAccessories = setTimeout(hideAccessories, 1000)  
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

earrings.addEventListener('click', (event) => {
    headAccessory.classList.remove('clickable');
    headAccessory.classList.add('non-clickable');
    earrings.classList.remove('clickable');
    earrings.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.usesEarRings === true) {
            earrings.classList.remove('background-color-gray');
            earrings.classList.add('background-color-green');
        } else {
            earrings.classList.remove('background-color-gray');
            earrings.classList.add('background-color-red');
        }
    }
    const allAccessories = setTimeout(hideAccessories, 1000)  
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

//Face categories
face.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hair.classList.add('display_none');
    beard.classList.remove('display_none');
    beard.classList.add('category');
    glasses.classList.remove('display_none');
    glasses.classList.add('category');
    sunglasses.classList.remove('display_none');
    sunglasses.classList.add('category');
})

beard.addEventListener('click', (event) => {
    glasses.classList.remove('clickable');
    sunglasses.classList.remove('clickable');
    beard.classList.remove('clickable');
    glasses.classList.add('non-clickable');
    sunglasses.classList.add('non-clickable');
    beard.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.hasBeard === true) {
            beard.classList.remove('background-color-gray');
            beard.classList.add('background-color-green');
        } else {
            beard.classList.remove('background-color-gray');
            beard.classList.add('background-color-red');
        }
    }
    const allFace = setTimeout(hideFace, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

glasses.addEventListener('click', (event) => {
    beard.classList.remove('clickable');
    sunglasses.classList.remove('clickable');
    glasses.classList.remove('clickable');
    beard.classList.add('non-clickable');
    sunglasses.classList.add('non-clickable');
    glasses.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.usesGlasses === true) {
            glasses.classList.remove('background-color-gray');
            glasses.classList.add('background-color-green');
        } else {
            glasses.classList.remove('background-color-gray');
            glasses.classList.add('background-color-red');
        }
    }
    const allFace = setTimeout(hideFace, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

sunglasses.addEventListener('click', (event) => {
    beard.classList.remove('clickable');
    glasses.classList.remove('clickable');
    sunglasses.classList.remove('clickable');
    beard.classList.add('non-clickable');
    glasses.classList.add('non-clickable');
    sunglasses.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.usesSunglasses === true) {
            sunglasses.classList.remove('background-color-gray');
            sunglasses.classList.add('background-color-green');
        } else {
            sunglasses.classList.remove('background-color-gray');
            sunglasses.classList.add('background-color-red');
        }
    }
    const allFace = setTimeout(hideFace, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})


//Gender categories
gender.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hair.classList.add('display_none');
    male.classList.remove('display_none');
    male.classList.add('category');
    female.classList.remove('display_none');
    female.classList.add('category');
})

male.addEventListener('click', (event) => {
    female.classList.remove('clickable');
    female.classList.add('non-clickable');
    male.classList.remove('clickable');
    male.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.gender === 'male') {
            male.classList.remove('background-color-gray');
            male.classList.add('background-color-green');
        } else {
            male.classList.remove('background-color-gray');
            male.classList.add('background-color-red');
        }
    }
    const allGender = setTimeout(hideGender, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
    
})

female.addEventListener('click', (event) => {
    male.classList.remove('clickable');
    male.classList.add('non-clickable');
    female.classList.remove('clickable');
    female.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.gender === 'female') {
            female.classList.remove('background-color-gray');
            female.classList.add('background-color-green');
        } else {
            female.classList.remove('background-color-gray');
            female.classList.add('background-color-red');
        }
    }
    const allGender = setTimeout(hideGender, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

//Hair categories
hair.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hair.classList.add('display_none');
    bald.classList.remove('display_none');
    bald.classList.add('category');
    curly.classList.remove('display_none');
    curly.classList.add('category');
    wavy.classList.remove('display_none');
    wavy.classList.add('category');
    straight.classList.remove('display_none');
    straight.classList.add('category');
})

bald.addEventListener('click', (event) => {
    curly.classList.remove('clickable');
    wavy.classList.remove('clickable');
    straight.classList.remove('clickable');
    bald.classList.remove('clickable');
    curly.classList.add('non-clickable');
    wavy.classList.add('non-clickable');
    straight.classList.add('non-clickable');
    bald.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.hairType === 'bald') {
            bald.classList.remove('background-color-gray');
            bald.classList.add('background-color-green');
        } else {
            bald.classList.remove('background-color-gray');
            bald.classList.add('background-color-red');
        }
    }
    const allHair = setTimeout(hideHair, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

curly.addEventListener('click', (event) => {
    bald.classList.remove('clickable');
    wavy.classList.remove('clickable');
    straight.classList.remove('clickable');
    curly.classList.remove('clickable');
    bald.classList.add('non-clickable');
    wavy.classList.add('non-clickable');
    straight.classList.add('non-clickable');
    curly.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.hairType === 'curly') {
            curly.classList.remove('background-color-gray');
            curly.classList.add('background-color-green');
        } else {
            curly.classList.remove('background-color-gray');
            curly.classList.add('background-color-red');
        }
    }
    const allHair = setTimeout(hideHair, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

wavy.addEventListener('click', (event) => {
    bald.classList.remove('clickable');
    curly.classList.remove('clickable');
    straight.classList.remove('clickable');
    wavy.classList.remove('clickable');
    bald.classList.add('non-clickable');
    curly.classList.add('non-clickable');
    straight.classList.add('non-clickable');
    wavy.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.hairType === 'wavy') {
            wavy.classList.remove('background-color-gray');
            wavy.classList.add('background-color-green');
        } else {
            wavy.classList.remove('background-color-gray');
            wavy.classList.add('background-color-red');
        }
    }
    const allHair = setTimeout(hideHair, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

straight.addEventListener('click', (event) => {
    bald.classList.remove('clickable');
    curly.classList.remove('clickable');
    wavy.classList.remove('clickable');
    straight.classList.remove('clickable');
    bald.classList.add('non-clickable');
    curly.classList.add('non-clickable');
    wavy.classList.add('non-clickable');
    straight.classList.add('non-clickable');
    //logic
    for(let i = 0; i<data.characters.length; i++) {
        if(computerCharacter.hairType === 'straight') {
            straight.classList.remove('background-color-gray');
            straight.classList.add('background-color-green');
        } else {
            straight.classList.remove('background-color-gray');
            straight.classList.add('background-color-red');
        }
    }
    const allHair = setTimeout(hideHair, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
})

//Applying overlay
function overlay() {
    
}