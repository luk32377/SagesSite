
var canvas = document.getElementById("mcanvas");
var ctx = canvas.getContext("2d");

var ims = [];
for (var i = 0; i < 8; i++) {
	ims.push(new Image());
	ims[i].src = "Images/image" + i + ".jpeg";
}

var x = 0;

function Update() {
	x -= 4;
	if (x < -8000) {
		x = 1000;
	}
	ctx.clearRect(0, 0, 1000, 600);
	for (var i = 0; i < 8; i++) {
		ctx.drawImage(ims[i], 0, 0, 1158, 1544, x + (i * 1000) , 0, 1000, 600);
	}
}

setInterval(Update, 1000 / 30);
