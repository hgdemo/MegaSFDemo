function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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

function convertToStyle(oldStyle, newStyle) {
  $("." + oldStyle).removeClass(oldStyle).addClass(newStyle);
  setCookie("clientConfiguration", newStyle, 1);
  console.log($("#myButton").attr("class"));
  $("#packageOneHeaderItem").text(newStyle + " Basic");
  $("#packageTwoHeaderItem").text(newStyle + " Pro");
  $("#packageThreeHeaderItem").text(newStyle + " Premium");
}
