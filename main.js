// define tone range
// only start with c!
var firstTone = 28;
var lastTone = 52;
var only_whites = false;
var keyboard = [];


document.addEventListener("DOMContentLoaded", function () {
    // create keys
    var xposition = 1;
    var black_offset = 17.5;

    var whites = true;

    var whites_counter = 0;
    var blacks_counter = 0;

    var counter = 1;
    var bool = false;

    var Tasten = document.getElementById("Tasten");
    var NS = "http://www.w3.org/2000/svg";
    for (var i = firstTone; i <= lastTone; i++) {
        if (whites == true) {
            var rect = document.createElementNS(NS, "rect");

            rect.setAttribute("x", xposition + whites_counter * 24);
            rect.setAttribute("width", 23);
            rect.setAttribute("height", 149);
            rect.setAttribute("y", 1.5);
            rect.setAttribute("rx", 2.4);
            rect.setAttribute("ry", 4.8);
            rect.setAttribute("fill", "#fffff0");
            if (i == 40) {
                rect.setAttribute("stroke", "#DC143C");
            } else {
                rect.setAttribute("stroke", "black");
            }
            rect.id = String(i);

            Tasten.insertBefore(rect, Tasten.firstChild);
            keyboard.push(i);
            whites_counter++;
            whites = !whites;
        } else {
            if (counter < 3 && bool == false) {
                var rect = document.createElementNS(NS, "rect");

                rect.setAttribute("x", xposition + black_offset + blacks_counter * 24);
                rect.setAttribute("width", 12);
                rect.setAttribute("height", 99);
                rect.setAttribute("y", 1.5);
                rect.setAttribute("rx", 1);
                rect.setAttribute("ry", 1);
                rect.setAttribute("fill", "#111111");
                rect.setAttribute("stroke", "black");
                rect.id = String(i);

                Tasten.appendChild(rect);
                if (only_whites == false) {
                    keyboard.push(i);
                }
                counter++;
            } else if (counter < 4 && bool == true) {
                var rect = document.createElementNS(NS, "rect");

                rect.setAttribute("x", xposition + black_offset + blacks_counter * 24);
                rect.setAttribute("width", 12);
                rect.setAttribute("height", 99);
                rect.setAttribute("y", 1.5);
                rect.setAttribute("rx", 1);
                rect.setAttribute("ry", 1);
                rect.setAttribute("fill", "#111111");
                rect.setAttribute("stroke", "black");
                rect.id = String(i);

                Tasten.appendChild(rect);
                if (only_whites == false) {
                    keyboard.push(i);
                }
                counter++;
            } else {
                counter = 1;
                bool = !bool;
                i--;
            }
            blacks_counter++;
            whites = !whites;
        }
    }
    document.getElementById("Tasten").setAttribute("width", whites_counter * 24 + 1);

    // random tone

    // get random number
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };


    function getRandomTone() {
        var tone_index = getRandomNumber(0, keyboard.length);
        return keyboard[tone_index];
    }

    // get Random Tone
    var RandomTone = getRandomTone()
    // print demo
    //document.getElementById("demo").innerHTML = RandomTone;
    console.log(RandomTone);

    // load image
    var image = new Image();
    image.onload = function () {
        document.getElementById('id1').setAttribute('src', this.src);
    };
    image.src = "svg/Noten/" + String(RandomTone) + ".svg";


    document.getElementById("Tasten").addEventListener("click", function (e) {
        // e.target is the clicked element!
        if (e.target.id == String(RandomTone)) {
            document.getElementById(e.target.id).style.fill = "#228B22";
            setTimeout(function(){ location.reload(); }, 500);
        } else {
            document.getElementById(e.target.id).style.fill = "#DC143C";
            setTimeout(function(){ location.reload(); }, 5000);
        }
    })

});


