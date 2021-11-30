// JavaScript Document

// Checkbox 01
$(document).ready(function() {
    // Select checkbox on change
    $('#checkbox_01').change(function(){
        // If checked
        if($(this).is(":checked")){
            $("#div_02a").show();
            $("#div_01a").hide();
        }
        // If unchecked
        else{
            $("#div_02a").hide();
            $("#div_01a").show();
        }
    });
});

// Checkbox 02
$(document).ready(function() {
    // Select checkbox on change
    $('#checkbox_02').change(function(){
        // If checked
        if($(this).is(":checked")){
            $("#div_02b").show();
            $("#div_01b").hide();
        }
        // If unchecked
        else{
            $("#div_02b").hide();
            $("#div_01b").show();
        }
    });
});

// Checkbox 03
$(document).ready(function() {
    // Select checkbox on change
    $('#checkbox_03a').change(function(){
        // If checked
        if($(this).is(":checked")){
            $("#div_01c").show();
        }
        // If unchecked
        else{
            $("#div_01c").hide();
        }
    });
    // Select checkbox on change
    $('#checkbox_03b').change(function(){
        // If checked
        if($(this).is(":checked")){
            $("#div_02c").show();
        }
        // If unchecked
        else{
            $("#div_02c").hide();
        }
    });
    // Select checkbox on change
    $('#checkbox_03c').change(function(){
        // If checked
        if($(this).is(":checked")){
            $("#div_03c").show();
        }
        // If unchecked
        else{
            $("#div_03c").hide();
        }
    });
});