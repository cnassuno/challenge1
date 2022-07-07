const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar () {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo1 = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i<matrizCodigo1.length; i++) {
        if(stringEncriptada.includes(matrizCodigo1[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo1[i][0], matrizCodigo1[i][1])
        }
    }
return stringEncriptada;
}

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo2 = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
    
    for(let i=0;i<matrizCodigo2.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo2[i][0])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo2[i][0], matrizCodigo2[i][1])
        }        
    }
    return stringDesencriptada;
}


