  
function toggleNav(){
  let navbar=document.getElementById('navbar');
  let mainBody=document.getElementById('mainbody');
  let navbarHamburger=navbar.firstElementChild;
  navbar.classList.toggle('open');
  mainBody.classList.toggle('open');  
  navbarHamburger.classList.toggle('open');
}


// collapsible_________________
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}