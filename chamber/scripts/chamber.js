const copyWrite = '&copy'
let modifiedDate = document.lastModified;
let currentYear = new Date().getFullYear()
const author = 'William Cameron'
const authorLocation = 'Utah, USA'
let dayIndex = new Date().getDay()
let dayNumber = new Date().getDate()
let monthIndex = new Date().getMonth()

const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']
const dayName = weekDay[dayIndex];
const monthName = monthList[monthIndex]

const x = document.getElementById('hamburgerButton')

const listSwitchGrabber = document.querySelector('#listSwitch')
const gridSwitchGrabber = document.querySelector('#gridSwitch')

const companyURL = 'https://wcamer.github.io/wdd230/chamber/data.json'
//const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Provo,&units=imperial,&appid=7060c635b6a1fcc5f33f2a1f6092c70c'




//console.log(dayName)
//console.log(dayNumber)

//console.log(currentYear);
const currentDate = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`
//console.log(currentDate)

const directorySign = document.querySelector('#directory')
//console.log(directorySign,'this is the sign')
//const gridButton = document.querySelector('.directoryGrid')
//const listButton = document.querySelector('.directoryList')

//listButton.onclick() = directorySwitch
//console.log('this is girdButton',gridButton)
//console.log('this is girdButton',listButton)



//document.querySelector("#footerLocation").textContent = authorLocation;
document.querySelector("#lastUpdated").textContent = `Last Updated: ${modifiedDate}`;
// document.querySelector('#dayName').textContent = dayName;
// document.querySelector('#dayNum').textContent = dayNumber;
// document.querySelector('#monthName').textContent = monthName;
// document.querySelector('#year').textContent = currentYear;
document.querySelector("#todayDate").textContent = currentDate


// footer section
//document.querySelector("#footerTitle").innerHTML = copyWrite;
//document.querySelector("#footerTitle").textContent = `${currentYear} Happy Valley Chamber of Commerce`;
document.querySelector("#footerName").textContent = author;

document.querySelector("#footerDate").innerHTML = copyWrite + currentYear; //`${copyYear} ${author}`;

function toggleMenu() {
    console.log('the menu has been toggled')
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerButton').classList.toggle('open');
}

function moreInfoSwitch() {
    clickMoreInfoGet.classList.toggle('active')

}


function directoryGridSwitch(){
    if (directorySign.classList == 'directoryList'){
        directorySign.classList.remove('directoryList')
        directorySign.classList.add('directoryGrid')
        document.querySelector('#listSwitch').classList.remove('active')
        document.querySelector('#gridSwitch').classList.add('active')
    }
    
    
}

function directoryListSwitch(){
    if (directorySign.classList == 'directoryGrid'){
        directorySign.classList.remove('directoryGrid')
        directorySign.classList.add('directoryList')
        document.querySelector('#gridSwitch').classList.remove('active')
        document.querySelector('#listSwitch').classList.add('active')
    }
}




if (document.querySelector('#directoryMain') || document.querySelector('#spotlightSection') ){
    //console.log('this id is present')

    async function companyDataGetter(){
        const companyResponse= await fetch(companyURL)
        const companyData = await companyResponse.json()
        companies = companyData['companies']
        if (document.querySelector('#directory') && document.querySelector('#spotlightSection') == null){

        return companies.forEach(displayCompanies)
        
        }
        if (document.querySelector('#spotlightSection') && document.querySelector('#directory') == null){
            drawing = []
            randomEliminator = Math.floor(Math.random() * 4)
            console.log(randomEliminator,'here is the random number')
            for (i = 0; i < companies.length; i++){
                if (companies[i].membership == 'Platinum'){
                    drawing.push(companies[i])
                    //drawing.pop(randomEliminator)
                    //console.log(drawing,'this should have 4')
                }
                
            }
            console.log(drawing[randomEliminator].name,'...will be elimnated')
            drawing.splice(randomEliminator,1)
            console.log(drawing,'this should only ahve 3')
            for (i = 0; i < drawing.length; i++){
            company = drawing[i]
            
            let card = document.createElement('div');
            card.id = `spot${i}`
            if (card.id == 'spot1'){
                card.id = 'spotOne'
            } else if (card.id == 'spot2'){
                card.id = 'spotTwo'
            } else{
                card.id = 'spotThree'
            }
            let heading3 = document.createElement('h3');
            let address = document.createElement('p');
            let website = document.createElement('a');
            let number = document.createElement('p');
            let membership = document.createElement('p');
            let logo = document.createElement('img');
            let pictureTag = document.createElement('picture')

            let sourceTag = document.createElement('source')
            sourceTag.setAttribute('media','(min-width: 1020px)')
            sourceTag.setAttribute('srcset', company.largeImage)

            let smallImage = document.createElement('img');
            smallImage.setAttribute('src', company.smallImage);
            smallImage.setAttribute('alt',`Logo for ${company.name}`)
            smallImage.setAttribute('loading','lazy')

            heading3.textContent = company.name

            address.textContent = company.address
            number.textContent = company.phone
            website.setAttribute('href', '#')//company.website)
            website.textContent = company.website

            membership.textContent = `${company.membership} Member`
            membership.classList ='member'
            
            
            card.classList = company.membership

    
            
            card.appendChild(heading3)
            pictureTag.appendChild(sourceTag)
            pictureTag.appendChild(smallImage)
            card.appendChild(pictureTag)
            card.appendChild(address)
            card.appendChild(number)
            card.appendChild(website)
            

            document.querySelector('#spotlightSection').appendChild(card);
  
         }
        }


    }
    
    const displayCompanies = function(company){
        let card = document.createElement('section');
        let heading3 = document.createElement('h3');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let number = document.createElement('p');
        let membership = document.createElement('p');
        let logo = document.createElement('img');
        logo.setAttribute('src',company.logo);
        logo.setAttribute('alt',`This is the logo for ${company.name}.`);
        logo.setAttribute('loading','lazy');

        
        
        heading3.textContent = company.name

        address.textContent = company.address
        number.textContent = company.phone
        website.setAttribute('href', '#')//company.website)
        website.textContent = company.website

        membership.textContent = `${company.membership} Member`
        membership.classList ='member'
        
        
        card.classList = company.membership


        card.appendChild(logo)
        card.appendChild(heading3)
        card.appendChild(address)
        card.appendChild(number)
        card.appendChild(website)
        card.appendChild(membership)
        document.querySelector('#directory').appendChild(card);

    
    }

    companyDataGetter()
 


}






if (gridSwitchGrabber !== null && listSwitchGrabber !== null){
    listSwitchGrabber.onclick = directoryListSwitch;
    gridSwitchGrabber.onclick = directoryGridSwitch;
    //console.log('listSwitchGrabber or gridSwitchGrabber is  present')
}
// else{
//     console.log('listSwitchGrabber or gridSwitchGrabber are not present')
// }
   


if(dayName == 'Monday' || dayName == 'Tuesday'){
    document.getElementById('meeting').id=('reveal')
}

const clickMoreInfoGet = document.getElementById('clickMoreInfo')
//console.log(clickMoreInfoGet,'here is clickmoreinfoget')

if (clickMoreInfoGet != null){
    clickMoreInfoGet.onclick = moreInfoSwitch
 }
//else{
//     console.log(clickMoreInfoGet,'here is clickmoreinfoget and it is null')
// }


//clickMoreInfoGet.onclick = moreInfoSwitch

x.onclick = toggleMenu;


if (document.querySelector('#weatherSection')){
    console.log('weatherSection is present')
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=7060c635b6a1fcc5f33f2a1f6092c70c'
    async function weatherGetter(){
        const weatherResponse = await fetch(weatherURL)
        const weatherData = await weatherResponse.json()
        console.log(weatherData)
        displayWeather(weatherData)


    }

    const displayWeather = function(weatherInfo){
       
        tempK = weatherInfo.main.temp
        tempC = weatherInfo.main.temp - 273.15 //for later just in case we need to see this option
        tempF = (weatherInfo.main.temp - 273.15) * (9/5) + 32// for when degrees are in kelvin
        currentTemp = document.createElement('p')
        currentTemp.id = 'degree'
        currentTemp.innerHTML = `<strong>${tempK.toFixed(0)} &#x2109;</strong>`
        //currentTempC.innerHTML = `${tempC} &#x2103;`

        weatherDescription = weatherInfo.weather[0].description.toUpperCase()
        weatherCurrentDescription = document.createElement('p')
        weatherCurrentDescription.id = 'weatherDescription'
        weatherCurrentDescription.innerHTML = `<strong>${weatherDescription}</strong>`
       
        weatherImage = document.createElement('img')
        weatherIconSrc = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`;
        weatherImage.setAttribute('alt', weatherDescription)
        weatherImage.setAttribute('src', weatherIconSrc)
        //weatherImage.setAttribute('load','lazy')
        
        windSpeed = weatherInfo.wind.speed
        if (tempK <= 50 && windSpeed > 3){
            windChillValue = 35.74 + (0.6215 * tempK) - (35.75*(windSpeed ** 0.16)) + (0.4275*(tempK*(windSpeed ** .16)))
            windChill = windChillValue.toFixed(0)
            //windChill = weatherInfo.wind.deg.toFixed(0)

        }else{
            windChill = 'N/A'
        }

        

        weatherTop = document.querySelector('.weatherContainerTop')
        weatherHeader = document.createElement('h2')
        weatherHeader.id = 'weatherHeader'
        weatherHeader.innerHTML = '<strong>Weather</strong>'

        weatherTop.appendChild(weatherHeader)
        weatherTop.appendChild(weatherImage)
        weatherTop.appendChild(currentTemp)
        weatherTop.appendChild(weatherCurrentDescription)

        weatherBottom = document.querySelector('.weatherContainerBottom')
        
        //actualWind = document.querySelector('#actualWindSpeed')
        //actualWind.textContent = windSpeed
        speed = document.createElement('P')
        speed.id = 'windSpeed'
        speed.innerHTML=`<strong>Wind Speed</strong>`
        
        // speedValue = document.createElement('span')
        //speedValue.innerHTML = windSpeed
        //speed.appendChild(speedValue)
        speedValue = document.createElement('p')
        speedValue.id = 'speedValue'
        speedValue.innerHTML = `<strong>${windSpeed} MPH</strong>`
        
        
        chill = document.createElement('p')
        chill.id = 'windChill'
        chill.innerHTML= `<strong>Wind Chill:</strong>`
        
        // chillValue= document.createElement('span')
        // chillValue.innerHTML = windChill
        // chill.appendChild(chillValue)

        chillValue = document.createElement('p')
        chillValue.id = 'chillValue'
        chillValue.innerHTML = `<strong>${windChill}&#x2109;</strong>`

        
        //actualChill = document.querySelector('#actualWindChill')
        //actualChill.textContent = windChill

        

        weatherTop.appendChild(weatherHeader)
        weatherTop.appendChild(weatherImage)
        weatherTop.appendChild(currentTemp)
        weatherTop.appendChild(weatherCurrentDescription)
        weatherTop.append(speed,speedValue)
        weatherTop.append(chill,chillValue)



         
        

    }

    weatherGetter()

}


//Spotlight card construction
// if (document.querySelector('#spotlightSection')){
//     console.log('SpoltlightSection is present')
//     spotOne = document.createElement('div')
//     spotOne.id = 'spotOne'
//     spotTwo = document.createElement('div')
//     spotTwo.id = 'spotTwo'
//     spotThree = document.createElement('div')
//     spotThree.id = 'spotThree'


// }



