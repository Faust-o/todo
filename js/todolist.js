let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function myFunction() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("newTask").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  //clear
  document.getElementById("newTask").value = "";

  let closeTask = document.getElementsByClassName("close");
  let i;

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("Delete");
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