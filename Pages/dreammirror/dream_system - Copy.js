// JavaScript Document

var runID_Text = "";
var runID_Img = "";

// Who or what did you see?
$('input[name=DREAM_BEING]').change(function() {
    switch($(this).val()) {
        case 'Person':
                $("#D_INS_BEING").load("text.html #being_01");
                $("#DIMG_INS_BEING").load("images.html #beingImg_01");
        break;
        case 'Cat':
                $("#D_INS_BEING").load("text.html #being_02");
                $("#DIMG_INS_BEING").load("images.html #beingImg_01");
        break;
        case 'Dog':
                $("#D_INS_BEING").load("text.html #being_03");
                $("#DIMG_INS_BEING").load("images.html #beingImg_01");
        break;
        case 'Bird':
                $("#D_INS_BEING").load("text.html #being_04");
                $("#DIMG_INS_BEING").load("images.html #beingImg_01");
        break;
        case 'Lion':
                $("#D_INS_BEING").load("text.html #being_05");
                $("#DIMG_INS_BEING").load("images.html #beingImg_01");
        break;
        default:
                alert("grevious error\r\nwhat have you done"); 
                $("#DIMG_INS_BEING").load("images.html #errorImg");
    } 
});

// What objects do you remember finding?
$('input[name=DREAM_OBJ]').change(function() {
    switch($(this).val()) {
        case 'Flower':
                $("#D_INS_OBJ").load("text.html #obj_01");
        break;
        case 'Book':
                $("#D_INS_OBJ").load("text.html #obj_02");
        break;
        case 'Clock':
                $("#D_INS_OBJ").load("text.html #obj_03");
        break;
        case 'Lamp':
                $("#D_INS_OBJ").load("text.html #obj_04");
        break;
        case 'Chair':
                $("#D_INS_OBJ").load("text.html #obj_05");
        break;
        default:
                alert("grevious error\r\nwhat have you done"); 
    } 
});

// How did you feel?
$('input[name=DREAM_FEEL]').change(function() {
    switch($(this).val()) {
        case 'Happy':
                $("#D_INS_FEEL").load("text.html #feel_01");
        break;
        case 'Sad':
                $("#D_INS_FEEL").load("text.html #feel_02");
        break;
        case 'Angry':
                $("#D_INS_FEEL").load("text.html #feel_03");
        break;
        case 'Afraid':
                $("#D_INS_FEEL").load("text.html #feel_04");
        break;
        case 'Anxious':
                $("#D_INS_FEEL").load("text.html #feel_05");
        break;
        default:
                alert("grevious error\r\nwhat have you done"); 
    } 
});