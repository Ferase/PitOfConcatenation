// JavaScript Document

var pathText = "text.html"
var pathImg = "images.html"

var activeSel_Heading = "";
var activeSel_Text = "";
var activeSel_Img = "";
var runID_Heading = "";
var runID_Text = "";
var runID_Img = "";

// Who or what did you see?
$('input[name=DREAM_BEING]').change(function() {
    activeSel_Heading = "#DH_INS_BEING";
    activeSel_Text = "#D_INS_BEING";
    activeSel_Img = "#DIMG_INS_BEING";
    runID_Heading = " #heading_being";
    switch($(this).val()) {
        case 'Person':
                runID_Text = " #being_01";
                runID_Img = " #beingImg_01";
                setContent();
        break;
        case 'Cat':
                runID_Text = " #being_02";
                runID_Img = " #beingImg_02";
                setContent();
        break;
        case 'Dog':
                runID_Text = " #being_03";
                runID_Img = " #beingImg_03";
                setContent();
        break;
        case 'Bird':
                runID_Text = " #being_04";
                runID_Img = " #beingImg_04";
                setContent();
        break;
        case 'Lion':
                runID_Text = " #being_05";
                runID_Img = " #beingImg_05";
                setContent();
        break;
        default:
                alert("grevious error\r\nwhat have you done"); 
    } 
});

// What objects do you remember finding?
$('input[name=DREAM_OBJ]').change(function() {
    activeSel_Heading = "#DH_INS_OBJ";
    activeSel_Text = "#D_INS_OBJ";
    activeSel_Img = "#DIMG_INS_OBJ";
    runID_Heading = " #heading_obj";
    switch($(this).val()) {
        case 'Flower':
                runID_Text = " #obj_01";
                runID_Img = " #objImg_01";
                setContent();
        break;
        case 'Book':
                runID_Text = " #obj_02";
                runID_Img = " #objImg_02";
                setContent();
        break;
        case 'Clock':
                runID_Text = " #obj_03";
                runID_Img = " #objImg_03";
                setContent();
        break;
        case 'Lamp':
                runID_Text = " #obj_04";
                runID_Img = " #objImg_04";
                setContent();
        break;
        case 'Chair':
                runID_Text = " #obj_05";
                runID_Img = " #objImg_05";
                setContent();
        break;
        default:
                alert("grevious error\r\nwhat have you done"); 
    } 
});

// How did you feel?
$('input[name=DREAM_FEEL]').change(function() {
    activeSel_Heading = "#DH_INS_FEEL";
    activeSel_Text = "#D_INS_FEEL";
    activeSel_Img = "#DIMG_INS_FEEL";
    runID_Heading = " #heading_feel";
    switch($(this).val()) {
        case 'Happy':
                runID_Text = " #feel_01";
                runID_Img = " #feelImg_01";
                setContent();
        break;
        case 'Sad':
                runID_Text = " #feel_02";
                runID_Img = " #feelImg_02";
                setContent();
        break;
        case 'Angry':
                runID_Text = " #feel_03";
                runID_Img = " #feelImg_03";
                setContent();
        break;
        case 'Afraid':
                runID_Text = " #feel_04";
                runID_Img = " #feelImg_04";
                setContent();
        break;
        case 'Anxious':
                runID_Text = " #feel_05";
                runID_Img = " #feelImg_05";
                setContent();
        break;
        default:
                alert("grevious error\r\nwhat have you done"); 
    } 
});

function setContent(){
    $(activeSel_Heading).load(pathText + runID_Heading, function(status){
        // Failsafe
        if (status == "error") {
            $(activeSel_Heading).load("text.html #error_heading");
        }
    });
    $(activeSel_Text).load(pathText + runID_Text, function(status){
        // Failsafe
        if (status == "error") {
            $(activeSel_Text).load("text.html #error");
        }
    });
    $(activeSel_Img).load(pathImg + runID_Img, function(status){
        // Failsafe
        if (status == "error") {
            $(activeSel_Img).load("images.html #errorImg");
        }
    });
}

