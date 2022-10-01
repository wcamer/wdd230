const copyWrite = '&copy' 
let modifiedDate = document.lastModified;
let currentYear = new Date().getFullYear()
const author = 'William Cameron'
const authorLocation = 'Utah, USA'

console.log(currentYear);

document.querySelector("#footerDate").innerHTML = copyWrite + currentYear; //`${copyYear} ${author}`;
document.querySelector("#footerName").textContent = author;
document.querySelector("#footerLocation").textContent = authorLocation;
document.querySelector("#lastUpdated").textContent = `Last Updated: ${modifiedDate}`;


