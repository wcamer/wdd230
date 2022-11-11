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

const requestURL = 'https://wcamer.github.io/wdd230/chamber/data.json'




console.log(dayName)
console.log(dayNumber)

console.log(currentYear);
const currentDate = `${dayName}, ${dayNumber} ${monthName} ${currentYear}`
console.log(currentDate)

const directorySign = document.querySelector('#directory')
console.log(directorySign,'this is the sign')
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




if (document.querySelector('#directoryMain')){
    console.log('this id is present')

    async function companyDataGetter(){
        const response= await fetch(requestURL)
        const data = await response.json()
        companies = data['companies']
        //console.log(prophets,'this is the more robust one')
        console.log(companies)
        return companies.forEach(displayCompanies)
        
        
    }
    
    const displayCompanies = function(company){
        let card = document.createElement('section');
      
        let logo = document.createElement('img');
        let heading3 = document.createElement('h3')
        let address = document.createElement('p');
        let website = document.createElement('a');
        let number = document.createElement('p');
        let membership = document.createElement('p');
        
        
        heading3.textContent = company.name

        address.textContent = company.address
        number.textContent = company.phone
        website.textContent = company.website
        membership.textContent = company.membership
        

        logo.setAttribute('src',company.logo);
        logo.setAttribute('alt',`This is the logo for ${company.name}.`);
        logo.setAttribute('loading','lazy');

        card.appendChild(logo)
        card.appendChild(heading3)
        card.appendChild(address)
        card.appendChild(number)
        card.appendChild(website)
        card.appendChild(membership)

        document.querySelector('#directory').appendChild(card);
        //companyDataGetter(displayCompanies)

       // return companies.forEach(displayCompanies)
      // companyDataGetter()
    }
    companyDataGetter()
    
}
else{
    console.log('it is not here')
}





if (gridSwitchGrabber !== null && listSwitchGrabber !== null){
    listSwitchGrabber.onclick = directoryListSwitch;
    gridSwitchGrabber.onclick = directoryGridSwitch;
    console.log('listSwitchGrabber or gridSwitchGrabber is  present')
}
else{
    console.log('listSwitchGrabber or gridSwitchGrabber are not present')
}
   


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







