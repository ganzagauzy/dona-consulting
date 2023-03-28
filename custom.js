window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById("back-to-top").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var button = document.getElementById("my-button");
var list = document.getElementById("my-list");

button.onclick = function() {
  if (list.style.display === "none") {
    list.style.display = "block";
    button.innerHTML = "Hide List";
  } else {
    list.style.display = "none";
    button.innerHTML = "Show List";
  }
}