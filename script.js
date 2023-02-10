//Getting elements from html
const logo = document.getElementById('logo');
const buttonPlay = document.getElementById('btnPlay');
const buttonRules = document.getElementById('btnRules');
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

accessories.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hair.classList.add('display_none');
    headAccessory.classList.remove('display_none');
    headAccessory.classList.add('category');
    earrings.classList.remove('display_none');
    earrings.classList.add('category');
})

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

//Applying overlay
function overlay() {
    
}