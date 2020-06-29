document.body.style.fontFamily = "Arial, sans-serif";
document.querySelector('#nickname').textContent = "Hung";
document.querySelector('#favorites').textContent = "Play Games";
document.querySelector('#hometown').textContent = "TT.Hue";

const li = document.querySelectorAll('li');
for(let x of li) {
  x.className = 'list-item';
}

const style = document.createElement('style');
style.innerHTML = `.list-item {
  color: red;
}`;
document.head.appendChild(style);

const img = document.createElement('img');
img.setAttribute('src','https://www.w3schools.com/css/img_forest.jpg');
document.body.appendChild(img);