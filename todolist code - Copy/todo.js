const todoList = [];

function renderOutput() {
  let listDisplay = '';

  todoList.forEach((todoObject, i) => {
    const { name, date } = todoObject

    const htmlCode = `

      <div class="output-grid">

        <div class="name">${name}</div>
        <div class="date"> ${date}</div> 
        <div class=""><button class="js-delete-btn delete-btn"><img src="garbage-bin-10420.png" class="bin-img"></button></div>
        
      </div>`
    listDisplay += htmlCode;
  })

  document.querySelector('.js-output').innerHTML = listDisplay;

  document.querySelectorAll('.js-delete-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      todoList.splice(i, 1)
      renderOutput();
    })
  })
}


function getInput() {
  const input = document.querySelector('.js-input')
  const inputPrime = input.value;


  const date = document.querySelector('.js-date')
  datePrime = date.value;


  input.value = '';
  date.value = '';


  todoList.push({
    name: inputPrime,
    date: datePrime
  })
}




function checkforinput() {

}

document.querySelector('.js-add-btn').addEventListener('click', () => {
  getInput();
  renderOutput();
})