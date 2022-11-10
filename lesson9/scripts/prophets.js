const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const prophets = jsonObject['prophets'];
//     console.log(prophets,'this is prophets')
//     prophets.forEach(displayProphets);
// });

//this way is more robust
async function prophetDataGetter(){
    const response= await fetch(requestURL)
    const data = await response.json()
    prophets = data['prophets']
    //console.log(prophets,'this is the more robust one')
    return prophets.forEach(displayProphets)
    
}


//prophets.forEach(displayProphets);

const displayProphets = function(prophet){
    
    let card = document.createElement('section');
    let heading2 = document.createElement('h2');
    let image = document.createElement('img');
    let dob = document.createElement('p')
    let birthplace = document.createElement('p')

    heading2.textContent = `${prophet.name} ${prophet.lastname}`//prophet.name +' '+prophet.lastname;
    place = prophet.order
    placement = 'th'
    
    if(place) {
    
    
    if (place % 10 == 1 && place % 100 != 11)
    {
        placement = 'st';
    }
    else if (place % 10 == 2 && place % 100 != 12)
    {
        placement = 'nd';
    }
    else if (place % 10 == 3 && place % 100 != 13)
    {
        placement = 'rd';
    }
    
    }

    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname} -${place}${placement} Latter-day President`) // prophet.name +' '+prophet.lastname);
    image.setAttribute('loading', 'lazy');

    dob.textContent = `Date of Birth: ${prophet.birthdate}`
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`



    card.appendChild(heading2);
    card.appendChild(dob)
    card.appendChild(birthplace)
    card.appendChild(image)
    


    document.querySelector('.cards').appendChild(card)





}

prophetDataGetter()


