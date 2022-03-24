// JavaScript Document

var F_Path = "img/_flourish/";
var numImg = 10;
var numDivide = Math.round(numImg/flourishAreas.length);

var F_Names = [];

for (let i = 1; i < (numImg+1); i++) {
    let entry = "f_";
    
    if(i < 10){
        entry = entry + "0" + i.toString();
    }
    else{
        entry = entry + i.toString();
    }
    
    F_Names.push(entry + ".gif");
}

var iteration = 0;

window.onload = function() {
    for (let x = 0; x < flourishAreas.length; x++) {
        for (let y = 0; y < numDivide; y++) {
            if(F_Names.length != 0 && F_Names[y] != undefined){
                let img = document.createElement('img');
                img.src = F_Path + F_Names[y];
                let idName = "IMG_" + iteration.toString();
                img.setAttribute('id',idName);
				
				let place = [getRandomInt(10,90),getRandomInt(10,90)];
				let scale = getRandomInt(25,75);

                document.getElementById(flourishAreas[x]).append(img);
                F_Names.splice(y,1);
				
                img.style.position = "absolute";
                img.style.top = place[0] + "%";
                img.style.left = place[1] + "%";
                img.style.transform = "scale(" + scale + "%," + scale + "%)";
                img.style.zIndex = "10";
				
                iteration++;
                console.log("Created image with ID " + img.getAttribute('id') + " and the source " + img.src);
            }
            else{
                break;
            }
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
