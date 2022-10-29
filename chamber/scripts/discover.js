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
console.log(dayName)
console.log(dayNumber)

console.log(currentYear);
const currentDate = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`
console.log(currentDate)





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

const x = document.getElementById('hamburgerButton')

x.onclick = toggleMenu;

if(dayName == 'Monday' || dayName == 'Tuesday'){
    document.getElementById('meeting').id=('reveal')
}

const clickMoreInfoGet = document.getElementById('clickMoreInfo')
const moreInfoGet1 = document.getElementById('basicInfo1')
const moreInfoGet2 = document.getElementById('basicInfo2')
const moreInfoGet3 = document.getElementById('basicInfo3')

console.log(moreInfoGet1, 'this is the moreInfoGet before the change')

function moreInfoSwitch() {
    clickMoreInfoGet.classList.toggle('active')
    // moreInfoGet.classList = 'active'

}

function moreInfoSwitch1() {
    moreInfoGet1.classList.toggle('active')
    // moreInfoGet.classList = 'active'

}
function moreInfoSwitch2() {
    moreInfoGet2.classList.toggle('active')
    
  

}

function moreInfoSwitch3() {
    moreInfoGet3.classList.toggle('active')
    
    // moreInfoGet.classList = 'active'

}

// clickMoreInfoGet.onclick = moreInfoSwitch;
moreInfoGet1.onclick = moreInfoSwitch1;
moreInfoGet2.onclick = moreInfoSwitch2;
moreInfoGet3.onclick = moreInfoSwitch3;

// moreInfoGet2.onclick = moreInfoSwitch4;






currentTimeStamp = Date.now()
numberOfVisits = Number(window.localStorage.getItem('visits-ls'));
previousTimeStamp = localStorage.getItem('previousTimeStamp')


let millConvertDay = function() {
    if (numberOfVisits === 0){
        previousTimeStamp = currentTimeStamp
        console.log(previousTimeStamp,'this is previoustime stampppppppp in if section')
        numberOfVisits++
        document.querySelector('.lastVisit').textContent ='This is your first time visiting this page'

    }

    else {
        
        lastVisitedMill = currentTimeStamp - previousTimeStamp
        
        secConvert = Math.round(lastVisitedMill / 1000)
        minConvert = Math.round(lastVisitedMill / 60000)
        dayConvert = Math.round(lastVisitedMill / 86400000)
        previousTimeStamp = currentTimeStamp
    
        document.querySelector('.lastVisit').textContent = `It has been ${dayConvert} day(s) since your last visit to this page`;
        //document.querySelector('.lastVisit').textContent = `It has been ${secConvert} seconds(s) since your last visit to this page`;

        numberOfVisits++
    }
}

millConvertDay()

localStorage.setItem('visits-ls', numberOfVisits)
localStorage.setItem('previousTimeStamp', previousTimeStamp)
document.querySelector('.numberOfVisits').textContent = `This is visit number ${numberOfVisits} to this page`

document.querySelector('.preSchool').textContent = 3
document.querySelector('.elemSchool').textContent = 15
document.querySelector('.midSchool').textContent = 4
document.querySelector('.highSchool').textContent = 6


