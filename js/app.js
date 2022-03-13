const redtext = document.getElementById('red');
const heading = document.querySelector('.about__title');
console.dir(heading);
const heading2 = heading.nextElementSibling;
console.dir(heading2);
const titles = document.querySelectorAll('.about__title, .news__title, .service__title, .form__title');
console.log(titles);
const greentext = document.getElementsByClassName('news__slider-text')[0]
const heading3 = titles[titles.length - 1];
const anonim = document.querySelector('.about__btn');

anonim.addEventListener('click', (event) => {
  event.preventDefault()
console.log('click on anonim', event.target.getAttribute('href'))
  const url = event.target.getAttribute('href')
  window.location = url
})


setTimeout(() => {
 addStyleRed(redtext, 'JavaScript')
 

}, 2000)
setTimeout(() => {
  addStyleRed(greentext, '')
 

}, 3000)

setTimeout(() => {
  addStyleRed(heading, '')
 

}, 4000)


function addStyleRed(node, text) {
  node.textContent = text;
  node.style.color = 'red';
  node.style.textAlign = 'center';
  node.style.backgroundColor = 'blue';
}
function addStyleGreen(node) {
  node.style.color = 'green'
}

heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = 'white'
    heading.style.backgroundColor = 'black'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = 'blue'
  }
}

greentext.addEventListener('dblclick', () => {
  if (greentext.style.color === 'red') {
    greentext.style.color = 'white'
  greentext.style.backgroundColor = 'black'
  } else {
    greentext.style.color = 'red'
    greentext.style.backgroundColor = 'blue'
  }
})