var down = 0;
var c = 5;

function sortwithcolorchar( column ) {
	$("#colorsort > tbody > tr").heatcolor(
			function() { return $("td:nth-child(" + column + ")", this).text().charCodeAt(0); }
	);
};
function sortwithcolorint( column ) {
	$("#colorsort > tbody > tr").heatcolor(
			function() { return $("td:nth-child(" + column + ")", this).text(); }
	);
};
function sortwithcolor() {
	$(this).siblings().removeClass("colorsort-active");
	$(this).addClass("colorsort-active");	
	$(this).siblings().each( function () {
		$(this).children(":first").removeAttr("class");	
		$(this).children(":first").attr("class","oi oi-elevator");	
	});
	$(this).children(":first").removeAttr("class");	
	
	var x = $(this).parent().children().index( this ) + 1;

	if (x != c) {
		down = 0;
		$(this).children(":first").attr("class","oi oi-caret-bottom");
	}
	else if (down == 0) {
		down = 1;
		$(this).children(":first").attr("class","oi oi-caret-top");
	}
	else if (down == 1) {
		down = 0;
		$(this).children(":first").attr("class","oi oi-caret-bottom");
	}
	c = x;
	if (x == 5 || x == 2) {
		sortwithcolorint(x);
	}
	else {
		sortwithcolorchar(x);
	}
}