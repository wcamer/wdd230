//Weather retrieve
console.log('testings')
//weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.15&lon=-117.35&appid=8160a27cc620020f4d27e28b30e41789&units=imperial'
weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=7060c635b6a1fcc5f33f2a1f6092c70c'
//weatherURL = 'api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test'
async function weatherGetter(){
    const weatherResponse = await fetch(weatherURL)
    if(weatherResponse.ok){
        const weatherInfo = await weatherResponse.json()
        console.log(weatherInfo)
    }
}


weatherGetter()

//fruit json
const fruit = 'https://wcamer.github.io/wdd230/wdd230finalproject/fruit.json'
async function fruitGetter(){
    const fruitResponse = await fetch(fruit)
    console.log('level 1')
    if(fruitResponse.ok){
        const fruitInfo = await fruitResponse.json()
        console.log(fruitInfo,'chungy')
    }
}

fruitGetter()