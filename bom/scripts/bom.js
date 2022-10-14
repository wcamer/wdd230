const input = document.querySelector('input')
const button = document.querySelector('Button')
const list = document.querySelector('ul')



// console.log(input.value) //blank string to start
console.log(typeof(input.value)) //type returns a string




//if(input.value =="" ){
button.addEventListener('click', function() {
    if(input.value === "" || input.value.trim() === ""){
        console.log('Please insert your favorite chapter')
    } 
    else{
        const item = input.value;
        console.log(item,'this is the item')
        input.value = '';
        console.log(input.value,'successfully reset')
    
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const deleteButton = document.createElement('button');
    
       
    
        listItem.appendChild(listText);
        listText.textContent = item;

        //console.log(listItem,'this is listItem')
        //console.log(listText,'this is listText')

        listItem.appendChild(deleteButton);
        deleteButton.textContent = '❌'
        list.appendChild(listItem);
    
    
    
    
        deleteButton.addEventListener('click',function(){
            list.removeChild(listItem)
            console.log('deletion was succesful')
        })
    
        
        input.focus();
    }

})
    
    
