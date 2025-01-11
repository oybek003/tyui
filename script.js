let text = prompt('Ismingizni kiriting')

const newDiv = document.createElement('div');
newDiv.textContent = `${text}`;
document.body.appendChild(newDiv);

newDiv.style.backgroundColor = 'blue'
newDiv.style.height = '400px'
newDiv.style.fontSize = '90px'
newDiv.style.color = 'yellow'
newDiv.style.textAlign = 'center'
newDiv.style.padding = '300px 0px 0px 0px'