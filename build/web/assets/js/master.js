window.onload = ()=>{
	document.querySelectorAll('input[id^="txtNum"]').forEach((input)=>{
		input.addEventListener('input', (e)=>{
			limparCamposCasoVazio(e.target);
		}, false);
	});

	document.querySelector('#txtNumDecimal').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumBinario').value = decimalParaBinario(parseInt(e.target.value));
			document.querySelector('#txtNumHexadecimal').value = decimalParaHexadecimal(parseInt(e.target.value));
			document.querySelector('#txtNumOctal').value = decimalParaOctal(parseInt(e.target.value));
		}
	};
	document.querySelector('#txtNumHexadecimal').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumDecimal').value = hexadecimalParaDecimal((e.target.value));
			document.querySelector('#txtNumBinario').value = hexadecimalParaBinario((e.target.value));
			document.querySelector('#txtNumOctal').value = hexadecimalParaOctal((e.target.value));
		}
	};

	document.querySelector('#txtNumOctal').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumDecimal').value = octalParaDecimal((e.target.value));
			document.querySelector('#txtNumBinario').value = octalParaBinario((e.target.value));
			document.querySelector('#txtNumHexadecimal').value = octalParaHexadecimal((e.target.value));
		}
	};


	document.querySelector('#txtNumBinario').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumDecimal').value = binarioParaDecimal((e.target.value));
			document.querySelector('#txtNumOctal').value = binarioParaOctal((e.target.value));
			document.querySelector('#txtNumHexadecimal').value = binarioParaHexadecimal((e.target.value));
		}
	};

}

var arrayLetras=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const limparCamposCasoVazio = (input)=>{
	if(input.value==""){
		document.querySelectorAll('input[id^="txtNum"]').forEach((input)=>{
			input.value = "";
		});
	}
}

//ENTRADA DECIMAL
const decimalParaHexadecimal = (numero)=>{
	var arrayNumero=[], mod;

//teste
	while(numero!=0){
		mod = Math.trunc(numero%16);
		arrayNumero.push((mod > 9 ? arrayLetras[mod] : mod));

		numero = Math.trunc(numero/16);
	};

	var resultado = arrayNumero.reverse().join('');
	return resultado == '' ? 0 : resultado;
}

const decimalParaOctal = (numero)=>{
	var arrayNumero=[], mod;

	do{
		mod = Math.trunc(numero%8);
		arrayNumero.push(mod);

		numero = numero/8;
	}while(numero>8);

	mod = Math.trunc(numero%8);
	arrayNumero.push(mod);

	var resultado = arrayNumero.reverse().join('');
	return resultado == '' ? numero : resultado;
}

const decimalParaBinario = (numero)=>{
	var arrayNumero = [], mod;

	while(numero!=0){
		mod = numero%2;
		arrayNumero.push(mod);
		if(mod==1){
			numero = numero-1;
		}
		numero = numero/2;
	};

	var resultado = arrayNumero.reverse().join('');
	return resultado == '' ? 0 : resultado;
}

//ENTRADA HEXADECIMAL
const hexadecimalParaDecimal = (numero)=>{
	var numeroSeparado = numero.split('');
	var numeroExpoente= [];
	var indiceLetra;
	var numeroSomado = 0;

	numeroSeparado.forEach((numeroAtual, i)=>{

		if(isNaN(numeroAtual)){

			indiceLetra = arrayLetras.join('').indexOf(numeroAtual.toUpperCase());

			numeroSeparado[i] = indiceLetra;

		}else{

			numeroSeparado[i] = parseInt(numeroAtual);
		}
	});

	for(var i = numero.length-1;i>=0; i--){
		numeroExpoente.push(i);
	}

	for(var i = 0;i<numero.length;i++){
		numeroSomado += numeroSeparado[i]*16**numeroExpoente[i];
	}

	return numeroSomado;
	//teste
}

const hexadecimalParaOctal = (numero)=>{
	numero = hexadecimalParaBinario(numero);
	var numeroSeparado = separarCasas(numero, 3);

	numeroSeparado.forEach((numeroAtual, i)=>{
		numeroSeparado[i] = binarioParaOctal(numeroSeparado[i]);
	});
	return numeroSeparado.join('');
}

const hexadecimalParaBinario = (numero)=>{
	var numeroSeparado = numero.split('');
	var indiceLetra;

	numeroSeparado.forEach((numeroAtual, i)=>{
		if(isNaN(numeroAtual)){
			indiceLetra = arrayLetras.join('').indexOf(numeroAtual.toUpperCase());

			numeroSeparado[i] = decimalParaBinario(indiceLetra);
		}else{
			numeroSeparado[i] = decimalParaBinario(parseInt(numeroAtual));
		}
		if(i>0){
			numeroSeparado[i] = numeroSeparado[i].toString().padStart(4, '0');
		}
	});
	return numeroSeparado.join('');
}

//ENTRADA OCTAL
const octalParaDecimal = (numero)=>{
	var numeroSeparado = numero.split('');
	var numeroExpoente = [];
	var numeroSomado = 0;

	for(var i = numero.length-1;i>=0; i--){
		numeroExpoente.push(i);
	}

	for(var i = 0;i<numero.length;i++){
		numeroSomado += numeroSeparado[i]*8**numeroExpoente[i];
	}

	return numeroSomado;

}

const octalParaBinario = (numero)=>{
	var numeroSeparado = numero.split('');
	var indiceLetra;

	numeroSeparado.forEach((numeroAtual, i)=>{
		if(isNaN(numeroAtual)){
			indiceLetra = arrayLetras.join('').indexOf(numeroAtual);

			numeroSeparado[i] = decimalParaBinario(indiceLetra);
		}else{
			numeroSeparado[i] = decimalParaBinario(parseInt(numeroAtual));
		}
		if(i>0){
			numeroSeparado[i] = numeroSeparado[i].toString().padStart(3, '0');
		}
	});
	return numeroSeparado.join('');

}

const octalParaHexadecimal = (numero, nomeDessaFuncao)=>{
	var binario = octalParaBinario(numero);
	return binarioParaHexadecimal(binario);
}

//ENTRADA BINARIO
const binarioParaDecimal = (numero)=>{
	var numeroSeparado = numero.split('');
	var numeroSomado = 0;

	for(var i = 0;i<numero.length;i++){
		numeroSomado = numeroSomado*2+parseInt(numeroSeparado[i]);
	}

	return numeroSomado;
}

const binarioParaHexadecimal = (numero, nomeDessaFuncao)=>{
	var numeroSeparado = separarCasas(numero, 4);

	var indiceLetra;

	numeroSeparado.forEach((numeroAtual, i)=>{
		var numeroAtualConvertido = binarioParaDecimal(numeroAtual)
		numeroSeparado[i] = arrayLetras[numeroAtualConvertido];
	});
	return numeroSeparado.join('');
}
const binarioParaOctal = (numero)=>{
	var numeroSeparado = separarCasas(numero, 3);

	numeroSeparado.forEach((numeroAtual, i)=>{
		numeroSeparado[i] = binarioParaDecimal(numeroSeparado[i]);
	});
	return numeroSeparado.join('');
}

//exemplo: console.log(separarCasas('OJOAO1234VINI', 4));
//irá retornar ["O", "JOAO", "1234", "VINI"]
const separarCasas = (numero, casas)=>{
	var numeroSeparado = [];

	for(var i=0; i<numero.length; i++){
		numeroSeparado.push(numero.substring(numero.length-casas*(i+1),numero.length-casas*i));

		if(numero.length-casas*(i+1)<=0){
			break;
		}
	}
	numeroSeparado = numeroSeparado.reverse();

	return numeroSeparado;
}
