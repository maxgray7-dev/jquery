$(document).ready(function() {
    // *** $("h2").css("text-decoration", "underline");//underlines all <h2> elements//
    //$("ul").css("border", "solid 1px #ccc"); //adds a boarder to all lists ***//
    
    //option2, add classes in html: underline and border. NOW we can make code more nice so it won't mix css to html.
    $("h2").addClass("underline");// underlines all <h2> elements
    $("ul").addClass("border"); //adds a boarder to all lists

    // simple as that we can also renove classes: 
    //$("h2").removeClass("underline");// underlines all <h2> elements
    //$("ul").removeClass("border"); //adds a boarder to all lists
});