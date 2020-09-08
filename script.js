window.onload = function () {
  // Lyssna efter händelser
  var team = document.getElementsByClassName("team-member");
  for (var i = 0; i < team.length; i++) {
    var worker = team[i];
    worker.addEventListener("click", editTitle);
    worker.addEventListener("mouseover", effectOn);
    worker.addEventListener("mouseout", effectOff);
  }
};
var editTitle = function (e) {
  // Ändra "team-title"
  var newTitle = window.prompt("Enter new Title");
  this.children[2].innerHTML = newTitle;
};

function effectOn(id) {
  // Rita en ram runt personen, kanske lite drop shadow?
  this.classList.add("hovering");
}

function effectOff(id) {
  // Stäng av effekten när musen inte längre är ovanför personen
  this.classList.remove("hovering");
}
