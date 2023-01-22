
function demanaNumeros() {
                /* demana el 1er numero */
    const numero1 = prompt('Introdueix el primer número entre 1 i 50');
                /* comprova que sigui un numero entre 1 i 50 */
    let nomesNums = /^[0-9]+$/;
    if ((numero1.match(nomesNums)) && (numero1 > 0) && (numero1 < 51)){
                /* demana el 2on numero */
        const numero2 = prompt('Introdueix el segon número entre 1 i 50');
                /* comprova que sigui un numero entre 1 i 50 */
            if ((numero2.match(nomesNums)) && (numero2 > 0) && (numero2 < 51)){
                    /* aqui comprovem que els 2 números són el mateix */
                if (numero1==numero2) {
                    alert ('Els nùmeros escollits son el mateix: ' + numero1)
                    numsIguals(numero1)
                } else {
                    alert ('Els nùmeros escollits son: ' + numero1 + ' i ' + numero2)
                    tipusNumero(numero1,numero2)
                }
            } else {
                alert ("No és numèric o és més petit que 1 o més gran que 50");
                demanaNumeros();
            }
     } else {
       alert ("No és numèric o és més petit que 1 o més gran que 50");
       demanaNumeros();
    }
}

    /* aqui sumem els nùmeros */
function suma(num1,num2){
    let sum = num1 + num2;
    return sum;
}

    /* funció booleana per saber si num és primer o no exceptuant 1 que no és primer */
function numPrimer(num) {
    switch (num) {
        case '1':
            return false;
            break;
        default:
            for(let factor = 2; factor < num; factor++){
                if(num % factor === 0)
                return false
                }
                return true
    }
}

    /* aqui mirem si els números son parells o imparells */
function numParell(numPar) {
    if (numPar%2==0) {
        return true
        }
        return false
}


function tipusNumero(numero1,numero2) {
    var textResultat = ""
    let numPrim1, numPrim2, numParell1, numParell2
    var llistNums = [];
    let rangNumeros = [];

        /* aqui afegim la suma dels nùmeros a la variable */
    let sumatori = suma(+numero1,+numero2)

        /* aqui comprovem que els nùmeros 1 i 2 son o no primers i afegim el text corresponent */
    numPrim1 = numPrimer(numero1) ? `${numero1} és primer` : `${numero1} no és primer`
    numPrim2 = numPrimer(numero2) ? `${numero2} és primer` : `${numero2} no és primer`
        /* aqui comprovem que els nùmeros 1 i 2 son o no parells i afegim el text corresponent */
    numParell1 = numParell(numero1) ? `${numero1} és parell` : `${numero1} és imparell`
    numParell2 = numParell(numero2) ? `${numero2} és parell` : `${numero2} és imparell`
        /* aqui afegim el rang entre els 2 números i afegim el text corresponent */

        /* aqui omplim array amb el rang de numeros segons si 1 < 2 o no */
    if (+numero1 < +numero2) {
        for(let index = +numero1; index <= +numero2; index++) {
            llistNums.push(index);
        }
                /* aqui omplim array de numeros parells entre 1 i 2 */
        for (let indexp = 0; indexp < llistNums.length; indexp++) {
            let numerop = llistNums[indexp];
            if (numerop % 2 === 0) {
                rangNumeros.push(numerop); 
            }
        }

    } else {
        for(var index = +numero2; index <= +numero1; index++) {
            llistNums.push(index);
        }
                /* aqui omplim array de numeros imparells a l'inversa entre 2 i 1 */
        for (let indexi = 0; indexi < llistNums.length; indexi++) {
            let numeroi = llistNums[indexi];
            if (numeroi % 2 === 1) {
                rangNumeros.push(numeroi);
            }
        }
        rangNumeros.reverse();
    }


            /* aqui afegim el text del resultat per presenta-ho en pantalla */
    if(textResultat === ""){
        textResultat += `La suma dels 2 nùmeros és: ${sumatori},
        ${numPrim1},
        ${numPrim2},
        ${numParell1},
        ${numParell2}
        el rang és: ${rangNumeros}`
        alert(textResultat)
        }
        return textResultat
}
        
        /* funcio per si els 2 números son el mateix, i omplir textResultat*/
function numsIguals(numero1) {
    var textResultat = ""
    let numPrim1
    numPrim1 = numPrimer(numero1) ? `${numero1} és primer` : `${numero1} no és primer`
    numParell1 = numParell(numero1) ? `${numero1} és parell` : `${numero1} és imparell`
    if(textResultat === ""){
        textResultat += `El número ${numPrim1},
        ${numParell1},
        i el rang és: ${numero1}`
        alert(textResultat)
        }
        return textResultat
}




