window.onscroll = function () {
  myFunction()
  scrollBorder();
};
function myFunction() {
  var navbar = document.getElementById("navbarr");
  var sticky = navbar.offsetTop;
  var logo = document.getElementsByClassName("navbar-logo")[0];
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    logo.classList.add("navbar-logo1");
  }
  else {
    navbar.classList.remove("sticky");
    logo.classList.remove("navbar-logo1");
  }
}


function items() {
  let menuContent = document.querySelector('.navbar-items');
  if (menuContent.style.display === "") {
    menuContent.style.display = 'flex';
  } else {
    menuContent.style.display = "";
  }
}
// function scrollBorder() {
//   var position = window.pageYOffset;
//   var x = document.querySelectorAll('.scrollBorder');
//   x.forEach(function (target) {
//     var targetPos = target.offsetTop;
//     // var id =this.attr('id');
//     if (position < targetPos) 
//     {
//       // $('#navigation > ul > li > a').removeClass('active');
//       // $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
//       // document.querySelectorAll();
//       // console.log();
//     }
//     // else{
//     //   console.log("Hi");
//     // }
//   });
// }





/*third*/



function show1() {
  var size = window.matchMedia("(max-width: 768px)");
  if (!size.matches) {
    var x = document.getElementById("demo1");
    var y = document.getElementById("search");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.classList.add('show');
      document.getElementById("close1").style.display = "block";
    }
    else {
      x.style.display = "none";
      y.classList.remove('show');
      document.getElementById("close1").style.display = "none";
    }
  }
}
function closeit1() {
  var size = window.matchMedia("(max-width: 768px)");
  if (!size.matches) {
    var x = document.getElementById("demo1");
    document.getElementById("search").style.width = "224px";
    x.style.display = "none";
    document.getElementById("close1").style.display = "none";
  }
}
function show2() {
  var size = window.matchMedia("(max-width: 768px)");
  if (!size.matches) {
    var x = document.getElementById("demo2");
    var y = document.getElementById("video");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.classList.add('show');
      document.getElementById("close2").style.display = "block";
    }
    else {
      x.style.display = "none";
      y.classList.remove('show');
      document.getElementById("close2").style.display = "none";
    }
  }
}
function closeit2() {
  var size = window.matchMedia("(max-width: 768px)");
  if (!size.matches) {
    var x = document.getElementById("demo2");
    x.style.display = "none";
    document.getElementById("video").style.width = "224px";
    document.getElementById("close2").style.display = "none";
    console.log("Hii");
  }
}
function show3() {
  var size = window.matchMedia("(max-width: 768px)");
  if (!size.matches) {
    var x = document.getElementById("demo3");
    var y = document.getElementById("mobile");
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log(y);
      y.classList.add('show');
      document.getElementById("close3").style.display = "block";
    }
    else {
      x.style.display = "none";
      y.classList.remove('show');
      document.getElementById("close3").style.display = "none";
    }
  }
}
function closeit3() {
  var size = window.matchMedia("(max-width: 768px)");
  if (!size.matches) {
    var x = document.getElementById("demo3");
    x.style.display = "none";
    document.getElementById("mobile").style.width = "224px";
    document.getElementById("close3").style.display = "none";
  }
}
