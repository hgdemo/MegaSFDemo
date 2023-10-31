var body = document.getElementsByClassName("columnar-card_");

var icons = document.getElementsByClassName("columnar-icon");
var close_details = document.getElementsByClassName("close-icon-button");

var prod_details = document.getElementsByClassName("icon-desc");

function clickIcons(element1, element2) {
    var css_obj = getComputedStyle(element1);
    var elements_body = [3,4].map(x=>element2.children[x]);
    if (css_obj.getPropertyValue("display") === "none") {
    	element1.style.display = "block";
      	element1.style.visibility = "visible";
      	elements_body.map(x=>x.style.display="none");
      	elements_body.map(x=>x.style.visibility="hidden");
      	// alert("yeeeeeh");
    } else {
    	element1.style.display = "none";
      	element1.style.visibility = "hidden";
      	elements_body[0].style.display="block";
      	elements_body[1].style.display="flex";
      	elements_body.map(x=>x.style.visibility='visible');
    }
 }

function closeIcons(element1, element2){
    var css_obj = getComputedStyle(element1);
    var elements_body = [3,4].map(x=>element2.children[x]);
    if (css_obj.getPropertyValue("display") === "block") {
    	element1.style.display = "none";
      	element1.style.visibility = "hidden";
      	elements_body[0].style.display="block";
      	elements_body[1].style.display="flex";
      	elements_body.map(x=>x.style.visibility='visible');
    }
}

let j = 0;
for (let i = 0, j = 0; i < icons.length; i++) {

	if(i % 2 == 0 && i!=0){
		j += 1;
	}
	// alert(j);
	icons[i].addEventListener("click", function() {
	    clickIcons(prod_details[i], body[j]);
	});
	close_details[i].addEventListener("click", function() {
		closeIcons(prod_details[i], body[j]);
	});
}