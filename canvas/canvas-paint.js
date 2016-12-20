module.exports = function() {

	const canvas = document.querySelector('#draw');
	const wrapper = document.querySelector('.wrapper');

	const inputColor = wrapper.querySelector('input[name="color"]');
	const inputWidth = wrapper.querySelector('input[name="width"]');

	const valueColor = wrapper.querySelector('input[name="color_range"]');
	const valueWidth = wrapper.querySelector('.value.width');

	const widthValue = wrapper.querySelector('.width')
	const ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth - (wrapper.clientWidth+16); 
	canvas.height = window.innerHeight; 

	ctx.strokeStyle = '#673AB7';
	ctx.lineWidth = 1;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';

	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;

	let hslVal = 0;
	let widthVal = 1;
	let direction = false;

	function draw(e) {
		if (!isDrawing) return;

		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.pageX, e.pageY);
		ctx.stroke();
		[lastX, lastY] = [e.pageX, e.pageY];

	}

	function colorChange(e) {
		ctx.strokeStyle = 'hsl('+e.target.value+',100%, 50%)';
	// valueColor.value = 'hsl('+e.target.value+',100%, 50%)';
}

function widthChange(e) {
	ctx.lineWidth = e.target.value;
	valueWidth.textContent = e.target.value;
}

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.pageX, e.pageY];
});


inputColor.addEventListener('input', colorChange);
inputWidth.addEventListener('input', widthChange);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);

};