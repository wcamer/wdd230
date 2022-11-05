const copyWrite = '&copy' 
let modifiedDate = document.lastModified;
let timeStamp = new Date()
let timeStampGetter = document.querySelector('timeStamp')
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
console.log(dayName)
console.log(dayNumber)

console.log(currentYear);
const currentDate = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`
console.log(currentDate)





//document.querySelector("#footerLocation").textContent = authorLocation;
document.querySelector("#lastUpdated").textContent = `Last Updated: ${modifiedDate}`;
document.querySelector("#todayDate").textContent = currentDate

if(dayName == 'Monday' || dayName == 'Tuesday'){
    document.getElementById('meeting').id=('reveal')
}

timeStampGetter.innerHTML = timeStamp;
console.log(timeStamp,'this is the time')


// footer section
//document.querySelector("#footerTitle").innerHTML = copyWrite;
//document.querySelector("#footerTitle").textContent = `${currentYear} Happy Valley Chamber of Commerce`;
document.querySelector("#footerName").textContent = author;
document.querySelector("#footerDate").innerHTML = copyWrite + currentYear; //`${copyYear} ${author}`;









