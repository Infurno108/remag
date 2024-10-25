var people = ["Flint", "Paul", "Brown", "Logan", "Garret", "Seve"];

function loadData() {
  var referenceNode = document.getElementsByClassName("ppl")[0];

  for (var i = 0; i < people.length; i++) {
    var div = document.createElement("div");
    div.className = "person";
    div.id = people[i] + "div";

    var name = document.createElement("h2");
    name.innerHTML = people[i];
    name.setAttribute("class", "name");

    var status = document.createElement("h3");
    status.setAttribute("class", "status");
    status.id = people[i] + "status";
    status.innerHTML = "Loading...";

    div.appendChild(name);
    div.appendChild(status);
    referenceNode.appendChild(div);
  }
}

window.onload = loadData;
