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
