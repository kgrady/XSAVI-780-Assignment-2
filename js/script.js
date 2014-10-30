var awesomeLevel = parseInt($("#counter").text());

$("button").click(function(){
    if ( $(this).attr("id") === "increase" ) {
        awesomeLevel = awesomeLevel + 10;
    } else {
        awesomeLevel = awesomeLevel - 1;
    }
    
    $("#counter").text(awesomeLevel);
    
    if (awesomeLevel < 0) {
        $(".container").css("background-color", "red"); }
    }
    
});