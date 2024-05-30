// JavaScript Document

var dir_text = "dream_system/text.html",
    dir_img = "dream_system/images.html"

var DM_DIV = "#DMlist_CONTAIN",
    prefixes = ["place","being","obj","feel"],
    wheels = 4,
    amount = 10;

var place_curr = 0,
    being_curr = 0,
    obj_curr = 0,
    feel_curr = 0

var place = [
    // Places
    "Home",
    "School",
    "Office",
    "Hotel",
    "Hospital",
    "Fair",
    "Hallway",
    "Store",
    "Theater",
    "Jail"
]
    
var being = [
    // Beings
    "Person",
    "Cat",
    "Dog",
    "Bird",
    "Lion",
    "Deer",
    "Turtle",
    "Insect",
    "Mouse",
    "Ghost"
]
    
var obj = [
    // Objects
    "Flower",
    "Book",
    "Clock",
    "Lamp",
    "Chair",
    "Phone",
    "Food",
    "Drink",
    "Car",
    "Mirror"
]

var feel = [
    // Emotions
    "Happiness",
    "Sadness",
    "Anger",
    "Fear",
    "Anxiety"
]

for(let i = 0; i < prefixes.length; i++){
    for(let j = 0; j < amount; j++){
        switch(i){
            case(0):
                $('#dmlist_0' + (i+1)).append("<li id=\"place_c_" + (j+1) + "\">" + place[j] + "</li>");
                break;
            case(1):
                $('#dmlist_0' + (i+1)).append("<li id=\"being_c_" + (j+1) + "\">" + being[j] + "</li>");
                break;
            case(2):
                $('#dmlist_0' + (i+1)).append("<li id=\"obj_c_" + (j+1) + "\">" + obj[j] + "</li>");
                break;
            case(3):
                if(j < 5){
                    $('#dmlist_0' + (i+1)).append("<li id=\"feel_c_" + (j+1) + "\">" + feel[j] + "</li>");
                }
                break;
        }
    }
}

for(let i = 0; i < 4; i++){
    if(i == 3){
        createList('dmlist_0' + (i+1),0.15,-209);
    }
    else{
        createList('dmlist_0' + (i+1),0.35,-245);
    }
}

function createList(element,type,start){
    var radius = '12em', //distance from center
        $first = $("#" + element + ' li').first(),
        $elements = $("#" + element + ' li:not(:first-child)'),
        numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
        slice = 360 * type / numberOfElements,
        distance = 40,
        offset = 70,
        isOpen = false;

    $first.click(function(){
        if($(window).width() <= 600){
            if(isOpen == true){
                $elements.each(function() {
                    var $self = $(this),
                        $bg = $(".shield");

                    $self.css({
                        'top': 0 + 'px',
                        'opacity': '0',
                        'z-index': '100'
                    });
                    $first.css({
                        'z-index': '200'
                    });
                    $bg.css({
                        'opacity': '0',
                        'pointer-events': 'none'
                    });
                    $('body').css({
                        'height': '100%',
                        'overflow': 'visible'
                    });
                });
                isOpen = false;
            }
            else{
                $elements.each(function(i) {
                    var $self = $(this),
                        $bg = $(".shield"),
                        move = (distance*i);

                    $self.css({
                        'top': offset + move + 'px',
                        'opacity': '1',
                        'z-index': '202'
                    });
                    $first.css({
                        'z-index': '202'
                    });
                    $bg.css({
                        'opacity': '0.75',
                        'pointer-events': 'auto'
                    });
                    $('body').css({
                        'height': 'auto'
                        //'overflow': 'hidden'
                    });
                });
                isOpen = true;
            }
        }
        else{
            if(isOpen == true){
                $elements.each(function() {
                    var $self = $(this),
                        $bg = $(".shield");

                    $self.css({
                        'transform': 'rotate(0deg) translate(0) rotate(0deg)',
                        'opacity': '0',
                        'z-index': '100'
                    });
                    $first.css({
                        'z-index': '200'
                    });
                    $bg.css({
                        'opacity': '0',
                        'pointer-events': 'none'
                    });
                    $('body').css({
                        'height': '100%',
                        'overflow': 'visible'
                    });
                });
                isOpen = false;
            }
            else{
                $elements.each(function(i) {
                    var $self = $(this),
                        $bg = $(".shield"),
                        rotate = slice * i + start,
                        rotateReverse = rotate * -1;

                    $self.css({
                        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(180deg)',
                        'opacity': '1',
                        'z-index': '202'
                    });
                    $first.css({
                        'z-index': '202'
                    });
                    $bg.css({
                        'opacity': '0.75',
                        'pointer-events': 'auto'
                    });
                    $('body').css({
                        'height': 'auto'
                        //'overflow': 'hidden'
                    });
                });
                isOpen = true;
            }
        }
    });
    
    $(".shield").click(function(){
        if(isOpen == true){
            $first.click();
        }
    });
    
    $($elements).click(function(event) {
        $first.click();
        for(let k = 0; k < amount; k++){
            if($(event.target).is('#place_c_' + (k+1))){
                place_curr = (k+1);
                $(event.target).css({
                    'color': '#fff'
                });
                if($(window).width() > 600){
                    $(event.target).css({
                        'list-style': 'disc'
                    });
                }
                break;
            }
            else if($(event.target).is('#being_c_' + (k+1))){
                being_curr = (k+1);
                $(event.target).css({
                    'color': '#fff'
                });
                if($(window).width() > 600){
                    $(event.target).css({
                        'list-style': 'disc'
                    });
                }
                break;
            }
            else if($(event.target).is('#obj_c_' + (k+1))){
                obj_curr = (k+1);
                $(event.target).css({
                    'color': '#fff'
                });
                if($(window).width() > 600){
                    $(event.target).css({
                        'list-style': 'disc'
                    });
                }
                break;
            }
            else if($(event.target).is('#feel_c_' + (k+1))){
                feel_curr = (k+1);
                $(event.target).css({
                    'color': '#fff'
                });
                if($(window).width() > 600){
                    $(event.target).css({
                        'list-style': 'disc'
                    });
                }
                break;
            }
        }
        updateContent();
        //console.log([place_curr,being_curr,obj_curr,feel_curr]);
    });
}

function updateContent(){
    if(place_curr > 0){
        $("#DM_IMG_PLACE").attr("src", "img/place/p_" + place_curr + ".gif");
        $("#DM_IMG_PLACE").on("error",function(){
            $(this).attr("src","img/place/error.gif");
			place_curr = -1;
			
        });
        $("#DM_DESC_PLACE").load(dir_text + " #place_" + place_curr, function(status){
            // Failsafe
            if (status == "error") {
                $("#DM_DESC_PLACE").load(dir_text + " #error_heading");
            }
        });
    }
    if(being_curr > 0){
        $("#DM_IMG_BEING").load(dir_img + " #beingImg_" + being_curr, function(status){
            // Failsafe
            if (status == "error") {
                $("#DM_IMG_BEING").load(dir_img + " #errorimg");
            }
        });
        $("#DM_DESC_BEING").load(dir_text + " #being_" + being_curr, function(status){
            // Failsafe
            if (status == "error") {
                $("#DM_DESC_BEING").load(dir_text + " #error_heading");
            }
        });
    }
    if(obj_curr > 0){
        $("#DM_IMG_OBJ").load(dir_img + " #objImg_" + obj_curr, function(status){
            // Failsafe
            if (status == "error") {
                $("#DM_IMG_OBJ").load(dir_img + " #errorimg");
            }
        });
        $("#DM_DESC_OBJ").load(dir_text + " #obj_" + obj_curr, function(status){
            // Failsafe
            if (status == "error") {
                $("#DM_DESC_OBJ").load(dir_text + " #error_heading");
            }
        });
    }
    if(feel_curr > 0){
        $("#DM_IMG_FEEL").load(dir_img + " #feelImg_" + feel_curr, function(status){
            // Failsafe
            if (status == "error") {
                $("#DM_IMG_FEEL").load(dir_img + " #errorimg");
            }
        });
        $("#DM_DESC_FEEL").load(dir_text + " #feel_" + feel_curr, function(status){
            // Failsafe
            if (status == "error") {
                $("#DM_DESC_FEEL").load(dir_text + " #error_heading");
            }
        });
    }
    
    for(let k = 0; k < amount; k++){
        if(place_curr != (k+1)){
            $('#place_c_' + (k+1)).css({
                'color': '#888'
            });
            if($(window).width() > 600){
                $('#place_c_' + (k+1)).css({
                    'list-style': 'circle'
                });
            }
        }
        if(being_curr != (k+1)){
            $('#being_c_' + (k+1)).css({
                'color': '#888'
            });
            if($(window).width() > 600){
                $('#being_c_' + (k+1)).css({
                    'list-style': 'circle'
                });
            }
        }
        if(obj_curr != (k+1)){
            $('#obj_c_' + (k+1)).css({
                'color': '#888'
            });
            if($(window).width() > 600){
                $('#obj_c_' + (k+1)).css({
                    'list-style': 'circle'
                });
            }
        }
        if(feel_curr != (k+1)){
            $('#feel_c_' + (k+1)).css({
                'color': '#888'
            });
            if($(window).width() > 600){
                $('#feel_c_' + (k+1)).css({
                    'list-style': 'circle'
                });
            }
        }
    }
	
	$("#DM_IMG_BEING").removeClass();
	$("#DM_IMG_OBJ").removeClass();
	$("#DM_IMG_FEEL").removeClass();
	
	$("#DM_IMG_BEING").addClass("being_" + Math.max(place_curr,0));
	$("#DM_IMG_OBJ").addClass("obj_" + Math.max(place_curr,0));
	$("#DM_IMG_FEEL").addClass("feel_" + Math.max(place_curr,0));
    colorSwitch();
}

function colorSwitch(){
    $('body,#DM_IMG_BEING,#DM_IMG_OBJ,#DM_IMG_FEEL').css({
        'filter': 'sepia(0.25) hue-rotate(' + getRandomInt(0,360) + 'deg) saturate(' + getRandomInt(200,300) + '%)'
    });
}

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}