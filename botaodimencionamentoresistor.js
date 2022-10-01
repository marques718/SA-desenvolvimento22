function dimencionarResistor() {
    var tensao = document.querySelector("#tensao").value
    var corrente = document.querySelector("#corrente").value

    var resultado = document.querySelector("#resultado")

    //concatenaçao de tensao, resistor e corrled e converter para number


    //aplicação da formula
    tensao = Number(tensao)
    corrente = Number(corrente)

    var formula = (tensao - 1.6) / corrente

    //mostrar
    resultado.textContent = `${formula}Ω`

}