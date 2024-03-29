const calc = (size, material, option, promocode, result) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(option),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	let sum = 0;

	const calcFunc = () => {
		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
		if(sizeBlock.value==''|| materialBlock.value==''){
			resultBlock.textContent='Пожалуйста выберите размер и материал картины';
		}else if(promocodeBlock.value==='IWANTPOPART'){
			resultBlock.textContent=Math.round(sum*0.7);
		}else{
			resultBlock.textContent=sum;
		}
	};


	sizeBlock.addEventListener('change',calcFunc);
	materialBlock.addEventListener('change',calcFunc);
	optionsBlock.addEventListener('change',calcFunc);
	promocodeBlock.addEventListener('change',calcFunc);

};

export default calc;