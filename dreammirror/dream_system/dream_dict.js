// JavaScript Document

var dictionaryArea = "#DICT_AREA"

$(document).ready(function() {
    $(dictionaryArea).load("dream_system/text.html #DICT", function(status){
        // Failsafe
        if (status == "error") {
            $(dictionaryArea).load("dream_system/text.html #error");
        }
    });
});