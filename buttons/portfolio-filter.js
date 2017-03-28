$(document).ready(function() {
    $(".button").click(function(){
        var value = $(this).attr("data-filter");
        if (value == "all") {
            $(".filter").show("slow");
        } else {
            $(".filter").not("." + value).hide("slow");
            $(".filter").filter("." + value).show("slow");
        }

        $("ul .button").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
        });
    });
});