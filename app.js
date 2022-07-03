let canvas = document.getElementById('cajaDibujo');
let lienzo = canvas.getContext('2d');

canvas.addEventListener('mousedown', dibujarConMouse);
canvas.addEventListener('mouseup', dibujarConMouse);

function dibujarConMouse(event) {
	let e = event.type;
	let x = event.offsetX;
	let y = event.offsetY;

	if (e == 'mousedown') {
		canvas.addEventListener('mousemove', dibujarConMouse);
	} else if (e == 'mouseup') {
		canvas.removeEventListener('mousemove', dibujarConMouse);
	}

	dibujarLinea('red', x - 1, y - 1, x + 1, y + 1);
}

function dibujarLinea(color, xi, yi, xf, yf) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}
