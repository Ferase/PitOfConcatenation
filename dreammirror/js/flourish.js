// JavaScript Document

var F_Path = "img/_flourish/";
var numImg = 20; // Adjust as new flourish images are added

var F_NamesUn = [];

for (let i = 1; i < (numImg+1); i++) {
    let entry = "f_";
    
    if(i < 10){
        entry = entry + "0" + i.toString();
    }
    else{
        entry = entry + i.toString();
    }
    
    F_NamesUn.push(entry + ".gif");
}

var iteration = 0;

for (let x = 0; x < flourishAreas.length; x++) {
    let F_Names = shuffle(F_NamesUn);
    let countY = -numImg;
    for (let y = 0; y < F_Names.length; y++) {
        if(F_Names.length != 0 && F_Names[y] != undefined){
            let img = document.createElement('img');
            img.src = F_Path + F_Names[y];
            let idName = "IMG_" + iteration.toString();
            img.setAttribute('id',idName);

            let place = [getRandomInt(35,65),countY += (100/numImg)];
            let scale = getRandomInt(25,75);
            let rotate = getRandomInt(0,359);
            let alpha = Math.random(0.25,1.0);

            document.getElementById(flourishAreas[x]).append(img);

            img.style.position = "absolute";
            img.style.bottom = place[1]+img.clientHeight + "%";
            if(x == 0){
                img.style.left = place[0] - 50 + "%";
            }
            else if(x == 1){
                img.style.right = place[0] - 50 + "%";
            }
            img.style.transform = "scale(" + scale + "%) rotate(" + rotate + "deg)";
            img.style.opacity = alpha;
            img.style.zIndex = "8";

            iteration++;
        }
        else{
            break;
        }
    }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
