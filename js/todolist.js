const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function myFunction() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("newTask").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ul").appendChild(li);
  }

  const tasks = localStorage.getItem('todo-task');
    if(tasks){  
    }
    localStorage.setItem('todo-task', inputValue);

  //clear
  document.getElementById("newTask").value = "";

  const closeTask = document.getElementsByClassName("close");
  let i;

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("DELETE");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeTask.length; i++) {
    closeTask[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}
