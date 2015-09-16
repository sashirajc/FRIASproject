$(document).ready(function () {
    $("#myController").jFlow({
        controller: ".jFlowControl",
        slideWrapper: "#jFlowSlider",
        slides: "#mySlides",
        selectedWrapper: "jFlowSelected",
        width: "960px",
        height: "350px",
        duration: 400,
        prev: ".jFlowPrev",
        next: ".jFlowNext",
        auto: true
    });

    $().UItoTop({easingType: 'easeOutQuart'});
    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({social_tools: false})
});

jQuery(function () {
    jQuery('ul.nav').superfish();
});

function checkout() {
    alert("Please do not close this window before your payment finished.");
}

function address() {
	if(document.getElementById("myCheck").checked == true)
    	document.getElementById("address").style.fontWeight = "bold";
	else
		document.getElementById("address").style.fontWeight = "normal";
}

function checkBoySelect() {
	switch(document.getElementById("boySelect").value)
	{
		case "Demin boy Jeans":
        	document.getElementById("boyPrice").innerHTML = 10;
			document.getElementById("boyImage").src = "images/boys/Demin boy Jeans1.png";
			document.getElementById("boyLink").href = "single_product13.html";
			document.getElementById("boyLink").title = "dress";
        	break;
    	case "Skinny jeans - True rinse":
        	document.getElementById("boyPrice").innerHTML = 11;
			document.getElementById("boyImage").src = "images/boys/Demin boy jeans2.png";
			document.getElementById("boyLink").href = "single_product14.html";
			document.getElementById("boyLink").title = "dress2";			
        	break;
    	case "Demin Jeans - Tumbled mediums":
        	document.getElementById("boyPrice").innerHTML = 12;
			document.getElementById("boyImage").src = "images/boys/Denim female jeans 2.png";
			document.getElementById("boyLink").href = "single_product15.html";
			document.getElementById("boyLink").title = "dress3";
         	break;
    	case "Jimi Jeans for boys":
        	document.getElementById("boyPrice").innerHTML = 13;
			document.getElementById("boyImage").src = "images/boys/jimi.png";
			document.getElementById("boyLink").href = "single_product16.html";
			document.getElementById("boyLink").title = "dress4";
        	break;
    	case "Johnny and June Shirt":
        	document.getElementById("boyPrice").innerHTML = 14;
			document.getElementById("boyImage").src = "images/boys/johnny.png";
			document.getElementById("boyLink").href = "single_product17.html";
			document.getElementById("boyLink").title = "dress5";
        	break;
    	case "100% Pima Cotton Tshirts":
        	document.getElementById("boyPrice").innerHTML = 15;
			document.getElementById("boyImage").src = "images/boys/pima.png";
			document.getElementById("boyLink").href = "single_product18.html";
			document.getElementById("boyLink").title = "dress6";
        	break;    	
	}
}

function checkGirlSelect() {
	switch(document.getElementById("girlSelect").value)
	{
		case "Girls sunglasses rash vest":
        	document.getElementById("girlPrice").innerHTML = 20;
			document.getElementById("girlImage").src = "images/girls/vest2.png";
			document.getElementById("girlLink").href = "single_product10.html";
			document.getElementById("girlLink").title = "vest2";
        	break;
    	case "Cute doggie Embroidered Dresss":
        	document.getElementById("girlPrice").innerHTML = 21;
			document.getElementById("girlImage").src = "images/girls/dress7.png";
			document.getElementById("girlLink").href = "single_product9.html";
			document.getElementById("girlLink").title = "dress7";
        	break;
    	case "Peach Party Dress":
        	document.getElementById("girlPrice").innerHTML = 22;
			document.getElementById("girlImage").src = "images/girls/dress6.png";
			document.getElementById("girlLink").href = "single_product8.html";
			document.getElementById("girlLink").title = "dress6";
         	break;
    	case "Sequin Embellished Dress":
        	document.getElementById("girlPrice").innerHTML = 23;
			document.getElementById("girlImage").src = "images/girls/dress5.png";
			document.getElementById("girlLink").href = "single_product7.html";
			document.getElementById("girlLink").title = "dress5";
        	break;
    	case "Pure Cotton Prom Dresst":
        	document.getElementById("girlPrice").innerHTML = 24;
			document.getElementById("girlImage").src = "images/girls/dress4.png";
			document.getElementById("girlLink").href = "single_product6.html";
			document.getElementById("girlLink").title = "dress4";
        	break;
    	case "Yellow Flower Dress":
        	document.getElementById("girlPrice").innerHTML = 25;
			document.getElementById("girlImage").src = "images/girls/dress3.png";
			document.getElementById("girlLink").href = "single_product5.html";
			document.getElementById("girlLink").title = "dress3";
        	break;
	}
}

function total() {
	document.getElementById("toalPrice").innerHTML = document.getElementById("boyPrice").innerHTML * document.getElementById("boyQty").value + document.getElementById("girlPrice").innerHTML * document.getElementById("girlQty").value;
}
