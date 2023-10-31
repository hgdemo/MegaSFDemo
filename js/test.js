function setcookie(name, value, days)
{
    if (days)
    {
        var date = new Date();
        date.setTime(date.getTime()+days*24*60*60*1000));
        var expires = "; expires="date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="value+expires+";path=/";
}

function setcookie(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function setcookie(cname, cvalue, exdays)
{
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