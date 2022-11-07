const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
	let qrValue = qrInput.value;
	if(!qrValue){
		alert('Insira uma URL primeiro.')
		return
	}
	generateBtn.innerText = "Gerando um QR CODE...";
	qrImg.src = `http://api.qrserver.com/v1/create-qr-code/?data=${qrValue}!&size=150x150`;
	qrImg.addEventListener('load', () => {
		generateBtn.innerText = "Gerar QR CODE";
		container.classList.add('active');
	});
});

qrInput.addEventListener('keyup', () => {
	if(!qrInput.value){
		container.classList.remove('active');
	};
});