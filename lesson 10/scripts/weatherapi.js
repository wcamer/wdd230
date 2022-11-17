//let headerTag = document.createElement("header")//.id="header"
//headerTag.setAttribute('id','header')
//console.log(headerTag,'this is headertag')


const mainTag = document.createElement('main')
mainTag.classList='weatherMain'


const spanPTag = document.createElement('span')
spanPTag.id ='current-temp'
const pMainTag = document.createElement('p')

pMainTag.appendChild(spanPTag)

//const script = document.createElement('script').setAttribute('src','scripts/weatherapi.js')
const h1 = document.createElement('h1')
h1.innerHTML = 'OpenWeatherMap.org API Test'
console.log(h1,'this is h1')

const h2 = document.createElement('h2')
h2.textContent = 'Current Condition Icon'

const figureTag = document.createElement('figure')
const imgTag = document.createElement('img')
imgTag.id = 'weather-icon'
const figcaptionTag = document.createElement('figcaption')



//structure formation

//document.body.appendChild(headerTag)
// document.querySelector('header').appendChild(h1).textContent = 'OpenWeatherMap.org API Test' //you only add the .textContent when it is being appended
// document.querySelector('.weatherMain').append(h2, figureTag)

// document.querySelector('figure').append(imgTag,figcaptionTag)

//document.pMain.appendChild(spanP)

const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
//const weatherDescription = document.querySelector('figcaption')


const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=7060c635b6a1fcc5f33f2a1f6092c70c'

async function weatherGetter(){
    try{
        const response = await fetch(weatherURL);
        if (response.ok){
            const data = await response.json()
            console.log('here is the data',data);
            displayResults(data)
        }else{
            throw Error(await response.text())

        }
        
    } catch(error){
        console.log(error);
    }
    

    
}

weatherGetter();

function displayResults(weatherData){
    //toFahrenheit = (weatherData.main.temp - 273.15) * (9/5) + 32
    temp = weatherData.main.temp
    console.log(temp,'this is the temp')

    //currentTemp.textContent = `<strong>${temp.toFixed(0)}</strong>`
    console.log(weatherData.main.temp,'this is the coverted temp')
    //currentTemp.innerHTML = `<strong>${toFahrenheit.toFixed(0)}</strong>`
    //console.log(currentTemp,'this is the current temp')
    

    const iconSRC = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    console.log(iconSRC)
    //weatherDescription.textContent = `${weatherData.weather[0].description.toUpperCase()}`
    let description = weatherData.weather[0].description 
    let descriptionArray = description.split(" ")
    console.log(descriptionArray,'this is the descript array')

    for (let i = 0; i < descriptionArray.length; i++){
       descriptionArray[i]= descriptionArray[i].charAt(0).toUpperCase() + descriptionArray[i].slice(1)
        formattedDescription = descriptionArray.join(" ")
        console.log(formattedDescription, 'this is the formatted string')
        //weatherDescription.innerHTML = `<strong>${formattedDescription}</strong>`
        figcaptionTag.innerHTML = `<strong>${formattedDescription}</strong>`
    }





    pMainTag.innerHTML=`The current temperature in Fairbanks, Alaska is <strong>${spanPTag.innerHTML = temp.toFixed(0)}&deg;F</strong>`
    


    imgTag.setAttribute('src', iconSRC)
    imgTag.setAttribute('alt', formattedDescription)
   ///weatherIcon.setAttribute('src', iconSRC)
    //weatherIcon.setAttribute('alt',weatherDescription)
    
    console.log(iconSRC,'here is the iconSRC')

}

//pMainTag.innerHTML=`The current temperature in Provo, Utah is <strong>${spanPTag.innerHTML = currentTemp}</strong>`

document.querySelector('header').appendChild(h1)//.innerHTML = 'OpenWeatherMap.org API Test' //you only add the .textContent when it is being appended
document.querySelector('.weatherMain').append(pMainTag,h2, figureTag)

document.querySelector('figure').append(imgTag,figcaptionTag)


