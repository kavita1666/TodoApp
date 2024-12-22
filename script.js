const inputField = document.getElementById("goal-input");
const addButton = document.getElementById("add-btn");
const listItemContainer = document.getElementById("list-container");

addButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    let listItem = document.createElement("li");
    listItemContainer.appendChild(listItem);
    listItem.innerHTML=inputField.value;

    let cross = document.createElement('span');
    cross.innerHTML='x';
    listItem.appendChild(cross);
  } else{
    alert('write something')
  }
  inputField.value="";
  saveData();
});

listItemContainer.addEventListener('click', (e) => {
  console.log(e.target);
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
  } else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
    }
    saveData();
})

function saveData(){
  localStorage.setItem("data", listItemContainer.innerHTML)
}

(function(){
  listItemContainer.innerHTML = localStorage.getItem("data");
})()