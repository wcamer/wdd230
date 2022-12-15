//Date creation
let currentDate = new Date()
let day = new Date().getDay()
let dom = new Date().getDate()
let month =  new Date().getMonth()
let year = new Date().getFullYear()
const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dayNamesAbbrev = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']



console.log(currentDate,'current datesserere')
console.log(day,'here is dayyyyyyyyyy')
console.log(month,'here is monthhhhhhhhh')
console.log(dom,'here is dommmmmmmmmmmm')
console.log(year,'here is yearrrrrrrrrrrr')

let footerDate = currentDate
document.querySelector('.modDate').innerHTML = `Last Modified: ${footerDate}`

if(document.querySelector('.currentDate')){
    document.querySelector('.currentDate').innerHTML = `${dayNames[day]} ${monthNames[month]} ${dom}, ${year}`
}



// //Weather retrieve
console.log('testings')
//weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.15&lon=-117.35&appid=8160a27cc620020f4d27e28b30e41789&units=imperial'
//weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=7060c635b6a1fcc5f33f2a1f6092c70c'
//weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=39465c794b2f3633632e563df273bbfb'
//const weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={8160a27cc620020f4d27e28b30e41789}'

if(document.querySelector('.weatherCard') != null){


const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid=7060c635b6a1fcc5f33f2a1f6092c70c'
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&appid=7060c635b6a1fcc5f33f2a1f6092c70c&units=imperial'
//weatherURL = 'api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test'
async function weatherGetter(){
    const weatherResponse = await fetch(weatherURL)
    const forecastResponse = await fetch(forecastURL)
    if(weatherResponse.ok && forecastResponse.ok){ ////////////////////tag opener
        const weatherInfo = await weatherResponse.json()
        const forecastInfo = await forecastResponse.json()

        console.log(weatherInfo)
        console.log(forecastInfo,'here is the forecast info')

        const todayTemp = weatherInfo.main.temp
        const todayDescription = weatherInfo.weather[0].description
        const todayHumidity = weatherInfo.main.humidity

        const todayWeatherIcon = document.createElement('img')
        const todayWeatherIconSrC =`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`;
        const todayWeatherIconAlt = `Weather icon for ${todayDescription} weather.`

        todayWeatherIcon.setAttribute('src',todayWeatherIconSrC)
        todayWeatherIcon.setAttribute('alt', todayWeatherIconAlt)
        todayWeatherIcon.setAttribute('loading','lazy')

        document.querySelector('.iconDisplay').appendChild(todayWeatherIcon)

        //document.querySelector('#mainWeatherIcon').append(todayWeatherIcon)
        document.querySelector('.temp').innerHTML= `${todayTemp.toFixed(0)} <strong>&#x2109</strong>`
        document.querySelector('.weatherDescription').innerHTML= todayDescription.toUpperCase()
        document.querySelector('.humidity').innerHTML = `${todayHumidity} <strong>&#x25;</strong>`

        console.log(todayDescription,todayHumidity,todayTemp)


        //forecast build



        //tomorrow
        const tomorrowName = dayNamesAbbrev[day + 1].toUpperCase()
        const tomorrowNameTag = document.createElement('p')
        tomorrowNameTag.innerHTML = tomorrowName
        const tomorrowTemp = forecastInfo.list[4].main.temp
        const tomorrowTempTag = document.createElement('p')
        tomorrowTempTag.innerHTML = `${tomorrowTemp.toFixed(0)} <strong>&#x2109</strong>`
        const tomorrowDescription = forecastInfo.list[4].weather[0].description
        const tomorrowIcon =`https://openweathermap.org/img/wn/${forecastInfo.list[4].weather[0].icon}@2x.png`
        const tomorrowImage = document.createElement('img')
        tomorrowImage.classList = 'miniIcon'
        tomorrowImage.setAttribute('src',tomorrowIcon)
        tomorrowImage.setAttribute('alt', `Tomorrow's icon is for a ${tomorrowDescription} day`)
        tomorrowImage.setAttribute('loading','lazy')

        tomorrowDiv = document.querySelector('#tomorrowDiv')
        tomorrowDiv.append(tomorrowImage,tomorrowTempTag,tomorrowNameTag)


         // dayafter tomorrow
         const  dATName = dayNamesAbbrev[day + 2].toUpperCase()
         const dATNameTag = document.createElement('p')
         dATNameTag.innerHTML = dATName
         const  dATTemp = forecastInfo.list[12].main.temp
         const dATTempTag = document.createElement('p')
         dATTempTag.innerHTML = `${dATTemp.toFixed(0)} <strong>&#x2109</strong>`
         const dATTDescription = forecastInfo.list[12].weather[0].description
         const dATIcon = `https://openweathermap.org/img/wn/${forecastInfo.list[12].weather[0].icon}@2x.png`
         const dATImage = document.createElement('img')
         dATImage.classList = 'miniIcon'
         dATImage.setAttribute('src',tomorrowIcon)
         dATImage.setAttribute('alt', `Weather icon 2 days from now is for a ${dATTDescription} day`)
         dATImage.setAttribute('loading','lazy')
         const dATDiv = document.querySelector('#twoDaysDiv')
         dATDiv.append(dATImage,dATTempTag,dATNameTag)


         //2 days after tomorrow
         const tDATName = dayNamesAbbrev[day + 3].toUpperCase()
         const tDATNameTag = document.createElement('p')
         tDATNameTag.innerHTML = tDATName
         const tDATTemp = forecastInfo.list[20].main.temp
         const tDATTempTag = document.createElement('p')
         tDATTempTag.innerHTML = `${dATTemp.toFixed(0)} <strong>&#x2109</strong>`
         const tDATDescription = forecastInfo.list[20].weather[0].description
         const tDATIcon = `https://openweathermap.org/img/wn/${forecastInfo.list[20].weather[0].icon}@2x.png`
         const tDATImage = document.createElement('img')
         tDATImage.classList = 'miniIcon'
         tDATImage.setAttribute('src',tomorrowIcon)
         tDATImage.setAttribute('alt', `Weather icon 3 days from now is for a ${tDATDescription} day`)
         tDATImage.setAttribute('loading','lazy')
         const tDATDiv = document.querySelector('#threeDaysDiv')
         tDATDiv.append(tDATImage,tDATTempTag,tDATNameTag)


        // for(f= 4; f < 28; f += 8){
        //     console.log('here is the forecast number', f)
        //     namee = 'name'
        //     temp = forecastInfo.list[f].main.temp
        //     description = forecastInfo.list[f].weather[0].description}
        //     forecastSRC = `https://openweathermap.org/img/wn/${forecastInfo.list[f].weather[0].icon}@2x.png`
        //     forecastALT = `Icon for a ${description} day.`
        //     forecastImage = document.createElement('img')
        //     forecastImage.setAttribute('src', forecastSRC)
        //     forecastImage.setAttribute('alt', forecastALT)
        //     forecastImage.setAttribute('loading', 'lazy')

        //     console.log(namee,temp,description,'here are the values set up ')

        //     tomorrow = document.querySelector('#tomorrowDiv')
        //     dAT = document.querySelector('#twoDaysDiv')
        //     tDAT= document.querySelector('#threeDaysDiv')




        //     // switch(f){
        //     //     case(4):
        //     //     console.log('case 4 triggered')


        //     //     // tomorrow = document.querySelector('#tomorrowDiv')
        //     //     tomorrow.append(forecastImage,namee,temp)
        //     //     break;

        //     //     case(12):
        //     //     console.log('case 12 triggered')

        //     //     // dAT = document.querySelector('#twoDaysDiv')
        //     //     dAT.append(forecastImage,namee,temp)
        //     //     break;

        //     //     case(20):
        //     //     console.log('case 20 triggered')

        //     //     // tDAT= document.querySelector('#threeDaysDiv')
        //     //     tDAT.append(forecastImage,namee,temp)
        //     //     break;



        //     // }


        // }



    }









}


weatherGetter()
}









//fruit json

const fruit = 'https://wcamer.github.io/wdd230/wdd230finalproject/fruit.json'
async function fruitGetter(){
    const fruitResponse = await fetch(fruit)
    console.log('level 1')
    if(fruitResponse.ok){
        const fruitInfo = await fruitResponse.json()


        fruitList = []


        secondList = []
        ThirdList = []

        for(i=0; i < fruitInfo.length; i++){
            fruitList.push(fruitInfo[i])


        }

        if(document.querySelector('.spotlightFruit')){
            const picker = Math.floor(Math.random() * fruitList.length)

            console.log(fruitList[0].carbohydrates,'here is carbs for apple')
            const spotlight = fruitList[picker]
            console.log(spotlight.name,'what is this ')
            const gfruitName = document.querySelector('.chosenFruit')
            const ggenus = document.querySelector('.spotgenusName')
            const gfamily = document.querySelector('.spotfamilyName')

            const gorder = document.querySelector('.spotorderName')
            const gcarbs = document.querySelector('.spotcarbs')
            const gprotein = document.querySelector('.spotprotein')
            const gfats = document.querySelector('.spotfats')
            const gsugar = document.querySelector('.spotsugar')
            const gcalories = document.querySelector('.spotcalories')



            gfruitName.innerHTML= spotlight.name
            ggenus.innerHTML =  spotlight.genus
            gfamily.innerHTML =  spotlight.family
           gorder.innerHTML =  spotlight.order
            gcarbs.innerHTML =  `${spotlight. nutritions.carbohydrates}<strong>g</strong>`
            gprotein.innerHTML =  `${spotlight.nutritions.protein}<strong>g</strong>`
            gfats.innerHTML =  `${spotlight.nutritions.fat}<strong>g</strong>`
            gsugar.innerHTML =  `${spotlight.nutritions.sugar}<strong>g</strong>`
            gcalories.innerHTML =  `${spotlight.nutritions.calories}<strong>g</strong>`


           const fruitIconHolder = document.querySelector('.spotIconHolder')

           const pictureTag = document.createElement('picture')
           pictureTag.classList = 'sizedIcons'

           const largeSource = document.createElement('source')
           largeSource.setAttribute('media','(min-width: 1001px)')
           largeSource.setAttribute('srcset',`images/bigIcons/${spotlight.name}600.jpg`)



           const medSource = document.createElement('source')
            medSource.setAttribute('media','(min-width: 502px) and (max-width: 1000px)')
            medSource.setAttribute('srcset',`images/bigIcons/${spotlight.name}500.jpg`)

           const baseImage = document.createElement('img')
           baseImage.setAttribute('src',`images/bigIcons/${spotlight.name}200.jpg`)
           baseImage.setAttribute('alt',`Icon for ${spotlight.name}.` )
           baseImage.setAttribute('loading','lazy')

           pictureTag.append(largeSource,medSource,baseImage)
           fruitIconHolder.appendChild(pictureTag)


        //    iconSRC = `images/icons/${spotlight.name}50.jpg`
        //    console.log(iconSRC,'here is the img src')
        //    //fruitIcon.setAttribute('src',iconSRC)
        //    icon.setAttribute('src',iconSRC)
        //    fruitIconHolder.appendChild(icon)

           //gfruitName.appendChild(icon)


            //fruitIcon.setAttribute('src',`images/icons/${spotlight.name.toLowerCase()}50.jpg`)

            console.log(gcalories.innerHTML, 'here is caloriesese')
            console.log(spotlight.name, 'here is caloriesese')


        }

        console.log(fruitList)

        if(document.querySelector('.freshOrder') || document.querySelector('.homeOrder')){


            for(i=0; i < fruitInfo.length; i++){
                fruitList.push(fruitInfo[i])
                let pTagOuter = document.createElement('label')
                pTagOuter.classList = 'option'



                pTagOuter.innerHTML= fruitInfo[i].name


                optionTag1 = document.createElement('option')
                optionTag1.classList= 'list1'
                optionTag1.value = fruitInfo[i].name
                optionTag1.innerHTML = fruitInfo[i].name
                optionTag2 = document.createElement('option')
                optionTag2.classList = 'list2'
                optionTag2.value = fruitInfo[i].name
                optionTag2.innerHTML = fruitInfo[i].name
                optionTag3= document.createElement('option')
                optionTag3.classList = 'list3'
                optionTag3.value = fruitInfo[i].name
                optionTag3.innerHTML = fruitInfo[i].name

                document.querySelector('#firstFlavor').appendChild(optionTag1)
                document.querySelector('#secondFlavor').appendChild(optionTag2)
                document.querySelector('#thirdFlavor').appendChild(optionTag3)



                image = document.createElement('img')
                image.setAttribute('src',`images/icons/${fruitInfo[i].name}50.jpg`)
                image.setAttribute('alt',`This is the icon for a ${fruitInfo[i].name}.`)
                image.setAttribute('loading','lazy')
                image.classList= 'fruitIcon'

                pTagOuter.appendChild(image)


                div = document.createElement('div')
                div.classList = 'fruitHolder'



                //console.log(fruitInfo[i].name)
                //console.log(pTagOuter,'this is the ptage')
                div.append(pTagOuter)//,image)//,pTagInner)

                if (document.querySelector('.options')){
                    document.querySelector('.options').appendChild(div)
                }


                sf1 = document.querySelector('.sFlavor1')
                sf2 = document.querySelector('.sFlavor2')
                sf3 = document.querySelector('.sFlavor3')
                //sf1.value = 'ppppppppppoooooooooooooooooooooooopppp'
                //console.log(sf1,'this is a flavor')//this returns hte entire label tag

                // pf1 = document.querySelector('.pFlavor1')
                // pf2 = document.querySelector('.pFlavor2')
                // pf3 = document.querySelector('.pFlavor3')

                //console.log(pf1,'this is pf1')

                // rf1 = document.querySelector('.rFlavor1')
                // rf2 = document.querySelector('.rFlavor2')
                // rf3 = document.querySelector('.rFlavor3')

                //console.log(rf1.innerHTML,'this is rf1')


            // console.log(fruitList)

            //console.log(document.querySelector('.box').checked,'this is to see if sf1 is checked inside the creation block')
            //console.log(document.querySelector('.box').value,'here is thevalue of the .box inside the creation block')

            } //end of creation block

            //submit()




            //console.log(document.querySelector('#selectionComplete'),'this is the value for selctioncompete')
            //if (document.querySelector('#selectionComplete') )
            if(document.querySelector('#selectionComplete')){

                document.querySelector('#selectionComplete').addEventListener('click',submit)

            }

            function initialMenu(){
                console.log('the intialmenu is being triggered')
                console.log(localStorage.getItem('randomPriority'),'randomepriority')
                console.log(localStorage.getItem('previousPriority'),'previouspriority')
                console.log(localStorage.getItem('neutral'),'here is the neutral')



                ///////////////////////////////////////////////////////////////////  if neutral is active
                if(localStorage.getItem('neutral') == 'active' || localStorage.getItem('neutral') == null ){
                    console.log('this is turururururrururuur')
                    startingFlavor1 = document.querySelector('.list1')
                    // startingFlavor1Image = document.querySelector('.sMiniIcon1')
                    // startingFlavor1Image.setAttribute('src', `images/icons/${startingFlavor1.value}50.jpg`)
                    // startingFlavor1Image.setAttribute('alt',`Icon for ${startingFlavor1.value}`)

                    // startingFlavor2Image.setAttribute('src', `images/icons/${startingFlavor2.value}50.jpg`)
                    // startingFlavor2Image.setAttribute('alt',`Icon for ${startingFlavor2.value}`)
                    // startingFlavor3Image.setAttribute('src', `images/icons/${startingFlavor3.value}50.jpg`)
                    // startingFlavor3Image.setAttribute('alt',`Icon for ${startingFlavor3.value}`)


                    startingFlavor2 = document.querySelector('.list2')
                    // startingFlavor2Image.setAttribute('src', `images/icons/${startingFlavor2.value}50.jpg`)
                    // startingFlavor2Image.setAttribute('alt',`Icon for ${startingFlavor2.value}`)


                    startingFlavor3 = document.querySelector('.list3')
                    // startingFlavor3Image.setAttribute('src', `images/icons/${startingFlavor3.value}50.jpg`)
                    // startingFlavor3Image.setAttribute('alt',`Icon for ${startingFlavor3.value}`)

                    specialOrder = document.querySelector('#textArea')

                    startingFlavor1.value = localStorage.getItem('selectedFlavor1')
                    startingFlavor1.innerHTML = localStorage.getItem('selectedFlavor1')


                    startingFlavor2.value = localStorage.getItem('selectedFlavor2')
                    startingFlavor2.innerHTML = localStorage.getItem('selectedFlavor2')


                    startingFlavor3.value = localStorage.getItem('selectedFlavor3')
                    startingFlavor3.innerHTML = localStorage.getItem('selectedFlavor3')


                    // startingFlavor1Image = document.querySelector('.sMiniIcon1')
                    // startingFlavor1Image.setAttribute('src', `images/icons/${startingFlavor1.value}50.jpg`)
                    // startingFlavor1Image.setAttribute('alt',`Icon for ${startingFlavor1.value}`)
                    console.log(startingFlavor1.value,startingFlavor1,'here is sf1 in neutrallllllllllllllllllllllllll')
                    console.log(startingFlavor2.value,'here is sf2 in neutralllllllllllllllllllllllllll')
                    console.log(startingFlavor3.value,'here is sf3 in neutralllllllllllllllllllllllllllll')

                    if (startingFlavor1.value === null || startingFlavor1.value == ''){
                        startingFlavor1.value = 'Joy'
                        startingFlavor1.innerHTML = 'Joy'
                        console.log(pf1.value,'here is the null condition')
                        document.querySelector('.sMiniIcon1').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon1').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon1').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon1').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon1').setAttribute('alt','A smiley face')
                        document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')


                        //localStorage.setItem('previousFlavor1','Joy')


                    }
                    else{
                        console.log(startingFlavor1.value,'here is the else statement')
                        // startingFlavor1.value = localStorage.getItem('previousFlavor1')
                        // startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')

                        localStorage.setItem('previousFlavor1',startingFlavor1.value)

                        console.log('esle 1111111111111111111111111111111111111')
                        document.querySelector('.sMiniIcon1').setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                        document.querySelector('.sMiniIcon1').setAttribute('alt',`An icon for ${startingFlavor1.value}.`)
                        document.querySelector('.sMiniIcon1').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon1').setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                        document.querySelector('.pMiniIcon1').setAttribute('alt',`An icon for ${startingFlavor1.value}.`)
                        document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')
                        //localStorage.setItem('previousPriority','active')


                    }
                    if(startingFlavor2.value === null){
                        startingFlavor2.value = 'Love'
                        startingFlavor2.innerHTML = 'Love'
                        //localStorage.setItem('previousFlavor2','Love')
                        document.querySelector('.sMiniIcon2').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon2').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon2').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon2').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon2').setAttribute('alt','A smiley face')
                        document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')



                    }
                    else{
                        console.log(startingFlavor2.value,'here is the else statement')
                        // startingFlavor2.value = localStorage.getItem('previousFlavor2')
                        // startingFlavor2.innerHTML = localStorage.getItem('previousFlavor2')
                        localStorage.setItem('previousFlavor2',startingFlavor2.value)
                        console.log('else222222222222222222222222222222')

                        document.querySelector('.sMiniIcon2').setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                        document.querySelector('.sMiniIcon2').setAttribute('alt',`An icon for ${startingFlavor2.value}.`)
                        document.querySelector('.sMiniIcon2').setAttribute('loading','lazy')


                        document.querySelector('.pMiniIcon2').setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                        document.querySelector('.pMiniIcon2').setAttribute('alt',`An icon for ${startingFlavor2.value}`)
                        document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')
                        //localStorage.setItem('previousPriority','active')



                    }
                    if(startingFlavor3.value === null){
                        startingFlavor3.value = 'Happiness'
                        startingFlavor3.innerHTML = 'Happiness'
                    // localStorage.setItem('previousFlavor3','Happiness')
                        document.querySelector('.sMiniIcon3').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon3').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon3').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon3').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon3').setAttribute('alt','A smiley face')
                        document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
                    }

                    else{
                        console.log(startingFlavor3.value,'here is the else statement')
                        // startingFlavor3.value = localStorage.getItem('previousFlavor3')
                        // startingFlavor3.innerHTML = localStorage.getItem('previousFlavor3')
                        localStorage.setItem('previousFlavor3',startingFlavor3.value)

                        console.log('else 333333333333333333333333333')
                        document.querySelector('.sMiniIcon3').setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                        document.querySelector('.sMiniIcon3').setAttribute('alt',`An icon for ${startingFlavor3.value}.`)
                        document.querySelector('.sMiniIcon3').setAttribute('loading','lazy')



                        document.querySelector('.pMiniIcon3').setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                        document.querySelector('.pMiniIcon3').setAttribute('alt',`An icon for ${startingFlavor3.value}.`)
                        document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
                        //localStorage.setItem('previousPriority','active')

                    }







                    console.log(specialOrder,'this is special order')

                    if(specialOrder != null){
                        specialOrder.innerHTML = localStorage.getItem('specialOrder')
                    }


                    ///////////////////////localStorage.setItem('neutral','not active')

                }

                ////////////////IF all are not active

                if((localStorage.getItem('neutral') == 'not active'|| localStorage.getItem('neutral') == null) && (localStorage.getItem('randomPriority') == 'not active' || localStorage.getItem('randomPriority') == null) && (localStorage.getItem('previousPriority') == 'not active' ||localStorage.getItem('previousPriority') == null)){
                    console.log(' none of these are active right nowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
                    console.log(localStorage.getItem('neutral'),'here is the neutral in whre non are active')
                    console.log(localStorage.getItem('randomPriority'),'here is the randomprioirty')
                    console.log(localStorage.getItem('previousPriority'),'here is the previouspriority')


                    sF1 = document.querySelector('.list1')//.value
                    sF2 = document.querySelector('.list2')//.value
                    sF3 = document.querySelector('.list3')//.value

                    console.log(sF1,'here are there the list 1',sF1.value,' and here is the value valuseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')

                    if(sF1.value == ''){
                        document.querySelector('.sMiniIcon1').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon1').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon1').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon1').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon1').setAttribute('alt','Icon of a smiley face.')
                        document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')

                    }

                    if(sF2.value == ''){
                        document.querySelector('.sMiniIcon2').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon2').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon2').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon2').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon2').setAttribute('alt','Icon of a smiley face.')
                        document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')

                    }

                    if(sF3.value == ''){
                        document.querySelector('.sMiniIcon3').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon3').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon3').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon3').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon3').setAttribute('alt','Icon of a smiley face.')
                        document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')

                    }



                }



                /////////////////////////            ////////////////////// if random is active
                if(localStorage.getItem('randomPriority') == 'active'){
                    startingFlavor1 = document.querySelector('.list1')//.value
                    startingFlavor2 = document.querySelector('.list2')//.value
                    startingFlavor3 = document.querySelector('.list3')//.value

                    sMiniIcon1 = document.querySelector('.sMiniIcon1')
                    sMiniIcon2 = document.querySelector('.sMiniIcon2')
                    sMiniIcon3 = document.querySelector('.sMiniIcon3')


                    startingFlavor1.value = localStorage.getItem('randomFlavor1')
                    startingFlavor1.innerHTML = localStorage.getItem('randomFlavor1')
                    sMiniIcon1.setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                    sMiniIcon1.setAttribute('alt', `Icon for ${startingFlavor1.value}.`)
                    sMiniIcon1.setAttribute('loading','lazy')

                    startingFlavor2.value = localStorage.getItem('randomFlavor2')
                    startingFlavor2.innerHTML = localStorage.getItem('randomFlavor2')
                    sMiniIcon2.setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                    sMiniIcon2.setAttribute('alt', `Icon for ${startingFlavor2.value}.`)
                    sMiniIcon2.setAttribute('loading','lazy')

                    startingFlavor3.value = localStorage.getItem('randomFlavor3')
                    startingFlavor3.innerHTML = localStorage.getItem('randomFlavor3')
                    sMiniIcon3.setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                    sMiniIcon3.setAttribute('alt', `Icon for ${startingFlavor3.value}.`)
                    sMiniIcon3.setAttribute('loading','lazy')


                    localStorage.setItem('randomPriority','not active')


                }




                ////////           //////////////if previous is active

                if(localStorage.getItem('previousPriority') == 'active'){
                    console.log('previoupripority has been triggeredddddddddddddddddddddddddddddddd')
                    startingFlavor1 = document.querySelector('.list1')
                    startingFlavor2 = document.querySelector('.list2')
                    startingFlavor3 = document.querySelector('.list3')

                    sMiniIcon1 = document.querySelector('.sMiniIcon1')
                    sMiniIcon2 = document.querySelector('.sMiniIcon2')
                    sMiniIcon3 = document.querySelector('.sMiniIcon3')

                    // startingFlavor1.value = localStorage.getItem('previousFlavor1')
                    // startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')
                    // sMiniIcon1.setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                    // sMiniIcon1.setAttribute('alt', `Icon for ${startingFlavor1.value}.`)
                    // sMiniIcon1.setAttribute('loading','lazy')

                    // startingFlavor2.value = localStorage.getItem('previousFlavor2')
                    // startingFlavor2.innerHTML = localStorage.getItem('previousFlavor2')
                    // sMiniIcon2.setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                    // sMiniIcon2.setAttribute('alt', `Icon for ${startingFlavor2.value}.`)
                    // sMiniIcon2.setAttribute('loading','lazy')


                    // startingFlavor3.value = localStorage.getItem('previousFlavor3')
                    // startingFlavor3.innerHTML = localStorage.getItem('previousFlavor3')
                    // sMiniIcon3.setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                    // sMiniIcon3.setAttribute('alt', `Icon for ${startingFlavor3.value}.`)
                    // sMiniIcon3.setAttribute('loading','lazy')

                    console.log(startingFlavor1,'here is starting flav 1 and next is the value',startingFlavor1.value)



                    if(startingFlavor1.value != '' && startingFlavor1.value != 'Joy'){
                        localStorage.getItem('previousFlavor1')
                        console.log('hhhhhhhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeyeyeyeyeyey',startingFlavor1.value)

                        startingFlavor1.value = localStorage.getItem('previousFlavor1')
                        startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')


                        sMiniIcon1.setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                        sMiniIcon1.setAttribute('alt', `Icon for ${startingFlavor1.value}.`)
                        sMiniIcon1.setAttribute('loading','lazy')





                    }else{
                        startingFlavor1.value = 'Joy'
                        startingFlavor1.innerHTML = 'Joy'
                        console.log('startingflavor1 value is being rewritten to Joyyyyyyyyyyyyyyyyy',startingFlavor1.value)
                        localStorage.setItem('previousFlavor1',startingFlavor1.value)
                    // startingFlavor1.value = 'Joy'
                    sMiniIcon1.setAttribute('src','images/icons/smile50.jpg')
                        sMiniIcon1.setAttribute('alt','A smile because of Joy.')
                        sMiniIcon1.setAttribute('loading','lazy')
                    }




                    if(startingFlavor2.value != '' && startingFlavor2.value != 'Love'){
                        localStorage.getItem('previousFlavor2')
                        console.log('hhhhhhhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeyeyeyeyeyey',startingFlavor2.value)

                        startingFlavor2.value = localStorage.getItem('previousFlavor2')
                        startingFlavor2.innerHTML = localStorage.getItem('previousFlavor2')


                        sMiniIcon2.setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                        sMiniIcon2.setAttribute('alt', `Icon for ${startingFlavor2.value}.`)
                        sMiniIcon2.setAttribute('loading','lazy')





                    }else{
                        startingFlavor2.value = 'Love'
                        startingFlavor2.innerHTML = 'Love'
                        console.log('startingflavor1 value is being rewritten to loveeeeeeeeeeeeeeeeeeeee',startingFlavor2.value)
                        localStorage.setItem('previousFlavor2',startingFlavor2.value)
                    sMiniIcon2.setAttribute('src','images/icons/smile50.jpg')
                        sMiniIcon2.setAttribute('alt','A smile because of Joy.')
                        sMiniIcon2.setAttribute('loading','lazy')
                    }






                    if(startingFlavor3.value != '' && startingFlavor3.value != 'Happiness'){
                        localStorage.getItem('previousFlavor3')
                        console.log('hhhhhhhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeyeyeyeyeyey',startingFlavor3.value)

                        startingFlavor3.value = localStorage.getItem('previousFlavor3')
                        startingFlavor3.innerHTML = localStorage.getItem('previousFlavor3')


                        sMiniIcon3.setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                        sMiniIcon3.setAttribute('alt', `Icon for ${startingFlavor3.value}.`)
                        sMiniIcon3.setAttribute('loading','lazy')





                    }else{
                        startingFlavor3.value = 'Happiness'
                        startingFlavor3.innerHTML = 'Happiness'
                        console.log('startingflavor3 value is being rewritten to happinesssssssssssssss',startingFlavor3.value)
                        localStorage.setItem('previousFlavor3',startingFlavor3.value)
                    sMiniIcon3.setAttribute('src','images/icons/smile50.jpg')
                        sMiniIcon3.setAttribute('alt','A smile because of Joy.')
                        sMiniIcon3.setAttribute('loading','lazy')
                    }








                    // // // if(startingFlavor1.value == '' || startingFlavor1 == 'Joy'){
                    // // //     startingFlavor1.value = 'Joy'
                    // // //     startingFlavor1.innerHTML = 'Joy'
                    // // //     console.log('startingflavor1 value is being rewritten to Joyyyyyyyyyyyyyyyyy',startingFlavor1.value)
                    // // //     localStorage.setItem('previousFlavor1',startingFlavor1.value)
                    // // //    // startingFlavor1.value = 'Joy'


                    // // //     // startingFlavor1.value = localStorage.getItem('previousFlavor1')
                    // // //     // startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')

                    // // //     sMiniIcon1.setAttribute('src','images/icons/smile50.jpg')
                    // // //     sMiniIcon1.setAttribute('alt','A smile because of Joy.')
                    // // //     sMiniIcon1.setAttribute('loading','lazy')


                    // // // }else{
                    // // //     localStorage.getItem('previousFlavor1')
                    // // //     console.log('hhhhhhhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeyeyeyeyeyey')

                    // // //     startingFlavor1.value = localStorage.getItem('previousFlavor1')
                    // // //     startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')


                    // // //     sMiniIcon1.setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                    // // //     sMiniIcon1.setAttribute('alt', `Icon for ${startingFlavor1.value}.`)
                    // // //     sMiniIcon1.setAttribute('loading','lazy')
                    // // // }





                    // startingFlavor1.value = localStorage.getItem('previousFlavor1')
                    // startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')
                    // sMiniIcon1.setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                    // sMiniIcon1.setAttribute('alt', `Icon for ${startingFlavor1.value}.`)
                    // sMiniIcon1.setAttribute('loading','lazy')

                    // startingFlavor2.value = localStorage.getItem('previousFlavor2')
                    // startingFlavor2.innerHTML = localStorage.getItem('previousFlavor2')
                    // sMiniIcon2.setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                    // sMiniIcon2.setAttribute('alt', `Icon for ${startingFlavor2.value}.`)
                    // sMiniIcon2.setAttribute('loading','lazy')


                    // startingFlavor3.value = localStorage.getItem('previousFlavor3')
                    // startingFlavor3.innerHTML = localStorage.getItem('previousFlavor3')
                    // sMiniIcon3.setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                    // sMiniIcon3.setAttribute('alt', `Icon for ${startingFlavor3.value}.`)
                    // sMiniIcon3.setAttribute('loading','lazy')


                    //localStorage.setItem('randomPriority',0)
                    console.log('hello wwwwwwwwwwwwwwwwwwwwwwww from initial menu in previous priority')
                    //localStorage.setItem('previousPriority','not active')


                } //else{
                //     startingFlavor1 = document.querySelector('.list1')//.value
                //     startingFlavor2 = document.querySelector('.list2')//.value
                //     startingFlavor3 = document.querySelector('.list3')//.value

                //     startingFlavor1.value = ''
                //     startingFlavor1.innerHTML = 'Pick A Flavor'
                //     startingFlavor2.value = ''
                //     startingFlavor2.innerHTML = 'Pick A Flavor'
                //     startingFlavor3.value = ''
                //     startingFlavor3.innerHTML = 'Pick A Flavor'

                //     localStorage.setItem('randomPriority',0)
                    //localStorage.setItem('previousPriority',0)

                // }

            }
            initialMenu()

            // // // function randomSubmit(){
            // // //     rflav1 = document.querySelector('.rFlavor1').value
            // // //     rflav2 = document.querySelector('.rFlavor2').value
            // // //     rflav3 = document.querySelector('.rFlavor3').value
            // // //     localStorage.setItem('randomFlavor1',rflav1)
            // // //     localStorage.setItem('randomFlavor2',rflav2)
            // // //     localStorage.setItem('randomFlavor3',rflav3)

            // // //     localStorage.setItem('randomPriority',1)
            // // //     localStorage.setItem('previousPriority',0)
            // // //     localStorage.setItem('neutral',0)




            // // // }



            // function quickSubmitReset(){

            //     if(localStorage.getItem('quick1') != 'Blank'){
            //         console.log('loading in quick flavor1')
            //         document.querySelector('#firstFlavor').value = localStorage.getItem('quick1')
            //         localStorage.setItem('quick1','Blank')
            //         console.log('quick flavor has been set and the memory flavor has been reset')

            //     }else{

            //         localStorage.setItem('quick1','Blank')

            //     }

            //     if(localStorage.getItem('quick2') != 'Blank'){
            //         console.log('loading in quick flavor2')
            //         document.querySelector('#secondFlavor').value = localStorage.getItem('quick2')
            //         localStorage.setItem('quick1','Blank')
            //         console.log('quick flavor has been set and the memory flavor has been reset')
            //     }else{
            //         localStorage.setItem('quick2','Blank')
            //         console.log('quick flavor has been set and the memory flavor has been reset')
            //     }

            //     if(localStorage.getItem('quick3') != 'Blank'){
            //         console.log('loading in quick flavor3')
            //         document.querySelector('#thirdFlavor').value = localStorage.getItem('quick3')
            //         localStorage.setItem('quick1','Blank')
            //         console.log('quick flavor has been set and the memory flavor has been reset')
            //     }else{
            //         localStorage.setItem('quick3','Blank')
            //         console.log('quick flavor has been set and the memory flavor has been reset')
            //     }




            // }

            function homesubmit(){
                console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
                fflav = document.querySelector('#firstFlavor').value
                sflav = document.querySelector('#secondFlavor').value
                tflav = document.querySelector('#thirdFlavor').value
                specialOrder = document.querySelector('#textarea').value
                localStorage.setItem('specialOrder',specialOrder)

                if(fflav == ''){
                    fflav.value = 'Joy'
                    console.log(fflav,'this isin the first if')
                    localStorage.setItem('selectedFlavor1','Joy')
                    fflav.value = 'Joy'
                    console.log('here is ffffffffffffffffflav',fflav)



                }else{
                    localStorage.setItem('selectedFlavor1',fflav)
                }

                if(sflav == ''){
                    console.log(sflav,'this isin the first if')
                    localStorage.setItem('selectedFlavor2','Love')
                    sflav.value = 'Love'


                }else{
                    localStorage.setItem('selectedFlavor2',sflav)
                }

                if(tflav == ''){
                    console.log(tflav,'this isin the first if')
                    localStorage.setItem('selectedFlavor3','Happiness')
                    tflav.value = 'Happiness'


                }else{
                    localStorage.setItem('selectedFlavor3',tflav)
                }

                //localStorage.setItem('selectedFlavor1',fflav)
                //localStorage.setItem('selectedFlavor2',sflav)
            // localStorage.setItem('selectedFlavor3',tflav)
                localStorage.setItem('neutral','active')
                localStorage.setItem('randomPriority','not active')
                localStorage.setItem('previousPriority','not active')


            }


            if(document.querySelector('#continueOrder')){
                const homesubmitButton = document.querySelector('#continueOrder')
                homesubmitButton.addEventListener('click',homesubmit)
            }


            function submit(){
                fflav = document.querySelector('#firstFlavor').value
                sflav = document.querySelector('#secondFlavor').value
                tflav = document.querySelector('#thirdFlavor').value
                specialOrder = document.querySelector('#textArea').value
                orderName = document.querySelector('#orderName').value
                orderPhone = document.querySelector('#orderPhone').value
                orderEmail = document.querySelector('#orderEmail').value



                //increase total drinks

                console.log(specialOrder,'here is the special order')
                console.log(fflav,sflav,tflav,'here are the 3 flavors goint to confirm')
                console.log(typeof fflav,'here is fflav value which is...',fflav)

                // New set previous drinks

                pf1 = document.querySelector('.pFlavor1')
                pf2 = document.querySelector('.pFlavor2')
                pf3 = document.querySelector('.pFlavor3')
                pf1.value = fflav
                pf2.value = sflav
                pf3.value = tflav
                pf1.innerHTML = fflav
                pf2.innerHTML = sflav
                pf3.innerHTML = tflav
                console.log(pf1.value,pf2.value,pf3.value,'these are the previous flavors in teh submitttttttttttttttttttttttttttttttttttttttttttttttttttttttttt')

                pMiniIcon1 = document.querySelector('.pMiniIcon1')
                pMiniIcon2 = document.querySelector('.pMiniIcon2')
                pMiniIcon3 = document.querySelector('.pMiniIcon3')



                if (pf1.value == '' || pf1.value == 'Joy'){
                    pf1.value = 'Joy'
                    pf1.innerHTML = 'Joy'
                    console.log(pf1.value,'here is the null condition')
                    document.querySelector('.pMiniIcon1').setAttribute('src','images/icons/smile50.jpg')
                    document.querySelector('.pMiniIcon1').setAttribute('alt','A smiley face')
                    document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')
                    //localStorage.setItem('previousFlavor1','Joy')


                }
                else{
                    console.log(pf1.value,'here is the else statementtttttttttttttttttttttttttttttttttttttttttt11111111111111111111')
                    pf1.value = localStorage.getItem('previousFlavor1')
                    pf1.innerHTML = localStorage.getItem('previousFlavor1')
                    document.querySelector('.pMiniIcon1').setAttribute('src',`images/icons/${pf1.value}50.jpg`)
                    document.querySelector('.pMiniIcon1').setAttribute('alt',`An icon for ${pf1.value}.`)
                    document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')
                    //localStorage.setItem('previousPriority','active')


                }


                if(pf2.value == '' || pf2.value == 'Love'){
                    pf2.value = 'Love'
                    pf2.innerHTML = 'Love'
                    //localStorage.setItem('previousFlavor2','Love')
                    document.querySelector('.pMiniIcon2').setAttribute('src','images/icons/smile50.jpg')
                    document.querySelector('.pMiniIcon2').setAttribute('alt','A smiley face')
                    document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')



                }
                else{
                    console.log(pf2.value,'here is the else statement')
                    pf2.value = localStorage.getItem('previousFlavor2')
                    pf2.innerHTML = localStorage.getItem('previousFlavor2')
                    document.querySelector('.pMiniIcon2').setAttribute('src',`images/icons/${pf2.value}50.jpg`)
                    document.querySelector('.pMiniIcon2').setAttribute('alt',`An icon for ${pf2.value}`)
                    document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')
                    //localStorage.setItem('previousPriority','active')



                }


                if(pf3.value == '' || pf3.value == 'Happiness'){
                    pf3.value = 'Happiness'
                    pf3.innerHTML = 'Happiness'
                // localStorage.setItem('previousFlavor3','Happiness')
                document.querySelector('.pMiniIcon3').setAttribute('src','images/icons/smile50.jpg')
                document.querySelector('.pMiniIcon3').setAttribute('alt','A smiley face')
                    document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
                }

                else{
                    console.log(pf3.value,'here is the else statement')
                    pf3.value = localStorage.getItem('previousFlavor3')
                    pf3.innerHTML = localStorage.getItem('previousFlavor3')
                    document.querySelector('.pMiniIcon3').setAttribute('src',`images/icons/${pf3.value}50.jpg`)
                    document.querySelector('.pMiniIcon3').setAttribute('alt',`An icon for ${pf3.value}.`)
                    document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
                    //localStorage.setItem('previousPriority','active')

                }







                localStorage.setItem('previousFlavor1',fflav)
                localStorage.setItem('previousFlavor2',sflav)
                localStorage.setItem('previousFlavor3',tflav)

                //localStorage.setItem('previousPriority',1)


                // document.querySelector('.confirmName').innerHTML =
                // document.querySelector('.confirmPhone').innerHTML =
                // document.querySelector('.confirmEmail').innerHTML =
                cf1 = document.querySelector('.confirmedFlavor1')
                cf2 = document.querySelector('.confirmedFlavor2')
                cf3 = document.querySelector('.confirmedFlavor3')
                cName = document.querySelector('.confirmName')
                cPhone = document.querySelector('.confirmPhone')
                cEmail = document.querySelector('.confirmEmail')
                orderDate = document.querySelector('.orderDate')
                previousOrderDateStorage = localStorage.setItem('pODS',currentDate)//`${dayNames[day]} ${monthNames[month]} ${dom}, ${year}`)
                previousOrderDate = document.querySelector('.pOrderDate')

                sI = document.querySelector('.specialInstructions')
                //////confirmation setup

                cf1.value = fflav
                cf2.value = sflav
                cf3.value = tflav
                cf1.innerHTML = fflav
                cf2.innerHTML = sflav
                cf3.innerHTML = tflav
                cName.innerHTML = orderName
                cPhone.innerHTML = orderPhone
                cEmail.innerHTML = orderEmail
                sI.innerHTML = specialOrder
                previousOrderDate.innerHTML = `${dayNames[day]} ${monthNames[month]} ${dom}, ${year}`
                orderDate.innerHTML = `${dayNames[day]} ${monthNames[month]} ${dom}, ${year}`


                carbs = document.querySelector('.carbs')
                protein = document.querySelector('.protein')
                fats = document.querySelector('.fats')
                sugar = document.querySelector('.sugar')
                calories = document.querySelector('.calories')

                totalCarbs = 0
                totalProtein = 0
                totalFats = 0
                totalSugar = 0
                totalCalores = 0

                console.log(cf1.innerHTML,fruitInfo[0].name,'here is the cf1 value')

                for(i=0; i < fruitInfo.length; i++){
                    if(cf1.value == fruitInfo[i].name){
                        console.log(cf1.value,'in the for statements')
                        totalCarbs += fruitInfo[i].nutritions.carbohydrates
                        totalProtein += fruitInfo[i].nutritions.protein
                        totalFats += fruitInfo[i].nutritions.fat
                        totalSugar += fruitInfo[i].nutritions.sugar
                        totalCalores += fruitInfo[i].nutritions.calories


                    }

                    if(cf2.value == fruitInfo[i].name){
                        totalCarbs += fruitInfo[i].nutritions.carbohydrates
                        totalProtein += fruitInfo[i].nutritions.protein
                        totalFats += fruitInfo[i].nutritions.fat
                        totalSugar += fruitInfo[i].nutritions.sugar
                        totalCalores += fruitInfo[i].nutritions.calories


                    }

                    if(cf3.value == fruitInfo[i].name){
                        totalCarbs += fruitInfo[i].nutritions.carbohydrates
                        totalProtein += fruitInfo[i].nutritions.protein
                        totalFats += fruitInfo[i].nutritions.fat
                        totalSugar += fruitInfo[i].nutritions.sugar
                        totalCalores += fruitInfo[i].nutritions.calories


                    }
                    console.log(totalCarbs,totalProtein,totalFats,totalSugar,totalCalores,'here is the breakdown')
                    carbs.innerHTML = `${totalCarbs.toFixed(2)}g`
                    protein.innerHTML = `${totalProtein.toFixed(2)}g`
                    fats.innerHTML = `${totalFats.toFixed(2)}g`
                    sugar.innerHTML = `${totalSugar.toFixed(2)}g`
                    calories.innerHTML = `${totalCalores.toFixed(2)}g`
                }

                //carbs.innerHTML = `${total}`



                rollingTotal = Number(window.localStorage.getItem('totalDrinks'))
                rollingTotal++
                totalNumberOfOrders = document.querySelector('.totalNumberOfOrders')
                totalNumberOfOrders.innerHTML = rollingTotal
                localStorage.setItem('totalDrinks', rollingTotal)
                console.log(rollingTotal,'here is the rolling totalllllllllllllllllllllllllll')

                //Number(window.localStorage.getItem('totalDrinks'))
                console.log(cf1,cf2,cf3,'here are the confirmed flavors')


            }


            // //set previous drinks

            function previousSubmit(){
                prevflav1 = document.querySelector('.pFlavor1').innerHTML//.value
                console.log(prevflav1,'in the prevous submit')
                prevflav2 = document.querySelector('.pFlavor2').innerHTML//.value
                prevflav3 = document.querySelector('.pFlavor3').innerHTML//.value

                console.log(prevflav1.value,prevflav2.value,prevflav3.value,'hgggggggggggggggggggggggggggggggere are yoru 3 previous flavorerers')
                console.log(prevflav1,prevflav2,prevflav3,'hre are the innerthmlsllklllllllllllsssssssssss')

                if(prevflav1 == '' || prevflav1 == 'Joy'){
                    localStorage.setItem('previousFlavor1','Joy')
                    console.log('heyyyyyyyyyyyy the prevflav1 is bing rewrrittienene')



                }else{
                    localStorage.setItem('previousFlavor1',prevflav1)

                }

                if(prevflav2 == '' || prevflav2 == 'Love'){
                    localStorage.setItem('previousFlavor2','Love')
                    console.log('heyyyyyyyyyyyy the prevflav2 is bing rewrrittienene')

                }else{
                    localStorage.setItem('previousFlavor2', prevflav2)
                }

                if(prevflav3 == '' || prevflav3 == 'Happiness'){
                    localStorage.setItem('previousFlavor3','Happiness')
                    console.log('heyyyyyyyyyyyy the prevflav3 is bing rewrrittienene')
                }else{
                    localStorage.setItem('previousFlavor3',prevflav3)
                }


                // localStorage.setItem('previousFlavor2',prevflav2)
                // localStorage.setItem('previousFlavor3',prevflav3)
                localStorage.setItem('previousPriority','active')



                // sMiniIcon1 = document.querySelector('.sMiniIcon1')
                // sMiniIcon2 = document.querySelector('.sMiniIcon2')
                // sMiniIcon3 = document.querySelector('.sMiniIcon3')

                // startingFlavor1.value = localStorage.getItem('previousFlavor1')
                // startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')
                // sMiniIcon1.setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                // sMiniIcon1.setAttribute('alt', `Icon for ${startingFlavor1.value}.`)
                // sMiniIcon1.setAttribute('loading','lazy')




                // // startingFlavor1 = document.querySelector('.list1')
                // // startingFlavor1.value = prevflav1.value
                // // startingFlavor1.innerHTML = prevflav1.value

                // // startingFlavor2 = document.querySelector('.list2')
                // // startingFlavor2.value = prevflav2.value
                // // startingFlavor2.innerHTML = prevflav2.value

                // // startingFlavor3 = document.querySelector('.list3')
                // // startingFlavor3.value = prevflav3.value
                // // startingFlavor3.innerHTML = prevflav3.value

                // // console.log('here are the values from prevoius submit',startingFlavor1.value,startingFlavor2.value,startingFlavor3.value)


                localStorage.setItem('previousPriority','active')

                // prevPick1 = document.createElement('option')
                // prevPick2 = document.createElement('option')
                // prevPick3 = document.createElement('option')

                // prevPick1.value = localStorage.getItem('previousFlavor1')
                // prevPick1.innerHTML = localStorage.getItem('previousFlavor1')
                // prevPick2.value = localStorage.getItem('previousFlavor2')
                // prevPick2.innerHTML = localStorage.getItem('previousFlavor2')
                // prevPick3.value = localStorage.getItem('previousFlavor3')
                // prevPick3.innerHTML = localStorage.getItem('previousFlavor3')


                // document.querySelector('#firstFlavor').insertBefore(prevPick1,startingFlavor1)
                // document.querySelector('#secondFlavor').insertBefore(prevPick2,startingFlavor2)
                // document.querySelector('#thirdFlavor').insertBefore(prevPick3,startingFlavor3)



                // startingFlavor1.value = localStorage.getItem('previousFlavor1')
                // startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')

                // startingFlavor2.value = localStorage.getItem('previousFlavor2')
                // startingFlavor2.innerHTML = localStorage.getItem('previousFlavor2')

                // startingFlavor3.value = localStorage.getItem('previousFlavor3')
                // startingFlavor3.innerHTML = localStorage.getItem('previousFlavor3')



                initialMenu()

            }

            if(document.querySelector('#prevSubmit')){
                prevSubmitButton = document.querySelector('#prevSubmit')
                prevSubmitButton.addEventListener('click',previousSubmit)
            }


            // // // // pf1 = document.querySelector('.pFlavor1')
            // // // // pf2 = document.querySelector('.pFlavor2')
            // // // // pf3 = document.querySelector('.pFlavor3')
            // // // // console.log(pf1,'here is the before null condition')
            // // // // pf1.value = localStorage.getItem('previousFlavor1')
            // // // // pf2.value = localStorage.getItem('previousFlavor2')
            // // // // pf3.value = localStorage.getItem('previousFlavor3')
            // // // // pf1.innerHTML = localStorage.getItem('previousFlavor1')
            // // // // pf2.innerHTML = localStorage.getItem('previousFlavor2')
            // // // // pf3.innerHTML = localStorage.getItem('previousFlavor3')
            // // // // pod = document.querySelector('.pOrderDate')
            // // // // pod.innerHTML = localStorage.getItem('pODS')

            // // // // //localStorage.setItem('previousPriority','active')
            // // // // //localStorage.setItem('randomPriority','not active')

            // // // // console.log(pf1.value)
            // // // // if (pf1.value == null){
            // // // //     pf1.value = 'Joy'
            // // // //     pf1.innerHTML = 'Joy'
            // // // //     console.log(pf1.value,'here is the null condition')
            // // // //     document.querySelector('.pMiniIcon1').setAttribute('src','images/icons/smile50.jpg')
            // // // //     document.querySelector('.pMiniIcon1').setAttribute('alt','A smiley face')
            // // // //     document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')
            // // // //     //localStorage.setItem('previousFlavor1','Joy')


            // // // // }
            // // // // else{
            // // // //     console.log(pf1.value,'here is the else statement')
            // // // //     pf1.value = localStorage.getItem('previousFlavor1')
            // // // //     pf1.innerHTML = localStorage.getItem('previousFlavor1')
            // // // //     document.querySelector('.pMiniIcon1').setAttribute('src',`images/icons/${pf1.value}50.jpg`)
            // // // //     document.querySelector('.pMiniIcon1').setAttribute('alt',`An icon for ${pf1.value}.`)
            // // // //     document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')
            // // // //     //localStorage.setItem('previousPriority','active')


            // // // // }
            // // // // if(pf2.value == null){
            // // // //     pf2.value = 'Love'
            // // // //     pf2.innerHTML = 'Love'
            // // // //     //localStorage.setItem('previousFlavor2','Love')
            // // // //     document.querySelector('.pMiniIcon2').setAttribute('src','images/icons/smile50.jpg')
            // // // //     document.querySelector('.pMiniIcon2').setAttribute('alt','A smiley face')
            // // // //     document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')



            // // // // }
            // // // // else{
            // // // //     console.log(pf2.value,'here is the else statement')
            // // // //     pf2.value = localStorage.getItem('previousFlavor2')
            // // // //     pf2.innerHTML = localStorage.getItem('previousFlavor2')
            // // // //     document.querySelector('.pMiniIcon2').setAttribute('src',`images/icons/${pf2.value}50.jpg`)
            // // // //     document.querySelector('.pMiniIcon2').setAttribute('alt',`An icon for ${pf2.value}`)
            // // // //     document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')
            // // // //     //localStorage.setItem('previousPriority','active')



            // // // // }
            // // // // if(pf3.value == null){
            // // // //     pf3.value = 'Happiness'
            // // // //     pf3.innerHTML = 'Happiness'
            // // // //    // localStorage.setItem('previousFlavor3','Happiness')
            // // // //    document.querySelector('.pMiniIcon3').setAttribute('src','images/icons/smile50.jpg')
            // // // //    document.querySelector('.pMiniIcon3').setAttribute('alt','A smiley face')
            // // // //     document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
            // // // // }

            // // // // else{
            // // // //     console.log(pf3.value,'here is the else statement')
            // // // //     pf3.value = localStorage.getItem('previousFlavor3')
            // // // //     pf3.innerHTML = localStorage.getItem('previousFlavor3')
            // // // //     document.querySelector('.pMiniIcon3').setAttribute('src',`images/icons/${pf3.value}50.jpg`)
            // // // //     document.querySelector('.pMiniIcon3').setAttribute('alt',`An icon for ${pf3.value}.`)
            // // // //     document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
            // // // //     //localStorage.setItem('previousPriority','active')

            // // // // }


            // pf1.value = localStorage.getItem('previousFlavor1')
            // pf2.value = localStorage.getItem('previousFlavor2')
            // pf3.value = localStorage.getItem('previousFlavor3')
            // pf1.innerHTML = localStorage.getItem('previousFlavor1')
            // pf2.innerHTML = localStorage.getItem('previousFlavor2')
            // pf3.innerHTML = localStorage.getItem('previousFlavor3')


            //Selected drink flavors

            // selected = 0
            // console.log(document.querySelector('.box').value,'here is the value before the for loop')
            // console.log(document.querySelector('.box').checked,'here is the value before the for loop')
            // for(i=0; i < fruitList.length; i++){
            //     //console.log(fruitList.length)
            //     //console.log(fruitList[i].name)
            //     //console.log(document.querySelector(`#${fruitList[i].name}box`).value)
            //     //console.log(document.querySelector(`#${fruitList[i].name}box`).checked,'this is in the for loop')
            //     fruitCheckValue = document.querySelector(`#${fruitList[i].name}box`).value
            //     fruitBoxChecker = document.querySelector(`#${fruitList[i].name}box`).checked
            //     console.log('about to hit the fruitboxchecker')
            //     if(fruitBoxChecker){
            //         switch(selected){
            //             case 0:
            //             sf1.value = fruitCheckValue
            //             selected++
            //             console.log('first selection complete and selected coutner has been set to 1', selected,sf1.value)

            //             break;

            //             case 1:
            //             sf2 = fruitCheckValue
            //             selected++
            //             console.log('second selection complete and selected coutner has been set to 2', selected,sf2.value)

            //             break;

            //             case 2:
            //             sf3 = fruitCheckValue
            //             selected = 0
            //             console.log('third selection complete and selected coutner has been reset to 0', selected,sf3.value)
            //             break;
            //         }

            //     }else{
            //         console.log(fruitCheckValue,'is not checked currently')
            //     }
            // }

            // if (selected < 3){
            //     if(document.querySelector(`.`))
            // }

            //console.log(sf1,'here is sf1')
            // function checked(){

            // }

            // //     console.log(document.querySelector('.option'), 'here is option holder')

            // //     console.log(document.querySelector('.box').checked,'this is to see if sf1 is checked')
            // //     console.log(document.querySelector('.box').value,'here is thevalue of the .box')

            // //     console.log(document.querySelectorAll('.box'),'here are all the .box things')
            // //     document.querySelector('.box').addEventListener('change', display())


            // //     function display(){
            // //         console.log('it truiggeredfer')
            // //         console.log(document.querySelector('.box').value,'here is thevalue of the .box')
            // //     }


            // //     let selectionSpace = 0

            // //     while(selectionSpace < 3){
            // //         if (document.querySelector('.box').checked){
            // //         console.log('it is lit bro')
            // //         selectionSpace++
            // //     }else{
            // //         console.log('it is not lit bro')
            // //         console.log(document.querySelector('.box').value,'here is thevalue of the .box in the else')
            // //         console.log(document.querySelector('.box').checked,'this is to see if sf1 is checked in the else')
            // //         selectionSpace++
            // //     }
            // // }
            //document.querySelectorAll('.box').forEach(display) //this doesn't work
            //fruitList.forEach(display)
            //console.log(document.querySelector('.box').value,'here is thevalue of the .box in the foreach')


            //Random drink selector
            randomizer()


            function randomizer(){
                let r1 = Math.floor(Math.random() * 39)
                let r2 = Math.floor(Math.random() * 39)
                let r3 = Math.floor(Math.random() * 39)
                console.log(r1,r2,r3,'randomizer activated here are the randome numbers')
                //localStorage.setItem('randomFlavor1',fruitList[r1].name)
                //console.log(fruitList[38].name,'here is the fruit list')
                document.querySelector('.rFlavor1').innerHTML = fruitList[r1].name
                document.querySelector('.rFlavor1').value = fruitList[r1].name
                //iniIcon1 = document.querySelector('.rMiniIcon1').setAttribute('src',`images/icons/${fruitList[r1].name}50.jpg`)
                //miniIcon1.setAttribute('src',`images/icons/${fruitList[r1].name}50.jpg`)

                //console.log(`images/icons/${fruitList[r1].name}50.jpg`,'herer is the file namelsijelsij')

                document.querySelector('.rMiniIcon1').setAttribute('src',`images/icons/${fruitList[r1].name}50.jpg`)
                document.querySelector('.rMiniIcon1').setAttribute('alt',`Icon for ${fruitInfo[r1].name}.`)
                document.querySelector('.rMiniIcon1').setAttribute('loading','lazy')
                if(r2 != r1){
                    document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name
                    document.querySelector('.rFlavor2').value= fruitList[r2].name
                    document.querySelector('.rMiniIcon2').setAttribute('src',`images/icons/${fruitList[r2].name}50.jpg`)
                    document.querySelector('.rMiniIcon2').setAttribute('alt',`Icon for ${fruitInfo[r2].name}.`)
                    document.querySelector('.rMiniIcon2').setAttribute('loading','lazy')

                    //miniIcon2 = document.querySelector('.rMiniIcon1').setAttribute('src',`images/icons/${fruitList[r1].name}50.jpg`)

                    //localStorage.setItem('randomFlavor2',fruitList[r2].name)
                } else{
                    r2 = Math.floor(Math.random() * 39)
                    console.log('reshuffling r2.  Here is the new numnber',r2)
                    document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name
                    document.querySelector('.rFlavor2').value= fruitList[r2].name
                    document.querySelector('.rMiniIcon2').setAttribute('src',`images/icons/${fruitList[r2].name}50.jpg`)
                    document.querySelector('.rMiniIcon2').setAttribute('alt',`Icon for ${fruitInfo[r2].name}.`)
                    document.querySelector('.rMiniIcon2').setAttribute('loading','lazy')



                    //localStorage.setItem('randomFlavor2',fruitList[r2].name)

                }
                if(r3 != r1 && r3 != r2){

                    document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name
                    document.querySelector('.rFlavor3').value = fruitList[r3].name
                    document.querySelector('.rMiniIcon3').setAttribute('src',`images/icons/${fruitList[r3].name}50.jpg`)
                    document.querySelector('.rMiniIcon3').setAttribute('alt',`Icon for ${fruitInfo[r3].name}.`)
                    document.querySelector('.rMiniIcon3').setAttribute('loading','lazy')

                    //localStorage.setItem('randomFlavor3',fruitList[r3].name)

                }else{
                    r3 = Math.floor(Math.random() * 39)
                    console.log('reshuffling r3.  Here is the new number',r3)
                    document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name
                    document.querySelector('.rFlavor3').value = fruitList[r3].name
                    document.querySelector('.rMiniIcon3').setAttribute('src',`images/icons/${fruitList[r3].name}50.jpg`)
                    document.querySelector('.rMiniIcon3').setAttribute('alt',`Icon for ${fruitInfo[r3].name}.`)
                    document.querySelector('.rMiniIcon3').setAttribute('loading','lazy')


                    //localStorage.setItem('randomFlavor3',fruitList[r3].name)
                }


            }

            function homeRandomSubmit(){
                random1 = document.querySelector('.rFlavor1')
                random2 = document.querySelector('.rFlavor2')
                random3 = document.querySelector('.rFlavor3')
                console.log(random1.innerHTML,'rando flavor 1 in randosubmit')

                localStorage.setItem('randomFlavor1',random1.innerHTML)
                localStorage.setItem('randomFlavor2',random2.innerHTML)
                localStorage.setItem('randomFlavor3',random3.innerHTML)
                localStorage.setItem('randomPriority','active')
                localStorage.setItem('previousPriority','not active')






            }

            function freshRandomSubmit(){
                console.log('FRS was triggeredededeed')
                // localStorage.setItem('randomPriority','active')
                // localStorage.setItem('previousPriority','not active')
                random1 = document.querySelector('.rFlavor1')
                random2 = document.querySelector('.rFlavor2')
                random3 = document.querySelector('.rFlavor3')
                //console.log(random1.innerHTML,'rando flavor 1 in randosubmit')

                localStorage.setItem('randomFlavor1',random1.innerHTML)
                localStorage.setItem('randomFlavor2',random2.innerHTML)
                localStorage.setItem('randomFlavor3',random3.innerHTML)




                localStorage.setItem('randomPriority','active')
                localStorage.setItem('previousPriority','not active')
                localStorage.setItem('neutral','not active')
                initialMenu()

                //console.log(fruitInfo[3])
                //console.log(document.querySelector('#firstFlavor').value,'this is CF1')
            }

            if(document.querySelector('#fRS')){
                freshRandomSubmitButton = document.querySelector('#fRS')
                freshRandomSubmitButton.addEventListener('click',freshRandomSubmit)
            }

            if(document.querySelector('#randomSubmit')){
                randomSubmitButton = document.querySelector('#randomSubmit')
                randomSubmitButton.addEventListener('click', homeRandomSubmit)

            }

            if(document.querySelector('#randomize')){

                randomizerButton = document.querySelector('#randomize')
                randomizerButton.addEventListener('click',randomizer)

            }






        }//// end of coniditon for hoem and fresh page






    }////end of if statement    /////<was here






}//////async end tag

fruitGetter()

if(document.querySelector('.totalNumberOfOrders')){
    previousCount = document.querySelector('.totalNumberOfOrders')
    previousCount.innerHTML = localStorage.getItem('totalDrinks')

}




// localStorage.setItem('randomFlavor1',document.querySelector('rFlavor1').value)
// localStorage.setItem('randomFlavor2',document.querySelector('rFlavor2').value)
// localStorage.setItem('randomFlavor3',document.querySelector('rFlavor3').value)

// localStorage.setItem('previousFlavor1','Blank')
// localStorage.setItem('previousFlavor2','Blank')
// localStorage.setItem('previousFlavor3','Blank')

// localStorage.setItem('randomPriority',0)
// localStorage.setItem('previousPriority',0)











