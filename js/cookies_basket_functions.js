function createBasketCookie() {
	$(document).click(function(event){
		var value = event.target.parentElement.parentElement.children[0].innerText.trim();
		console.log(value);

		if (value == "Big Bundle") {
			value = value + ": 33";
		}

		if (value == "Bigger Bundle") {
			value = value + ": 49";
		}
		if (value == "Bigger Bundle sports") {
			value = value + ": 65";
		}

		if (value == "Ultimate Bundle") {
			value = value + ": 89";
		}

		if (value == "M100 Fibre BB Phone") {
			value = value + ": 27";
		}

		if (value == "M200 Fibre BB Phone") {
			value = value + ": 33";
		}

		if (value == "M350 Fibre BB Phone") {
			value = value + ": 39";
		}

		if (value == "M500 Fibre BB Phone") {
			value = value + ": 45";
		}

		if (value == "M100 Fibre BB") {
			value = value + ": 44";
		}

		if (value == "M350 Fibre BB") {
			value = value + ": 56";
		}

		if (value == "M500 Fibre BB") {
			value = value + ": 62";
		}

		if (value.includes("Gig1")) {
			value = value + ": 62";
		}
                
		setCookie("basket", value, 30);
        console.log(getCookieValue("basket"));
		// console.log(value);
		// alert(value);

		// alert(getCookieValue("basket"));
	});
}

function updateBasket() {
	var value = getCookieValue("basket");
	console.log(value);

	if (value == "") {
		document.getElementById("basket_content_dynamic").innerHTML = "Currently Empty";
		document.getElementById("remove_basket").style.display      = "none";
		document.getElementById("proceed_eli").style.display        = "none";
	} else {
		document.getElementById("basket_content_dynamic").innerHTML = value;
		document.getElementById("remove_basket").style.display      = "block";	
		document.getElementById("proceed_eli").style.display        = "block";
			
	}
}

function updateCartPrice() {
    var cvalue = getCookieValue("basket").split(":");

    document.getElementById("title_bundle").innerHTML   = cvalue[0];
    document.getElementById("single_price").innerHTML   = cvalue[1].trim();
    document.getElementById("total_price").innerHTML    = cvalue[1].trim();
    // document.getElementById("number_product").innerHTML = "1";
  }
