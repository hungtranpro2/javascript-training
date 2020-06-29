  const books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   img: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
   author: 'Brian Christian',
   img: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
   alreadyRead: true
  }];

  // for(let i=0; i<books.length;i++){
  //   let bookP = document.createElement('p');
  //   bookP.textContent = books[i].title + ' by ' + books[i].author;
  //   document.body.appendChild(bookP);
  // }

  // Bonus
  const ul = document.createElement('ul');
  for(let x of books) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = x.img;
    li.appendChild(img);
    let bookP = document.createElement('p');
    bookP.textContent = x.title + ' by ' + x.author;
    li.appendChild(bookP);
    if(x.alreadyRead){
      li.style.color = 'green';
    }
    ul.appendChild(li);
  }
  document.body.appendChild(ul);


