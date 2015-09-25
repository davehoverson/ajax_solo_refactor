/**
 * Created by davidhoverson on 9/25/15.
 */
$(function(){
    $.ajax({
        url:"/getColors"
    }).done(function (response){
            for(var i = 0; i<response.length; i++){
            var $colors = $("<div style=color:" + response[i].value + "><p>"+ response[i].color + "</p></div>");
            $(".placeholder").append($colors);
        }
    });
});