//Accessories category
accessories.addEventListener('click', (event) => {
    //enable-disable visibility 
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hairType.classList.add('display_none');
    hair.classList.add('display_none');
    buttonBack.classList.remove('button_back_default');
    buttonBack.classList.add('button_back_visible');
    buttonBack.classList.add('clickable');
    headAccessory.classList.remove('display_none');
    headAccessory.classList.add('category');
    earrings.classList.remove('display_none');
    earrings.classList.add('category');    
})

//Changing hints background-color - accessories
headAccessory.addEventListener('click', (event) => {
    earrings.classList.remove('clickable');
    earrings.classList.add('non-clickable');
    headAccessory.classList.remove('clickable');
    headAccessory.classList.add('non-clickable');
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
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
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.usesHairAccessorie === true) && (charactersCards[i].usesHairAccessorie === false)) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.usesHairAccessorie === false) && (charactersCards[i].usesHairAccessorie === true)) {
        actualCharacter.classList.add('overlay');
    }    
}
})

earrings.addEventListener('click', (event) => {
    headAccessory.classList.remove('clickable');
    headAccessory.classList.add('non-clickable');
    earrings.classList.remove('clickable');
    earrings.classList.add('non-clickable');
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
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
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.usesEarRings === true) && (charactersCards[i].usesEarRings === false)) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.usesEarRings === false) && (charactersCards[i].usesEarRings === true)) {
        actualCharacter.classList.add('overlay');
    }    
}
})

//Face categories
face.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hairType.classList.add('display_none');
    hair.classList.add('display_none');
    beard.classList.remove('display_none');
    beard.classList.add('category');
    glasses.classList.remove('display_none');
    glasses.classList.add('category');
    sunglasses.classList.remove('display_none');
    sunglasses.classList.add('category');
    buttonBack.classList.remove('button_back_default');
    buttonBack.classList.add('button_back_visible');
    buttonBack.classList.add('clickable');
})

beard.addEventListener('click', (event) => {
    glasses.classList.remove('clickable');
    sunglasses.classList.remove('clickable');
    beard.classList.remove('clickable');
    glasses.classList.add('non-clickable');
    sunglasses.classList.add('non-clickable');
    beard.classList.add('non-clickable');
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
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
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.hasBeard === true) && (charactersCards[i].hasBeard === false)) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.hasBeard === false) && (charactersCards[i].hasBeard === true)) {
        actualCharacter.classList.add('overlay');
    }    
}
})

glasses.addEventListener('click', (event) => {
    beard.classList.remove('clickable');
    sunglasses.classList.remove('clickable');
    glasses.classList.remove('clickable');
    beard.classList.add('non-clickable');
    sunglasses.classList.add('non-clickable');
    glasses.classList.add('non-clickable');
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
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
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.usesGlasses === true) && (charactersCards[i].usesGlasses === false)) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.usesGlasses === false) && (charactersCards[i].usesGlasses === true)) {
        actualCharacter.classList.add('overlay');
    }    
}
})

sunglasses.addEventListener('click', (event) => {
    beard.classList.remove('clickable');
    glasses.classList.remove('clickable');
    sunglasses.classList.remove('clickable');
    beard.classList.add('non-clickable');
    glasses.classList.add('non-clickable');
    sunglasses.classList.add('non-clickable');
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
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
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.usesSunglasses === true) && (charactersCards[i].usesSunglasses === false)) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.usesSunglasses === false) && (charactersCards[i].usesSunglasses === true)) {
        actualCharacter.classList.add('overlay');
    }    
}
})


//Gender categories
gender.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hairType.classList.add('display_none');
    hair.classList.add('display_none');
    male.classList.remove('display_none');
    male.classList.add('category');
    female.classList.remove('display_none');
    female.classList.add('category');
    buttonBack.classList.remove('button_back_default');
    buttonBack.classList.add('button_back_visible');
    buttonBack.classList.add('clickable');
})

male.addEventListener('click', (event) => {
    female.classList.remove('clickable');
    female.classList.add('non-clickable');
    male.classList.remove('clickable');
    male.classList.add('non-clickable');
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
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
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.gender === 'male') && (charactersCards[i].gender === 'female')) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.gender === 'female') && (charactersCards[i].gender === 'male')) {
        actualCharacter.classList.add('overlay');
    }    
}
})

female.addEventListener('click', (event) => {
    male.classList.remove('clickable');
    male.classList.add('non-clickable');
    female.classList.remove('clickable');
    female.classList.add('non-clickable');
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
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
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.gender === 'female') && (charactersCards[i].gender === 'male')) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.gender === 'male') && (charactersCards[i].gender === 'female')) {
        actualCharacter.classList.add('overlay');
    }    
}
})

//hairType categories
hairType.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hairType.classList.add('display_none');
    hair.classList.add('display_none');
    bald.classList.remove('display_none');
    bald.classList.add('category');
    curly.classList.remove('display_none');
    curly.classList.add('category');
    wavy.classList.remove('display_none');
    wavy.classList.add('category');
    straight.classList.remove('display_none');
    straight.classList.add('category');
    buttonBack.classList.remove('button_back_default');
    buttonBack.classList.add('button_back_visible');
    buttonBack.classList.add('clickable');
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
    for(let i = 0; i<charactersCards.length; i++) {
        if(computerCharacter.hairType === 'bald') {
            bald.classList.remove('background-color-gray');
            bald.classList.add('background-color-green');
        } else {
            bald.classList.remove('background-color-gray');
            bald.classList.add('background-color-red');
        }
    }
    const allHairType = setTimeout(hideHairType, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.hairType === 'bald') && (charactersCards[i].hairType !== 'bald')) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.hairType !== 'bald') && (charactersCards[i].hairType === 'bald')) {
        actualCharacter.classList.add('overlay');
    }    
}
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
    for(let i = 0; i<charactersCards.length; i++) {
        if(computerCharacter.hairType === 'curly') {
            curly.classList.remove('background-color-gray');
            curly.classList.add('background-color-green');
        } else {
            curly.classList.remove('background-color-gray');
            curly.classList.add('background-color-red');
        }
    }
    const allHairType = setTimeout(hideHairType, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.hairType === 'curly') && (charactersCards[i].hairType !== 'curly')) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.hairType !== 'curly') && (charactersCards[i].hairType === 'curly')) {
        actualCharacter.classList.add('overlay');
    }    
}
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
    for(let i = 0; i<charactersCards.length; i++) {
        if(computerCharacter.hairType === 'wavy') {
            wavy.classList.remove('background-color-gray');
            wavy.classList.add('background-color-green');
        } else {
            wavy.classList.remove('background-color-gray');
            wavy.classList.add('background-color-red');
        }
    }
    const allHairType = setTimeout(hideHairType, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.hairType === 'wavy') && (charactersCards[i].hairType !== 'wavy')) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.hairType !== 'wavy') && (charactersCards[i].hairType === 'wavy')) {
        actualCharacter.classList.add('overlay');
    }    
}
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
    for(let i = 0; i<charactersCards.length; i++) {
        if(computerCharacter.hairType === 'straight') {
            straight.classList.remove('background-color-gray');
            straight.classList.add('background-color-green');
        } else {
            straight.classList.remove('background-color-gray');
            straight.classList.add('background-color-red');
        }
    }
    const allHairType = setTimeout(hideHairType, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.hairType === 'straight') && (charactersCards[i].hairType !== 'straight')) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.hairType !== 'straight') && (charactersCards[i].hairType === 'straight')) {
        actualCharacter.classList.add('overlay');
    }    
}
})

//hair categories
hair.addEventListener('click', (event) => {
    accessories.classList.add('display_none');
    face.classList.add('display_none');
    gender.classList.add('display_none');
    hairType.classList.add('display_none');
    hair.classList.add('display_none');
    pinned.classList.remove('display_none');
    pinned.classList.add('category');
    loose.classList.remove('display_none');
    loose.classList.add('category');
    buttonBack.classList.remove('button_back_default');
    buttonBack.classList.add('button_back_visible');
    buttonBack.classList.add('clickable');
})

pinned.addEventListener('click', (event) => {
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
        if(computerCharacter.pinnedHair === true) {
            pinned.classList.remove('background-color-gray');
            pinned.classList.add('background-color-green');
        } else {
            pinned.classList.remove('background-color-gray');
            pinned.classList.add('background-color-red');
        }
    }
    const allHair = setTimeout(hideHair, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.pinnedHair === true) && (charactersCards[i].pinnedHair === false)) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.pinnedHair === false) && (charactersCards[i].pinnedHair === true)) {
        actualCharacter.classList.add('overlay');
    }    
}
})

loose.addEventListener('click', (event) => {
    //logic
    for(let i = 0; i<charactersCards.length; i++) {
        if(computerCharacter.looseHair === true) {
            loose.classList.remove('background-color-gray');
            loose.classList.add('background-color-green');
        } else {
            loose.classList.remove('background-color-gray');
            loose.classList.add('background-color-red');
        }
    }
    const allHair = setTimeout(hideHair, 1000);
    const displayMainCategories = setTimeout(mainCategories, 1000);
    //comparing computer's card with all characters
    for(let i = 0; i<charactersCards.length; i++){
        const actualCharacter = document.getElementById(charactersCards[i].id);
        if((computerCharacter.looseHair === true) && (charactersCards[i].looseHair === false)) {
            actualCharacter.classList.add('overlay');
        } else if ((computerCharacter.looseHair === false) && (charactersCards[i].looseHair === true)) {
        actualCharacter.classList.add('overlay');
    }    
}
})

buttonBack.addEventListener('click', (event) => {
    const hideAll = setTimeout(hideCategories, 500);
})