function getCookieValue(cname) {
  var result = document.cookie.match("(^|[^;]+)\\s*" + cname + "\\s*=\\s*([^;]+)")
  return result ? result.pop() : ""
} 

function checkCookie() {
  var user=getCookieValue("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

function updateCookie(cname, value_to_add) {
  var c = getCookieValue(cname);
  if (c != "") {
    c += value_to_add;
    setCookie(cname, value_to_add, 30);
  }
}

function deleteCookie(cname) {
  setCookie(cname, "ciao", 0);
}

function setCookie(cname, cvalue, exdays) {
  if (exdays)
  {
    var d = new Date();
    d.setTime(d.getTime()+exdays*24*60*60*1000);
    var expires = "; expires=" + d.toGMTString();
  }
  else
    var expires = "";
  document.cookie = cname+"=" + cvalue+expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var slideIndex = 0;

$(document).ready(function(){
    switch (getCookie("clientConfiguration")) {
      case "":
        setCookie("clientConfiguration", "", 1);
        break;
      case "style1":
        convertToStyle("style1", "style1");
        break;
      case "style2":
        convertToStyle("style1", "style2");
        break;
      case "style3":
        convertToStyle("style1", "style3");
        break;
    }
    console.log($("#myButton").attr("class"));
    showSlides();
});

function myFunction() {
  $(document).ready(function(){
    $("#myButton").one('click', function(){
      switch ($("#myButton").attr("class")){
        case "button style1":
          convertToStyle("style1", "style2");
          break;
        case "button style2":
          convertToStyle("style2", "style3");
          break;
        case "button style3":
          convertToStyle("style3", "style1");
          break;
      }
    });
  });
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function convertToStyle(oldStyle, newStyle) {
  $("." + oldStyle).removeClass(oldStyle).addClass(newStyle);
  setCookie("clientConfiguration", newStyle, 1);
  console.log($("#myButton").attr("class"));
  $("#firstImageCaption").text(newStyle + " First Caption");
  $("#secondImageCaption").text(newStyle + " Second Caption");
  $("#thirdImageCaption").text(newStyle + " Third Caption");
  $("#firstImage").attr("src", "images/" + newStyle + "_homepage_picture_1.jpg");
  $("#secondImage").attr("src", "images/" +  newStyle + "_homepage_picture_2.jpg");
  $("#thirdImage").attr("src", "images/" +  newStyle + "_homepage_picture_3.jpg");
  $("#firstProductText").text(newStyle + " Product 1");
  $("#secondProductText").text(newStyle + " Product 2");
  $("#thirdProductText").text(newStyle + " Product 3");
  $("#firstProductIcon").attr("src", "images/" +  newStyle + "_homepage_product_1_icon.jpg");
  $("#secondProductIcon").attr("src", "images/" +  newStyle + "_homepage_product_2_icon.jpg");
  $("#thirdProductIcon").attr("src", "images/" +  newStyle + "_homepage_product_3_icon.jpg");
}
