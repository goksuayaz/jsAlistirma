const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' 
  title.style.textAlign='center'
    if (i % 2 === 0) {
    title.style.color = 'black'
  } else {
    title.style.color = 'red'
  }
})

const li = document.querySelectorAll("ul li");
li.forEach((item, i) =>  {
    item.style.fontSize = '24px'; 
    if (i === 0) {
        item.style.backgroundColor = 'green';

    }

    if (i === 1) {
        item.style.backgroundColor = 'yellow';

    }

    if(i===2 ){
        item.style.backgroundColor = 'red';
    }

    if(i===3 ){
        item.style.backgroundColor = 'red';
    }
});

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
const yearElement = document.getElementById('year');

let colorIndex = 0;

function changeColor() {
    yearElement.style.color = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
  }
  
  setInterval(changeColor, 1000);
  yearElement.style.fontSize="50px";

  
  const h2Element = document.querySelector('h2');
  h2Element.style.fontSize = '20px';
  h2Element.style.textAlign='center';
  h2Element.style.textDecoration='underline'


  function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US');
    const time = now.toLocaleTimeString('en-US');
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = `${date}, ${time}`;
}

updateClock();

setInterval(updateClock, 1000);

clock.style.fontSize='18px';
clock.style.textAlign='center';
clock.style.backgroundColor='lightgreen';


