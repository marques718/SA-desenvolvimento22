

function calcularP() {
    var res1 = document.getElementById("res1")
    var res2 = document.getElementById("res2")

    var resultado1 = document.getElementById("resultado1");
    res1 = Number(res1.value);
    res2 = Number(res2.value);


    let soma = (res1 * res2)/(res1 + res2);
    console.log(soma)
    resultado1.innerText = `Resultado é ${soma.toFixed(2)}`
}
function calcularS() {
    var res3 = document.getElementById("res3")
    var res4 = document.getElementById("res4")

    var resultado2 = document.getElementById("resultado2");
    let camp3 = Number(res3.value);
    let camp4 = Number(res4.value);


    let soma = camp3 + camp4;
    console.log(soma)
    resultado2.innerText = `Resultado é ${soma}`
}