//Date creation
let currentDate = new Date()
let day = new Date().getDay()
let dom = new Date().getDate()
let month =  new Date().getMonth()
let year = new Date().getFullYear()
const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dayNamesAbbrev = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']



let footerDate = currentDate
document.querySelector('.modDate').innerHTML = `Last Modified: ${footerDate}`

if(document.querySelector('.currentDate')){
    document.querySelector('.currentDate').innerHTML = `${dayNames[day]} ${monthNames[month]} ${dom}, ${year}`
}





if(document.querySelector('.weatherCard') != null){


const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid=7060c635b6a1fcc5f33f2a1f6092c70c'
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&appid=7060c635b6a1fcc5f33f2a1f6092c70c&units=imperial'
async function weatherGetter(){
    const weatherResponse = await fetch(weatherURL)
    const forecastResponse = await fetch(forecastURL)
    if(weatherResponse.ok && forecastResponse.ok){ 
        const weatherInfo = await weatherResponse.json()
        const forecastInfo = await forecastResponse.json()

     
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

        document.querySelector('.temp').innerHTML= `${todayTemp.toFixed(0)} <strong>&#x2109</strong>`
        document.querySelector('.weatherDescription').innerHTML= todayDescription.toUpperCase()
        document.querySelector('.humidity').innerHTML = `${todayHumidity} <strong>&#x25;</strong>`



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


        

    }









}


weatherGetter()
}



//fruit json

const fruit = 'https://wcamer.github.io/wdd230/wdd230finalproject/fruit.json'
async function fruitGetter(){
    const fruitResponse = await fetch(fruit)
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

            const spotlight = fruitList[picker]
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



        }

 

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
                div.append(pTagOuter)

                if (document.querySelector('.options')){
                    document.querySelector('.options').appendChild(div)
                }


                sf1 = document.querySelector('.sFlavor1')
                sf2 = document.querySelector('.sFlavor2')
                sf3 = document.querySelector('.sFlavor3')
               

            } //end of creation block





            if(document.querySelector('#selectionComplete')){

                document.querySelector('#selectionComplete').addEventListener('click',submit)

            }

            function initialMenu(){
          
                /////////////////////////////  if neutral is active
                if(localStorage.getItem('neutral') == 'active' || localStorage.getItem('neutral') == null ){
                    startingFlavor1 = document.querySelector('.list1')
                    startingFlavor2 = document.querySelector('.list2')
                    startingFlavor3 = document.querySelector('.list3')
                  
                    specialOrder = document.querySelector('#textArea')

                    startingFlavor1.value = localStorage.getItem('selectedFlavor1')
                    startingFlavor1.innerHTML = localStorage.getItem('selectedFlavor1')

                    startingFlavor2.value = localStorage.getItem('selectedFlavor2')
                    startingFlavor2.innerHTML = localStorage.getItem('selectedFlavor2')

                    startingFlavor3.value = localStorage.getItem('selectedFlavor3')
                    startingFlavor3.innerHTML = localStorage.getItem('selectedFlavor3')


                   
                    if (startingFlavor1.value === null || startingFlavor1.value == '' || startingFlavor1.value == "Joy"){
                        startingFlavor1.value = 'Joy'
                        startingFlavor1.innerHTML = 'Joy'
                        document.querySelector('.sMiniIcon1').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon1').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon1').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon1').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon1').setAttribute('alt','A smiley face')
                        document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')




                    }
                    else{
                    

                        localStorage.setItem('previousFlavor1',startingFlavor1.value)

                        document.querySelector('.sMiniIcon1').setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                        document.querySelector('.sMiniIcon1').setAttribute('alt',`An icon for ${startingFlavor1.value}.`)
                        document.querySelector('.sMiniIcon1').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon1').setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                        document.querySelector('.pMiniIcon1').setAttribute('alt',`An icon for ${startingFlavor1.value}.`)
                        document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')


                    }
                    if(startingFlavor2.value === null || startingFlavor2.value == '' || startingFlavor2.value == 'Love'){
                        startingFlavor2.value = 'Love'
                        startingFlavor2.innerHTML = 'Love'
                        document.querySelector('.sMiniIcon2').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon2').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon2').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon2').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon2').setAttribute('alt','A smiley face')
                        document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')



                    }
                    else{
                    
                        localStorage.setItem('previousFlavor2',startingFlavor2.value)

                        document.querySelector('.sMiniIcon2').setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                        document.querySelector('.sMiniIcon2').setAttribute('alt',`An icon for ${startingFlavor2.value}.`)
                        document.querySelector('.sMiniIcon2').setAttribute('loading','lazy')


                        document.querySelector('.pMiniIcon2').setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                        document.querySelector('.pMiniIcon2').setAttribute('alt',`An icon for ${startingFlavor2.value}`)
                        document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')



                    }
                    if(startingFlavor3.value === null || startingFlavor3.value == '' || startingFlavor3.value == 'Happiness'){
                        startingFlavor3.value = 'Happiness'
                        startingFlavor3.innerHTML = 'Happiness'
                        document.querySelector('.sMiniIcon3').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon3').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon3').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon3').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon3').setAttribute('alt','A smiley face')
                        document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
                    }

                    else{
                        localStorage.setItem('previousFlavor3',startingFlavor3.value)

                        document.querySelector('.sMiniIcon3').setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                        document.querySelector('.sMiniIcon3').setAttribute('alt',`An icon for ${startingFlavor3.value}.`)
                        document.querySelector('.sMiniIcon3').setAttribute('loading','lazy')



                        document.querySelector('.pMiniIcon3').setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                        document.querySelector('.pMiniIcon3').setAttribute('alt',`An icon for ${startingFlavor3.value}.`)
                        document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')

                    }








                    if(specialOrder != null){
                        specialOrder.innerHTML = localStorage.getItem('specialOrder')
                    }



                }

                ////////////////IF all are not active

                if((localStorage.getItem('neutral') == 'not active'|| localStorage.getItem('neutral') == null) && (localStorage.getItem('randomPriority') == 'not active' || localStorage.getItem('randomPriority') == null) && (localStorage.getItem('previousPriority') == 'not active' ||localStorage.getItem('previousPriority') == null)){
                  


                    sF1 = document.querySelector('.list1')
                    sF2 = document.querySelector('.list2')
                    sF3 = document.querySelector('.list3')


                        document.querySelector('.sMiniIcon1').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon1').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon1').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon1').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon1').setAttribute('alt','Icon of a smiley face.')
                        document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')


                        document.querySelector('.sMiniIcon2').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon2').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon2').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon2').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon2').setAttribute('alt','Icon of a smiley face.')
                        document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')

                    

                   
                        document.querySelector('.sMiniIcon3').setAttribute('src',`images/icons/question50.jpg`)
                        document.querySelector('.sMiniIcon3').setAttribute('alt','Icon of a question mark.')
                        document.querySelector('.sMiniIcon3').setAttribute('loading','lazy')

                        document.querySelector('.pMiniIcon3').setAttribute('src','images/icons/smile50.jpg')
                        document.querySelector('.pMiniIcon3').setAttribute('alt','Icon of a smiley face.')
                        document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')




                }



                /////// if random is active
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
                    startingFlavor1 = document.querySelector('.list1')
                    startingFlavor2 = document.querySelector('.list2')
                    startingFlavor3 = document.querySelector('.list3')

                    sMiniIcon1 = document.querySelector('.sMiniIcon1')
                    sMiniIcon2 = document.querySelector('.sMiniIcon2')
                    sMiniIcon3 = document.querySelector('.sMiniIcon3')

                    pMiniIcon1 = document.querySelector('.pMiniIcon1')
                    pMiniIcon2 = document.querySelector('.pMiniIcon2')
                    pMiniIcon3 = document.querySelector('.pMiniIcon3')



                    if(startingFlavor1.value != '' && startingFlavor1.value != 'Joy'){
                        localStorage.getItem('previousFlavor1')

                        startingFlavor1.value = localStorage.getItem('previousFlavor1')
                        startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')


                        sMiniIcon1.setAttribute('src',`images/icons/${startingFlavor1.value}50.jpg`)
                        sMiniIcon1.setAttribute('alt', `Icon for ${startingFlavor1.value}.`)
                        sMiniIcon1.setAttribute('loading','lazy')





                    }else{
                        startingFlavor1.value = 'Joy'
                        startingFlavor1.innerHTML = 'Joy'
                        localStorage.setItem('previousFlavor1',startingFlavor1.value)
                        sMiniIcon1.setAttribute('src','images/icons/smile50.jpg')
                        sMiniIcon1.setAttribute('alt','A smile because of Joy.')
                        sMiniIcon1.setAttribute('loading','lazy')

                        pMiniIcon1.setAttribute('src','images/icons/smile50.jpg')
                        pMiniIcon1.setAttribute('alt','A smile because of Joy.')
                        pMiniIcon1.setAttribute('loading','lazy')


                        

                    }




                    if(startingFlavor2.value != '' && startingFlavor2.value != 'Love'){
                        localStorage.getItem('previousFlavor2')

                        startingFlavor2.value = localStorage.getItem('previousFlavor2')
                        startingFlavor2.innerHTML = localStorage.getItem('previousFlavor2')
                        sMiniIcon2.setAttribute('src',`images/icons/${startingFlavor2.value}50.jpg`)
                        sMiniIcon2.setAttribute('alt', `Icon for ${startingFlavor2.value}.`)
                        sMiniIcon2.setAttribute('loading','lazy')


                    }else{
                        startingFlavor2.value = 'Love'
                        startingFlavor2.innerHTML = 'Love'
                        localStorage.setItem('previousFlavor2',startingFlavor2.value)
                        sMiniIcon2.setAttribute('src','images/icons/smile50.jpg')
                        sMiniIcon2.setAttribute('alt','A smile because of Love.')
                        sMiniIcon2.setAttribute('loading','lazy')
                        
                        pMiniIcon2.setAttribute('src','images/icons/smile50.jpg')
                        pMiniIcon2.setAttribute('alt','A smile because of Love.')
                        pMiniIcon2.setAttribute('loading','lazy')
                    }


                    if(startingFlavor3.value != '' && startingFlavor3.value != 'Happiness'){
                        localStorage.getItem('previousFlavor3')
                        startingFlavor3.value = localStorage.getItem('previousFlavor3')
                        startingFlavor3.innerHTML = localStorage.getItem('previousFlavor3')

                        sMiniIcon3.setAttribute('src',`images/icons/${startingFlavor3.value}50.jpg`)
                        sMiniIcon3.setAttribute('alt', `Icon for ${startingFlavor3.value}.`)
                        sMiniIcon3.setAttribute('loading','lazy')

                    }else{
                        startingFlavor3.value = 'Happiness'
                        startingFlavor3.innerHTML = 'Happiness'
                        localStorage.setItem('previousFlavor3',startingFlavor3.value)
                        sMiniIcon3.setAttribute('src','images/icons/smile50.jpg')
                        sMiniIcon3.setAttribute('alt','A smile because of Happiness.')
                        sMiniIcon3.setAttribute('loading','lazy')

                        pMiniIcon3.setAttribute('src','images/icons/smile50.jpg')
                        pMiniIcon3.setAttribute('alt','A smile because of Happiness.')
                        pMiniIcon3.setAttribute('loading','lazy')
                    }



                } 
                
                localStorage.getItem('previousPriority','not active')
            }
            initialMenu()

       

            function homesubmit(){
                fflav = document.querySelector('#firstFlavor').value
                sflav = document.querySelector('#secondFlavor').value
                tflav = document.querySelector('#thirdFlavor').value
                specialOrder = document.querySelector('#textarea').value
                localStorage.setItem('specialOrder',specialOrder)

                if(fflav == ''){
                    fflav.value = 'Joy'
                    localStorage.setItem('selectedFlavor1','Joy')
                    fflav.value = 'Joy'


                }else{
                    localStorage.setItem('selectedFlavor1',fflav)
                }

                if(sflav == ''){
                    localStorage.setItem('selectedFlavor2','Love')
                    sflav.value = 'Love'


                }else{
                    localStorage.setItem('selectedFlavor2',sflav)
                }

                if(tflav == ''){
                    localStorage.setItem('selectedFlavor3','Happiness')
                    tflav.value = 'Happiness'


                }else{
                    localStorage.setItem('selectedFlavor3',tflav)
                }

                
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

                pMiniIcon1 = document.querySelector('.pMiniIcon1')
                pMiniIcon2 = document.querySelector('.pMiniIcon2')
                pMiniIcon3 = document.querySelector('.pMiniIcon3')



                if (pf1.value == '' || pf1.value == 'Joy'){
                    pf1.value = 'Joy'
                    pf1.innerHTML = 'Joy'
                    document.querySelector('.pMiniIcon1').setAttribute('src','images/icons/smile50.jpg')
                    document.querySelector('.pMiniIcon1').setAttribute('alt','A smiley face')
                    document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')


                }
                else{
                    pf1.value = localStorage.getItem('previousFlavor1')
                    pf1.innerHTML = localStorage.getItem('previousFlavor1')
                    document.querySelector('.pMiniIcon1').setAttribute('src',`images/icons/${pf1.value}50.jpg`)
                    document.querySelector('.pMiniIcon1').setAttribute('alt',`An icon for ${pf1.value}.`)
                    document.querySelector('.pMiniIcon1').setAttribute('loading','lazy')


                }


                if(pf2.value == '' || pf2.value == 'Love'){
                    pf2.value = 'Love'
                    pf2.innerHTML = 'Love'
                    document.querySelector('.pMiniIcon2').setAttribute('src','images/icons/smile50.jpg')
                    document.querySelector('.pMiniIcon2').setAttribute('alt','A smiley face')
                    document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')

                }
                else{
                    pf2.value = localStorage.getItem('previousFlavor2')
                    pf2.innerHTML = localStorage.getItem('previousFlavor2')
                    document.querySelector('.pMiniIcon2').setAttribute('src',`images/icons/${pf2.value}50.jpg`)
                    document.querySelector('.pMiniIcon2').setAttribute('alt',`An icon for ${pf2.value}`)
                    document.querySelector('.pMiniIcon2').setAttribute('loading','lazy')

                }


                if(pf3.value == '' || pf3.value == 'Happiness'){
                    pf3.value = 'Happiness'
                    pf3.innerHTML = 'Happiness'
                document.querySelector('.pMiniIcon3').setAttribute('src','images/icons/smile50.jpg')
                document.querySelector('.pMiniIcon3').setAttribute('alt','A smiley face')
                    document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')
                }

                else{
                    pf3.value = localStorage.getItem('previousFlavor3')
                    pf3.innerHTML = localStorage.getItem('previousFlavor3')
                    document.querySelector('.pMiniIcon3').setAttribute('src',`images/icons/${pf3.value}50.jpg`)
                    document.querySelector('.pMiniIcon3').setAttribute('alt',`An icon for ${pf3.value}.`)
                    document.querySelector('.pMiniIcon3').setAttribute('loading','lazy')

                }


                localStorage.setItem('previousFlavor1',fflav)
                localStorage.setItem('previousFlavor2',sflav)
                localStorage.setItem('previousFlavor3',tflav)
                cf1 = document.querySelector('.confirmedFlavor1')
                cf2 = document.querySelector('.confirmedFlavor2')
                cf3 = document.querySelector('.confirmedFlavor3')
                cName = document.querySelector('.confirmName')
                cPhone = document.querySelector('.confirmPhone')
                cEmail = document.querySelector('.confirmEmail')
                orderDate = document.querySelector('.orderDate')
                previousOrderDateStorage = localStorage.setItem('pODS',currentDate)
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


                for(i=0; i < fruitInfo.length; i++){
                    if(cf1.value == fruitInfo[i].name){
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
                    carbs.innerHTML = `${totalCarbs.toFixed(2)}g`
                    protein.innerHTML = `${totalProtein.toFixed(2)}g`
                    fats.innerHTML = `${totalFats.toFixed(2)}g`
                    sugar.innerHTML = `${totalSugar.toFixed(2)}g`
                    calories.innerHTML = `${totalCalores.toFixed(2)}g`
                }

        

                rollingTotal = Number(window.localStorage.getItem('totalDrinks'))
                rollingTotal++
                totalNumberOfOrders = document.querySelector('.totalNumberOfOrders')
                totalNumberOfOrders.innerHTML = rollingTotal
                localStorage.setItem('totalDrinks', rollingTotal)
                

                outputFlavors = document.querySelector('.outputFlavors')

                if(document.querySelector('#confirmedFlavorIcon1')){
                    outputIcon1.setAttribute('src',`images/icons/${fflav}50.jpg`)
                    outputIcon1.setAttribute('alt',`Icon for ${fflav}.`)
                    outputIcon1.setAttribute('loading','lazy')


                }else{
                    
                    outputIcon1 = document.createElement('img')
                    outputIcon1.id = 'confirmedFlavorIcon1'
                    outputIcon1.setAttribute('src',`images/icons/${fflav}50.jpg`)
                    outputIcon1.setAttribute('alt',`Icon for ${fflav}.`)
                    outputIcon1.setAttribute('loading','lazy')
                    outputFlavors.append(outputIcon1)


                }

                if(document.querySelector('#confirmedFlavorIcon2')){
                    outputIcon2.setAttribute('src',`images/icons/${sflav}50.jpg`)
                    outputIcon2.setAttribute('alt',`Icon for ${sflav}.`)
                    outputIcon2.setAttribute('loading','lazy')


                }else{
                    outputIcon2 = document.createElement('img')
                    outputIcon2.id = 'confirmedFlavorIcon2'
                    outputIcon2.setAttribute('src',`images/icons/${sflav}50.jpg`)
                    outputIcon2.setAttribute('alt',`Icon for ${sflav}.`)
                    outputIcon2.setAttribute('loading','lazy')

                    outputFlavors.append(outputIcon2)
    

                }

                if(document.querySelector('#confirmedFlavorIcon3')){
                    outputIcon3.setAttribute('src',`images/icons/${tflav}50.jpg`)
                    outputIcon3.setAttribute('alt',`Icon for ${tflav}.`)
                    outputIcon3.setAttribute('loading','lazy')
                    

                }else{
                    outputIcon3 = document.createElement('img')
                    outputIcon3.id = 'confirmedFlavorIcon3'
                    outputIcon3.setAttribute('src',`images/icons/${tflav}50.jpg`)
                    outputIcon3.setAttribute('alt',`Icon for ${tflav}.`)
                    outputIcon3.setAttribute('loading','lazy')

                    outputFlavors.append(outputIcon3)

                }
               


            }


            // //set previous drinks

            function previousSubmit(){
                prevflav1 = document.querySelector('.pFlavor1').innerHTML
                prevflav2 = document.querySelector('.pFlavor2').innerHTML
                prevflav3 = document.querySelector('.pFlavor3').innerHTML

            

                if(prevflav1 == '' || prevflav1 == 'Joy'){
                    localStorage.setItem('previousFlavor1','Joy')

                }else{
                    localStorage.setItem('previousFlavor1',prevflav1)

                }

                if(prevflav2 == '' || prevflav2 == 'Love'){
                    localStorage.setItem('previousFlavor2','Love')

                }else{
                    localStorage.setItem('previousFlavor2', prevflav2)
                }

                if(prevflav3 == '' || prevflav3 == 'Happiness'){
                    localStorage.setItem('previousFlavor3','Happiness')
                }else{
                    localStorage.setItem('previousFlavor3',prevflav3)
                }


                localStorage.setItem('previousPriority','active')

                initialMenu()

            }

            if(document.querySelector('#prevSubmit')){
                prevSubmitButton = document.querySelector('#prevSubmit')
                prevSubmitButton.addEventListener('click',previousSubmit)
            }


          
            randomizer()


            function randomizer(){
                let r1 = Math.floor(Math.random() * 39)
                let r2 = Math.floor(Math.random() * 39)
                let r3 = Math.floor(Math.random() * 39)
                document.querySelector('.rFlavor1').innerHTML = fruitList[r1].name
                document.querySelector('.rFlavor1').value = fruitList[r1].name
        
                document.querySelector('.rMiniIcon1').setAttribute('src',`images/icons/${fruitList[r1].name}50.jpg`)
                document.querySelector('.rMiniIcon1').setAttribute('alt',`Icon for ${fruitInfo[r1].name}.`)
                document.querySelector('.rMiniIcon1').setAttribute('loading','lazy')
                if(r2 != r1){
                    document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name
                    document.querySelector('.rFlavor2').value= fruitList[r2].name
                    document.querySelector('.rMiniIcon2').setAttribute('src',`images/icons/${fruitList[r2].name}50.jpg`)
                    document.querySelector('.rMiniIcon2').setAttribute('alt',`Icon for ${fruitInfo[r2].name}.`)
                    document.querySelector('.rMiniIcon2').setAttribute('loading','lazy')


                } else{
                    r2 = Math.floor(Math.random() * 39)
                    document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name
                    document.querySelector('.rFlavor2').value= fruitList[r2].name
                    document.querySelector('.rMiniIcon2').setAttribute('src',`images/icons/${fruitList[r2].name}50.jpg`)
                    document.querySelector('.rMiniIcon2').setAttribute('alt',`Icon for ${fruitInfo[r2].name}.`)
                    document.querySelector('.rMiniIcon2').setAttribute('loading','lazy')


                }
                if(r3 != r1 && r3 != r2){

                    document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name
                    document.querySelector('.rFlavor3').value = fruitList[r3].name
                    document.querySelector('.rMiniIcon3').setAttribute('src',`images/icons/${fruitList[r3].name}50.jpg`)
                    document.querySelector('.rMiniIcon3').setAttribute('alt',`Icon for ${fruitInfo[r3].name}.`)
                    document.querySelector('.rMiniIcon3').setAttribute('loading','lazy')


                }else{
                    r3 = Math.floor(Math.random() * 39)
                    document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name
                    document.querySelector('.rFlavor3').value = fruitList[r3].name
                    document.querySelector('.rMiniIcon3').setAttribute('src',`images/icons/${fruitList[r3].name}50.jpg`)
                    document.querySelector('.rMiniIcon3').setAttribute('alt',`Icon for ${fruitInfo[r3].name}.`)
                    document.querySelector('.rMiniIcon3').setAttribute('loading','lazy')


                }


            }

            function homeRandomSubmit(){
                random1 = document.querySelector('.rFlavor1')
                random2 = document.querySelector('.rFlavor2')
                random3 = document.querySelector('.rFlavor3')

                localStorage.setItem('randomFlavor1',random1.innerHTML)
                localStorage.setItem('randomFlavor2',random2.innerHTML)
                localStorage.setItem('randomFlavor3',random3.innerHTML)
                localStorage.setItem('randomPriority','active')
                localStorage.setItem('previousPriority','not active')

            }

            function freshRandomSubmit(){
                random1 = document.querySelector('.rFlavor1')
                random2 = document.querySelector('.rFlavor2')
                random3 = document.querySelector('.rFlavor3')

                localStorage.setItem('randomFlavor1',random1.innerHTML)
                localStorage.setItem('randomFlavor2',random2.innerHTML)
                localStorage.setItem('randomFlavor3',random3.innerHTML)

                localStorage.setItem('randomPriority','active')
                localStorage.setItem('previousPriority','not active')
                localStorage.setItem('neutral','not active')
                initialMenu()

               
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


        }


    }


}

fruitGetter()
if(document.querySelector('.totalNumberOfOrders')){
    previousCount = document.querySelector('.totalNumberOfOrders')
    previousCount.innerHTML = localStorage.getItem('totalDrinks')

}
