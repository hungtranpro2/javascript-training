const records = [];
const btn = document.getElementById('myForm');
btn.addEventListener('submit',addRecord);

function addRecord(e) {
  e.preventDefault();
  const myForm = document.getElementById('myForm');

  const newRecord = {
    firstName: myForm.elements['firstName'].value,
    age: myForm.elements['age'].value,
    pref: myForm.elements['pref'].value
  };

  records.push(newRecord);
  myForm.reset();
  drawTable();

}

function drawTable() {
  const table = document.getElementById('myTbody');
  let txt = '';

  for (let x of records) {
    txt = txt + `<tr>
                  <td>${x.firstName}</td>
                  <td>${x.age}</td>
                  <td>${x.pref}</td>
                 </tr>`;

  }table.innerHTML = txt;

}