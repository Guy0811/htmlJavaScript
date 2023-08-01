
// // // getElementById()
// // const title = document.getElementById('main-heading');

// // console.log(title);


// // // getElementByClassName()

// const listItem = document.getElementsByClassName('list-items');

// console.log(listItem);


// // //getElementsByTagName()


// // //querySelector()

// const container = document.querySelector('div');

// console.log(container);




// // //querySelectorAll()

// // DOM Manipulation 

// //Styling Elements

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// console.log(title);

// const listItems = document.querySelectorAll('.list-items');



// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';
// }

// // Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // Adding Elements

// ul.append(li);

// // Modifying the text

// li.innerText = 'Spider-Man';

// // Modifying Attributes & Classes

li.style.fontSize = '2rem';

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.box-2');

function alertBtn () {
    alert('I also love Javascript');
};

buttonTwo.addEventListener("click", alertBtn);

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
};

newBackgroundColor.addEventListener("mouseover", changeBgColor);


// // Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')

    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);


// Event Probagation

window.addEventListener("click", function() {
    console.log('window');
}, true );

document.addEventListener("click", function() {
    console.log('Document');
}, true);

document.querySelector(".div2").addEventListener("click", function() {
    console.log('Div 2');
}, true);

document.querySelector(".div1").addEventListener("click", function() {
    console.log('Div 1');
}, true);

document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText = 'clicked!');
}, true);







