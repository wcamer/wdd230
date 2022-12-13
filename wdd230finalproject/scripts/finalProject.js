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
    if(weatherResponse.ok && forecastResponse.ok){
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
        document.querySelector('.temp').innerHTML= todayTemp
        document.querySelector('.weatherDescription').innerHTML= todayDescription
        document.querySelector('.humidity').innerHTML = todayHumidity 

        console.log(todayDescription,todayHumidity,todayTemp)


        //forecast build



        //tomorrow
        const tomorrowName = 'tomorrow'
        const tomorrowNameTag = document.createElement('p')
        tomorrowNameTag.innerHTML = tomorrowName
        const tomorrowTemp = forecastInfo.list[4].main.temp
        const tomorrowTempTag = document.createElement('p')
        tomorrowTempTag.innerHTML = tomorrowTemp
        const tomorrowDescription = `https://openweathermap.org/img/wn/${forecastInfo.list[4].weather[0].description}@4x.png`
        const tomorrowIcon =`https://openweathermap.org/img/wn/${forecastInfo.list[4].weather[0].icon}@2x.png`

        // const tomorrowImageTag = document.createAttribute('img')
        // tomorrowImageTag.id = 'tomorrowIcon'
        const tomorrowImage = document.createElement('img')
        //tomorrowImage = document.querySelector('tomorrowIcon')
        tomorrowImage.classList = 'miniIcon'
        tomorrowImage.setAttribute('src',tomorrowIcon)
        tomorrowImage.setAttribute('alt', `Tomorrow's icon is for a ${tomorrowDescription} day`)
        tomorrowImage.setAttribute('loading','lazy')

        tomorrowDiv = document.querySelector('#tomorrowDiv')
        tomorrowDiv.append(tomorrowImage,tomorrowNameTag,tomorrowTempTag)


         // dayafter tomorrow
         const  dATName = 'two days'
         const dATNameTag = document.createElement('p')
         dATNameTag.innerHTML = dATName
         const  dATTemp = forecastInfo.list[12].main.temp
         const dATTempTag = document.createElement('p')
         dATTempTag.innerHTML = dATTemp
         const dATIcon = `https://openweathermap.org/img/wn/${forecastInfo.list[12].weather[0].icon}@2x.png`
         const dATImage = document.createElement('img')
         dATImage.classList = 'miniIcon'
         dATImage.setAttribute('src',tomorrowIcon)
         dATImage.setAttribute('alt', `Tomorrow's icon is for a ${tomorrowDescription} day`)
         dATImage.setAttribute('loading','lazy')
         const dATDiv = document.querySelector('#twoDaysDiv')
         dATDiv.append(dATImage,dATTempTag,dATNameTag)
 
 
         //2 days after tomorrow
         const tDATName = '3 days '
         const tDATNameTag = document.createElement('p')
         tDATNameTag.innerHTML = tDATName
         const tDATTemp = forecastInfo.list[20].main.temp
         const tDATTempTag = document.createElement('p')
         tDATTempTag.innerHTML = dATTemp
         const tDATIcon = `https://openweathermap.org/img/wn/${forecastInfo.list[20].weather[0].icon}@2x.png`
         const tDATImage = document.createElement('img')
         tDATImage.classList = 'miniIcon'
         tDATImage.setAttribute('src',tomorrowIcon)
         tDATImage.setAttribute('alt', `Tomorrow's icon is for a ${tomorrowDescription} day`)
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


///////////////////weatherGetter()
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

        //console.log(fruitInfo)
        //console.log(fruitInfo[0].name)
       // console.log(fruitInfo.length)
        //fruitList(fruitGetter)
        //return fruitInfo
        for(i=0; i < fruitInfo.length; i++){
            fruitList.push(fruitInfo[i])
            let pTagOuter = document.createElement('label')
            pTagOuter.classList = 'option'
            
            // let pTagInner = document.createElement('input')

            pTagOuter.innerHTML= fruitInfo[i].name
            // pTagInner.setAttribute('type','checkbox')
            // pTagInner.value = fruitInfo[i].name
            // pTagInner.classList = 'box'
            // pTagInner.id = `${fruitInfo[i].name}box`

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
            
            
            //pTagOuter.appendChild(pTagInner)

            //pTag.setAttribute('value',fruitInfo[i].name)
    
            //pTagOuter.innerHTML= fruitInfo[i].name

            image = document.createElement('img')
            image.setAttribute('src','images/instagram_512w.png')
            image.setAttribute('alt',`This is the icon for a ${fruitInfo[i].name}.`)
            image.setAttribute('loading','lazy')
            image.classList= 'fruitIcon'
            //pTagOuter.appendChild(image)

            //image.appendChild(pTagInner)
            //pTagOuter.appendChild(image)
            pTagOuter.appendChild(image)
            // pTagOuter.appendChild(pTagInner)
            
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
            // startingFlavor1 = document.querySelector('.list1')//.value
            // startingFlavor2 = document.querySelector('.list2')//.value
            // startingFlavor3 = document.querySelector('.list3')//.value

            // startingFlavor1.value = 'chocoleate'
            // startingFlavor1.textContent = 'chocolate'
            // console.log(startingFlavor1.value,startingFlavor2,startingFlavor3,'here are the starting flavors')
            

            // if(localStorage.getItem('neutral') == 1){
            //     startingFlavor1 = document.querySelector('.list1')//.value
            //     startingFlavor2 = document.querySelector('.list2')//.value
            //     startingFlavor3 = document.querySelector('.list3')//.value
               
            //     startingFlavor1.value = ''
            //     startingFlavor1.innerHTML = 'Pick A flavor'
            //     startingFlavor2.value = ''
            //     startingFlavor2.innerHTML = 'Pick A flavor'
            //     startingFlavor3.value = ''
            //     startingFlavor3.innerHTML = 'Pick A flavor'

            //     localStorage.setItem('randomPriority',0)
            //     localStorage.setItem('previousPriority',0)
            //     localStorage.setItem('neutral',0)


            // }

            


            if (localStorage.getItem('randomPriority') === 'not active' && localStorage.getItem('previousPriority') === 'not active'){
                
                console.log('this is turururururrururuur')
                // startingFlavor1 = document.querySelector('.list1')//.value
                // startingFlavor2 = document.querySelector('.list2')//.value
                // startingFlavor3 = document.querySelector('.list3')//.value
               
                // startingFlavor1.value = ''
                // startingFlavor1.innerHTML = 'Pick A Flavor'
                // startingFlavor2.value = ''
                // startingFlavor2.innerHTML = 'Pick A Flavor'
                // startingFlavor3.value = ''
                // startingFlavor3.innerHTML = 'Pick A Flavor'
                pf1 = document.querySelector('.pFlavor1')
                pf2 = document.querySelector('.pFlavor2')
                pf3 = document.querySelector('.pFlavor3')

                pf1.value = 'Joy'
                pf1.innerHTML = 'Joy'
                pf2.value = 'Love'
                pf2.innerHTML = 'Love'
                pf3.value = 'Happiness'
                pf3.innerHTML = 'Happiness'
                

                //localStorage.setItem('randomPriority','active')
                //localStorage.setItem('previousPriority','active')
                
            }


            if(localStorage.getItem('randomPriority') == 'active'){
                startingFlavor1 = document.querySelector('.list1')//.value
                startingFlavor2 = document.querySelector('.list2')//.value
                startingFlavor3 = document.querySelector('.list3')//.value

                startingFlavor1.value = localStorage.getItem('randomFlavor1')
                startingFlavor1.innerHTML = localStorage.getItem('randomFlavor1')

                startingFlavor2.value = localStorage.getItem('randomFlavor2')
                startingFlavor2.innerHTML = localStorage.getItem('randomFlavor2')

                startingFlavor3.value = localStorage.getItem('randomFlavor3')
                startingFlavor3.innerHTML = localStorage.getItem('randomFlavor3')

                localStorage.setItem('randomPriority','not active')
                //localStorage.setItem('previousPriority',0)
                
            } 
            
            if(localStorage.getItem('previousPriority') == 'active'){
                console.log('previoupripority has been triggered')
                startingFlavor1 = document.querySelector('.list1')
                startingFlavor2 = document.querySelector('.list2')
                startingFlavor3 = document.querySelector('.list3')

                startingFlavor1.value = localStorage.getItem('previousFlavor1')
                startingFlavor1.innerHTML = localStorage.getItem('previousFlavor1')

                startingFlavor2.value = localStorage.getItem('previousFlavor2')
                startingFlavor2.innerHTML = localStorage.getItem('previousFlavor2')

                startingFlavor3.value = localStorage.getItem('previousFlavor3')
                startingFlavor3.innerHTML = localStorage.getItem('previousFlavor3')

                //localStorage.setItem('randomPriority',0)
                localStorage.setItem('previousPriority','not active')
                

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
            //     localStorage.setItem('previousPriority',0)
                
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

       

        function quickSubmitReset(){

            if(localStorage.getItem('quick1') != 'Blank'){
                console.log('loading in quick flavor1')
                document.querySelector('#firstFlavor').value = localStorage.getItem('quick1')
                localStorage.setItem('quick1','Blank')
                console.log('quick flavor has been set and the memory flavor has been reset')

            }else{

                localStorage.setItem('quick1','Blank')

            }

            if(localStorage.getItem('quick2') != 'Blank'){
                console.log('loading in quick flavor2')
                document.querySelector('#secondFlavor').value = localStorage.getItem('quick2')
                localStorage.setItem('quick1','Blank')
                console.log('quick flavor has been set and the memory flavor has been reset')
            }else{
                localStorage.setItem('quick2','Blank')
                console.log('quick flavor has been set and the memory flavor has been reset')
            }

            if(localStorage.getItem('quick3') != 'Blank'){
                console.log('loading in quick flavor3')
                document.querySelector('#thirdFlavor').value = localStorage.getItem('quick3')
                localStorage.setItem('quick1','Blank')
                console.log('quick flavor has been set and the memory flavor has been reset')
            }else{
                localStorage.setItem('quick3','Blank')
                console.log('quick flavor has been set and the memory flavor has been reset')
            }




        }

        function homesubmit(){
            console.l0g('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
            fflav = document.querySelector('#firstFlavor').value
            sflav = document.querySelector('#secondFlavor').value
            tflav = document.querySelector('#thirdFlavor').value
            specialOrder = document.querySelector('#textArea').value

            localStorage.setItem('previousFlavor1',fflav)
            localStorage.setItem('previousFlavor2',sflav)
            localStorage.setItem('previousFlavor3',tflav)


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

            console.log(pf1,pf2,pf3,'these are the previous flavors in teh submit')

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

            sI = document.querySelector('.specialInstructions')
           

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
            prevflav1 = document.querySelector('.pFlavor1')//.value
            console.log(prevflav1.value,'in the prevous submit')
            prevflav2 = document.querySelector('.pFlavor2')//.value
            prevflav3 = document.querySelector('.pFlavor3')//.value

            console.log(prevflav1.value,prevflav2.value,prevflav3.value,'here are yoru 3 previous flavorerers')
            localStorage.setItem('previousFlavor1',prevflav1.value)
            localStorage.setItem('previousFlavor2',prevflav2.value)
            localStorage.setItem('previousFlavor3',prevflav3.value)
            localStorage.setItem('previousPriority','active')

            startingFlavor1 = document.querySelector('.list1')
            startingFlavor1.value = prevflav1.value
            startingFlavor1.innerHTML = prevflav1.value

            startingFlavor2 = document.querySelector('.list2')
            startingFlavor2.value = prevflav2.value
            startingFlavor2.innerHTML = prevflav2.value

            startingFlavor3 = document.querySelector('.list3')
            startingFlavor3.value = prevflav3.value
            startingFlavor3.innerHTML = prevflav3.value

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



            //initialMenu()

        }

        if(document.querySelector('#prevSubmit')){
            prevSubmitButton = document.querySelector('#prevSubmit')
            prevSubmitButton.addEventListener('click',previousSubmit)
        }
      
        
        pf1 = document.querySelector('.pFlavor1')
        pf2 = document.querySelector('.pFlavor2')
        pf3 = document.querySelector('.pFlavor3')
        console.log(pf1,'here is the before null condition')
        pf1.value = localStorage.getItem('previousFlavor1')
        pf2.value = localStorage.getItem('previousFlavor2')
        pf3.value = localStorage.getItem('previousFlavor3')
        pf1.innerHTML = localStorage.getItem('previousFlavor1')
        pf2.innerHTML = localStorage.getItem('previousFlavor2')
        pf3.innerHTML = localStorage.getItem('previousFlavor3')

        //localStorage.setItem('previousPriority','active')
        //localStorage.setItem('randomPriority','not active')
        
        console.log(pf1.value)
        if (pf1.value == null){
            pf1.value = 'Joy'
            pf1.innerHTML = 'Joy'
            console.log(pf1.value,'here is the null condition')
            //localStorage.setItem('previousFlavor1','Joy')
           

        }
        else{
            console.log(pf1.value,'here is the else statement')
            pf1.value = localStorage.getItem('previousFlavor1')
            pf1.innerHTML = localStorage.getItem('previousFlavor1')
            //localStorage.setItem('previousPriority','active')


        }
        if(pf2.value == null){
            pf2.value = 'Love'
            pf2.innerHTML = 'Love'
            //localStorage.setItem('previousFlavor2','Love')
            

        }
        else{
            console.log(pf2.value,'here is the else statement')
            pf2.value = localStorage.getItem('previousFlavor2')
            pf2.innerHTML = localStorage.getItem('previousFlavor2')
            //localStorage.setItem('previousPriority','active')



        }
        if(pf3.value == null){
            pf3.value = 'Happiness'
            pf3.innerHTML = 'Happiness'
           // localStorage.setItem('previousFlavor3','Happiness')
        }

        else{
            console.log(pf3.value,'here is the else statement')
            pf3.value = localStorage.getItem('previousFlavor3')
            pf3.innerHTML = localStorage.getItem('previousFlavor3')
            //localStorage.setItem('previousPriority','active')

        }
       
       
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
        let r1 = Math.floor(Math.random() * 39) 
        let r2 = Math.floor(Math.random() * 39) 
        let r3 = Math.floor(Math.random() * 39) 
        console.log(r1,r2,r3,'here are the randome numbers')
        //console.log(fruitList[38].name,'here is the fruit list')
        document.querySelector('.rFlavor1').innerHTML = fruitList[r1].name
        if(r2 != r1){
            document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name
        } else{
            r2 = Math.floor(Math.random() * 39) 
            console.log('reshuffling r2.  Here is the new numnber',r2)
            document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name

        }
        if(r3 != r1 && r3 != r2){

            document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name

        }else{
            r3 = Math.floor(Math.random() * 39) 
            console.log('reshuffling r3.  Here is the new number',r3)
            document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name
        }

        function randomizer(){
            let r1 = Math.floor(Math.random() * 39) 
            let r2 = Math.floor(Math.random() * 39) 
            let r3 = Math.floor(Math.random() * 39) 
            console.log(r1,r2,r3,'randomizer activated here are the randome numbers')
            //localStorage.setItem('randomFlavor1',fruitList[r1].name)
            //console.log(fruitList[38].name,'here is the fruit list')
            document.querySelector('.rFlavor1').innerHTML = fruitList[r1].name
            document.querySelector('.rFlavor1').value = fruitList[r1].name
            if(r2 != r1){
                document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name
                document.querySelector('.rFlavor2').value= fruitList[r2].name
                //localStorage.setItem('randomFlavor2',fruitList[r2].name)
            } else{
                r2 = Math.floor(Math.random() * 39) 
                console.log('reshuffling r2.  Here is the new numnber',r2)
                document.querySelector('.rFlavor2').innerHTML= fruitList[r2].name
                document.querySelector('.rFlavor2').value= fruitList[r2].name

                //localStorage.setItem('randomFlavor2',fruitList[r2].name)

            }
            if(r3 != r1 && r3 != r2){

                document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name
                document.querySelector('.rFlavor3').value = fruitList[r3].name
                //localStorage.setItem('randomFlavor3',fruitList[r3].name)

            }else{
                r3 = Math.floor(Math.random() * 39) 
                console.log('reshuffling r3.  Here is the new number',r3)
                document.querySelector('.rFlavor3').innerHTML= fruitList[r3].name
                document.querySelector('.rFlavor3').value = fruitList[r3].name

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
            console.log(random1.innerHTML,'rando flavor 1 in randosubmit')

            localStorage.setItem('randomFlavor1',random1.innerHTML)
            localStorage.setItem('randomFlavor2',random2.innerHTML)
            localStorage.setItem('randomFlavor3',random3.innerHTML)


            localStorage.setItem('randomPriority','active')
            localStorage.setItem('previousPriority','not active')
            initialMenu()

            console.log(fruitInfo[3])
            console.log(document.querySelector('.confirmedFlavor1').innerHTML,'this is CF1')
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

fruitGetter()

previousCount = document.querySelector('.totalNumberOfOrders')
previousCount.innerHTML = localStorage.getItem('totalDrinks')


// localStorage.setItem('randomFlavor1',document.querySelector('rFlavor1').value)
// localStorage.setItem('randomFlavor2',document.querySelector('rFlavor2').value)
// localStorage.setItem('randomFlavor3',document.querySelector('rFlavor3').value)

// localStorage.setItem('previousFlavor1','Blank')
// localStorage.setItem('previousFlavor2','Blank')
// localStorage.setItem('previousFlavor3','Blank')

// localStorage.setItem('randomPriority',0)
// localStorage.setItem('previousPriority',0)











