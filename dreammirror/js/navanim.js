// JavaScript Document

/* Scrapped nav loader
$(function(){
    var navPoint = "#NAV_MAIN";
    $(navPoint).load("parts/nav.html #GRIDnav");
});
*/

$(function(){
    $('[id^="NAV_"]').hover(
        function() {
            var item = this.id.replace('NAV_','');
            $(this).attr("src","img/nav/" + item + "/hover.gif");
        },
        function() {
            var item = this.id.replace('NAV_','');
            $(this).attr("src","img/nav/" + item + "/static.png");
        }                         
    );
});