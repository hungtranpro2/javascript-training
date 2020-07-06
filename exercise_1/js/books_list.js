const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    img: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    img: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
    alreadyRead: true
  }
];

// Bonus
const lists = document.createElement('ul');
for(let book of books) {
  let list = document.createElement('li');
  let img = document.createElement('img');
  img.src = book.img;
  list.appendChild(img);
  let paragraph = document.createElement('p');
  paragraph.textContent = book.title + ' by ' + book.author;
  list.appendChild(paragraph);
  if(book.alreadyRead){
    list.style.color = 'green';
  }
  lists.appendChild(list);
}
document.body.appendChild(lists);
