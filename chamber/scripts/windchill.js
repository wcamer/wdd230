let tempGetter = document.getElementById('degree').innerHTML
let speedGetter = document.querySelector('#actualWindSpeed').innerHTML
let temp = parseInt(tempGetter)
let speed = parseInt(speedGetter)
console.log(temp)
console.log(typeof(temp))
console.log(speed)
console.log(typeof(speed))


if(temp <= 50 && speed > 3) {
    windChill = 35.74 + (0.6215 * temp) - (35.75*(speed ** 0.16)) + (0.4275*(temp*(speed ** .16)))
    console.log('this is true')
    // document.getElementById('actualWindChill').textContent = windChill;
    windChill = windChill.toFixed(1)

} else{
    windChill = 'N/a'
    console.log(windChill,'it came back false')
    
}

document.getElementById('actualWindChill').textContent = windChill;