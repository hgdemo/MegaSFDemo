$('a.card-button').click(function () {
	let value = $(this).attr('data-bundle');
	console.log("testttttttttttttt: ", value);
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

	if (value == "M1000 Fibre BB") {
		value = value + ": 62";
	}
							
	setCookie("basket", value, 30);
	console.log(getCookieValue("basket"));
})

function updateBasket() {
	var value = getCookieValue("basket");
	console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",value);

	if (value == "") {
		$('#li-proceed').addClass('d-none');
		$('#li-empty').removeClass('d-none');
	} else {
		$('#li-proceed').removeClass('d-none');
		$('#li-empty').addClass('d-none');
	}
}

function updateCartPrice() {
    var cvalue = getCookieValue("basket").split(":");

    document.getElementById("title_bundle").innerHTML   = cvalue[0];
    document.getElementById("single_price").innerHTML   = '$' + cvalue[1].trim();
    document.getElementById("total_price").innerHTML    = '$' + cvalue[1].trim();
    // document.getElementById("number_product").innerHTML = "1";
  }
