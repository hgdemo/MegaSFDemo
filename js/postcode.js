var postcode_input = document.getElementById("postcode");
var button_postcode = document.getElementById("postcode_check_button");
var error_text = document.getElementsByClassName("postcode-error");

var regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

var css_obj = getComputedStyle(error_text[0]);

// alert(document.getElementById("postcode").value=="");

button_postcode.addEventListener("click", function() {
	if(regex.test(postcode_input.value) | postcode_input.value==""){
		error_text[0].style.display = "block";
	} else{
		location.replace("checkout.html");
	}
});

postcode_input.addEventListener("click", function() {
	if (css_obj.getPropertyValue("display") === "block") {
    	error_text[0].style.display = "none";
    }
	});