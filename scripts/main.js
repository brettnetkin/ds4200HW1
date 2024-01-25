let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '/users/sweatynettie/Desktop/Classes/DS4200/Homework1/images/Golfer.jpg') {
    myImage.setAttribute ('src','/users/sweatynettie/Desktop/Classes/DS4200/Homework1/images/Family.jpg');
  } else if (mySrc === '/users/sweatynettie/Desktop/Classes/DS4200/Homework1/images/Family.jpg') {
    myImage.setAttribute ('src','/users/sweatynettie/Desktop/Classes/DS4200/Homework1/images/Brett.jpg');
  } else if (mySrc === '/users/sweatynettie/Desktop/Classes/DS4200/Homework1/images/Brett.jpg') {
    myImage.setAttribute ('/users/sweatynettie/Desktop/Classes/DS4200/Homework1/images/Golfer.jpg');
  }
}

let myButton = document.querySelector('button');
let myButton2 = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Brett Netkin\'s website, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to Brett Netkin\'s website, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}