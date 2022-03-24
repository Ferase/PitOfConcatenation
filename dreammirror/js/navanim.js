// JavaScript Document

/* Scrapped nav loader
$(function(){
    var navPoint = "#NAV_MAIN";
    $(navPoint).load("parts/nav.html #GRID_NAV");
});
*/

$(function(){
    $('[id^="NAV_"]').hover(
        function() {
            var item = this.id.replace('NAV_','');
            $(this).attr("src","img/_nav/" + item + "/hover.gif");
        },
        function() {
            var item = this.id.replace('NAV_','');
            $(this).attr("src","img/_nav/" + item + "/static.png");
        }                         
    );
});