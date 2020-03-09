const canv = document.getElementById('canv');
const ctx = canv.getContext('2d');

const grass = document.querySelector('#I1');
const field = document.querySelector('#I2');
const field1 = document.querySelector('#I3');
const field2 = document.querySelector('#I4');

var width = canv.width;
var height = canv.height;

var fieldX = 50;

function clear() {
    for (var i = 0; i <= (width - 50); i += 50) {

        for (var j = 0; j <= (height - 50); j += 50) {
            ctx.drawImage(grass, i, j, 50, 50)
        }
    }
}

function drawField(img, x, y, w, h) {
    for (var i = x; i < ((fieldX + w)); i += 50) {

        for (var j = y; j <= h - 50; j += 50) {
            ctx.drawImage(img, i, j, 50, 50)
        }
    }
}

function fieldSize(size) {
    if (size == 1) {

        if (fieldX + 200 <= width - 50) {
            drawField(field, fieldX, 50, 200, 450);
            fieldX += 250;
        } else {
            alert("Nie można zbudować poza mapą!");
        }

    } else if (size == 2) {

        if (fieldX + 300 <= width - 50) {
            drawField(field, fieldX, 50, 300, 450);
            fieldX += 350;
        } else {
            alert("Nie można zbudować poza mapą!");
        }

    }
}
