var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//hat
ctx.moveTo(75, 40);
ctx.lineTo(185, 40);
ctx.moveTo(100, 40);
ctx.lineTo(100, 25);
ctx.lineTo(160, 25);
ctx.lineTo(160, 40);

//פאות

ctx.moveTo(95, 40);
ctx.lineTo(95, 85);
ctx.moveTo(165, 40);
ctx.lineTo(165, 85);

//left eye
ctx.moveTo(100, 50);
ctx.lineTo(100, 70);
ctx.lineTo(120, 70);
ctx.lineTo(120, 50);
ctx.moveTo(110, 60);
ctx.lineTo(112, 60);


//rictxt eye
ctx.moveTo(140, 50);
ctx.lineTo(140, 70);
ctx.lineTo(160, 70);
ctx.lineTo(160, 50);
ctx.moveTo(150, 60);
ctx.lineTo(152, 60);
ctx.stroke();
//nose
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "green";
ctx.moveTo(130, 65);
ctx.lineTo(130, 80);
ctx.stroke();
//happy mouse
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(110, 90);
ctx.lineTo(110, 95);
ctx.lineTo(150, 95);
ctx.lineTo(150, 90);

ctx.stroke();

function chasid() {
    var buttonValue = document.getElementById("lol");
    buttonValue.value = "swith to litvak";
    //hat
    ctx.moveTo(75, 40);
    ctx.lineTo(185, 40);
    ctx.moveTo(100, 40);
    ctx.lineTo(100, 25);
    ctx.lineTo(160, 25);
    ctx.lineTo(160, 40);

    //פאות
    ctx.moveTo(95, 40);
    ctx.lineTo(95, 85);
    ctx.moveTo(165, 40);
    ctx.lineTo(165, 85);

    //left eye
    ctx.moveTo(100, 50);
    ctx.lineTo(100, 70);
    ctx.lineTo(120, 70);
    ctx.lineTo(120, 50);
    ctx.moveTo(110, 60);
    ctx.lineTo(112, 60);


    //rictxt eye
    ctx.moveTo(140, 50);
    ctx.lineTo(140, 70);
    ctx.lineTo(160, 70);
    ctx.lineTo(160, 50);
    ctx.moveTo(150, 60);
    ctx.lineTo(152, 60);

    //nose
    ctx.moveTo(130, 65);
    ctx.lineTo(130, 80);

    //happy mouse
    ctx.moveTo(110, 90);
    ctx.lineTo(110, 95);
    ctx.lineTo(150, 95);
    ctx.lineTo(150, 90);

    ctx.stroke();
};


function litwak() {
    var buttonValue = document.getElementById("lol");
    buttonValue.value = "swith to casid";
    //hat
    ctx.moveTo(75, 40);
    ctx.lineTo(185, 40);
    ctx.moveTo(100, 40);
    ctx.lineTo(100, 5);
    ctx.lineTo(160, 5);
    ctx.lineTo(160, 40);

    //פאות
    ctx.moveTo(95, 40);
    ctx.lineTo(95, 45);
    ctx.moveTo(165, 40);
    ctx.lineTo(165, 45);

    //left eye
    ctx.moveTo(100, 70);
    ctx.lineTo(100, 50);
    ctx.lineTo(120, 50);
    ctx.lineTo(120, 70);
    ctx.moveTo(110, 60);
    ctx.lineTo(112, 60);


    //rictxt eye
    ctx.moveTo(140, 70);
    ctx.lineTo(140, 50);
    ctx.lineTo(160, 50);
    ctx.lineTo(160, 70);
    ctx.moveTo(150, 60);
    ctx.lineTo(152, 60);

    //nose
    ctx.moveTo(130, 65);
    ctx.lineTo(130, 80);

    //happy mouse
    ctx.moveTo(110, 100);
    ctx.lineTo(110, 95);
    ctx.lineTo(150, 95);
    ctx.lineTo(150, 100);

    ctx.stroke();
};


function swithFace() {
    var valueOfButton = document.getElementById("lol").value;
    if (valueOfButton == "swith to litvak") {
        ctx.clearRect(0, 0, c.width, c.height);
        litwak();
    } else if (valueOfButton == "swith to casid") {
        ctx.clearRect(0, 0, c.width, c.height);
        chasid();
    }
};
