// Cotações em reais
let cotacaoDolar = 5.54;
let cotacaoEuro = 6.39;
let cotacaoLibra = 7.52;
let cotacaoBitcoin = 315745.27;

// Função da chamada
function Converter() {
    let valorElemento = document.getElementById("valor").value
    valorElemento = parseFloat(valorElemento)

    // Verificações
    if (isNaN(valorElemento)) {
        // Esvazia o campo de resultado
        let elementoValorConvertido = document.getElementById("valorConvertido")
        // O que vai ser inserido no local 
        elementoValorConvertido.innerHTML = ""
    } else {
        // Chamar a função de conversão da moeda correspondente 
        // ConverterReal() --> Converte o valor em real para a outra moeda
        if (document.getElementById("real_in").checked) {
            ConverterReal(valorElemento)
        }
        if (document.getElementById("dolar_in").checked) {
            ConverterDolar(valorElemento)
        }
        if (document.getElementById("euro_in").checked) {
            ConverterEuro(valorElemento)
        }
        if (document.getElementById("libra_in").checked) {
            ConverterLibra(valorElemento)
        }
        if (document.getElementById("btc_in").checked) {
            ConverterBTC(valorElemento)
        }
    }
}

// Função converter R$ para a moeda desejada
function ConverterReal(valorElemento) {
    if (document.getElementById("real_out").checked) {
        // Converter o valor em real para real 
        let valorReal = valorElemento
        console.log("R$ " + valorElemento + " = R$ " + valorReal)
        valorConvertido = `R$${valorElemento.toFixed(2)} = R$${valorReal.toFixed(2)}`
    }

    if (document.getElementById("dolar_out").checked) {
        // Converter o valor em real para dolar
        let valorDolar = valorElemento * (1 / cotacaoDolar)
        console.log("R$ " + valorElemento + " = U$ " + valorDolar)
        valorConvertido = `R$${valorElemento.toFixed(2)} = U$${valorDolar.toFixed(2)}`
    }

    if (document.getElementById("euro_out").checked) {
        // Converter o valor em real para euro 
        let valorEuro = valorElemento * (1 / cotacaoEuro)
        console.log("R$ " + valorElemento + " = € " + valorEuro)
        valorConvertido = `R$${valorElemento.toFixed(2)} = €${valorEuro.toFixed(2)}`
    }

    if (document.getElementById("libra_out").checked) {
        // Converter o valor em real para libra 
        let valorLibra = valorElemento * (1 / cotacaoLibra)
        console.log("R$ " + valorElemento + " = £ " + valorLibra)
        valorConvertido = `R$${valorElemento.toFixed(2)} = £${valorLibra.toFixed(2)}`
    }

    if (document.getElementById("btc_out").checked) {
        // Converter o valor em real para bitcoin 
        let valorBTC = valorElemento * (1 / cotacaoBitcoin)
        console.log("R$ " + valorElemento + " = BTC " + valorBTC)
        valorConvertido = `R$${valorElemento.toFixed(2)} = BTC ${valorBTC.toFixed(7)}`
    }

    // Jogar o número de volta para o HTML e imprimir na tela
    // Indica o local do HTML que vai aparecer o texto (id="valorConvertido")
    let elementoValorConvertido = document.getElementById("valorConvertido");
    // Conteúdo que será colocado no local designado
    elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter U$ para a moeda desejada
function ConverterDolar(valorElemento) {
    if (document.getElementById("real_out").checked) {
        // Converter o valor em dolar para real 
        let valorReal = valorElemento * cotacaoDolar
        console.log("U$ " + valorElemento + " = R$ " + valorReal)
        valorConvertido = `U$${valorElemento.toFixed(2)} = R$${valorReal.toFixed(2)}`
    }

    if (document.getElementById("dolar_out").checked) {
        // Converter o valor em dolar para dolar
        let valorDolar = valorElemento
        console.log("U$ " + valorElemento + " = U$ " + valorDolar)
        valorConvertido = `U$${valorElemento.toFixed(2)} = U$${valorDolar.toFixed(2)}`
    }

    if (document.getElementById("euro_out").checked) {
        // Converter o valor em dolar para euro 
        let valorEuro = valorElemento * (cotacaoDolar / cotacaoEuro)
        console.log("U$ " + valorElemento + " = € " + valorEuro)
        valorConvertido = `U$${valorElemento.toFixed(2)} = €${valorEuro.toFixed(2)}`
    }

    if (document.getElementById("libra_out").checked) {
        // Converter o valor em dolar para libra 
        let valorLibra = valorElemento * (cotacaoDolar / cotacaoLibra)
        console.log("U$ " + valorElemento + " = £ " + valorLibra)
        valorConvertido = `U$${valorElemento.toFixed(2)} = £${valorLibra.toFixed(2)}`
    }

    if (document.getElementById("btc_out").checked) {
        // Converter o valor em dolar para bitcoin
        let valorBTC = valorElemento * (cotacaoDolar / cotacaoBitcoin)
        console.log("U$ " + valorElemento + " = BTC " + valorBTC)
        valorConvertido = `U$${valorElemento.toFixed(2)} = BTC ${valorBTC.toFixed(7)}`
    }

    // Jogar o número de volta para o HTML e imprimir na tela
    // Indica o local do HTML que vai aparecer o texto (id="valorConvertido")
    let elementoValorConvertido = document.getElementById("valorConvertido");
    // Conteúdo que será colocado no local designado
    elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter Euro para a moeda desejada
function ConverterEuro(valorElemento) {
    if (document.getElementById("real_out").checked) {
        // Converter o valor em euro para real 
        let valorReal = valorElemento * cotacaoEuro
        console.log("€ " + valorElemento + " = R$ " + valorReal)
        valorConvertido = `€${valorElemento.toFixed(2)} = R$${valorReal.toFixed(2)}`
    }

    if (document.getElementById("dolar_out").checked) {
        // Converter o valor em euro para dolar
        let valorDolar = valorElemento * (cotacaoEuro / cotacaoDolar)
        console.log("€ " + valorElemento + " = U$ " + valorDolar)
        valorConvertido = `€${valorElemento.toFixed(2)} = U$${valorDolar.toFixed(2)}`
    }

    if (document.getElementById("euro_out").checked) {
        // Converter o valor em euro para euro 
        let valorEuro = valorElemento
        console.log("€ " + valorElemento + " = € " + valorEuro)
        valorConvertido = `€${valorElemento.toFixed(2)} = €${valorEuro.toFixed(2)}`
    }

    if (document.getElementById("libra_out").checked) {
        // Converter o valor em euro para libra 
        let valorLibra = valorElemento * (cotacaoEuro / cotacaoLibra)
        console.log("€ " + valorElemento + " = £ " + valorLibra)
        valorConvertido = `€${valorElemento.toFixed(2)} = £${valorLibra.toFixed(2)}`
    }

    if (document.getElementById("btc_out").checked) {
        // Converter o valor em euro para bitcoin
        let valorBTC = valorElemento * (cotacaoEuro / cotacaoBitcoin)
        console.log("€ " + valorElemento + " = BTC " + valorBTC)
        valorConvertido = `€${valorElemento.toFixed(2)} = BTC ${valorBTC.toFixed(7)}`
    }

    // Jogar o número de volta para o HTML e imprimir na tela
    // Indica o local do HTML que vai aparecer o texto (id="valorConvertido")
    let elementoValorConvertido = document.getElementById("valorConvertido");
    // Conteúdo que será colocado no local designado
    elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter Libra para a moeda desejada
function ConverterLibra(valorElemento) {
    if (document.getElementById("real_out").checked) {
        // Converter o valor em libra para real 
        let valorReal = valorElemento * cotacaoEuro
        console.log("£ " + valorElemento + " = R$ " + valorReal)
        valorConvertido = `£${valorElemento.toFixed(2)} = R$${valorReal.toFixed(2)}`
    }

    if (document.getElementById("dolar_out").checked) {
        // Converter o valor em libra para dolar
        let valorDolar = valorElemento * (cotacaoLibra / cotacaoDolar)
        console.log("£ " + valorElemento + " = U$ " + valorDolar)
        valorConvertido = `£${valorElemento.toFixed(2)} = U$${valorDolar.toFixed(2)}`
    }

    if (document.getElementById("euro_out").checked) {
        // Converter o valor em libra para euro 
        let valorEuro = valorElemento * (cotacaoLibra / cotacaoEuro)
        console.log("£ " + valorElemento + " = € " + valorEuro)
        valorConvertido = `£${valorElemento.toFixed(2)} = €${valorEuro.toFixed(2)}`
    }

    if (document.getElementById("libra_out").checked) {
        // Converter o valor em libra para libra 
        let valorLibra = valorElemento
        console.log("£ " + valorElemento + " = £ " + valorLibra)
        valorConvertido = `£${valorElemento.toFixed(2)} = £${valorLibra.toFixed(2)}`
    }

    if (document.getElementById("btc_out").checked) {
        // Converter o valor em libra para bitcoin
        let valorBTC = valorElemento * (cotacaoLibra / cotacaoBitcoin)
        console.log("£ " + valorElemento + " = BTC " + valorBTC)
        valorConvertido = `£${valorElemento.toFixed(2)} = BTC ${valorBTC.toFixed(7)}`
    }

    // Jogar o número de volta para o HTML e imprimir na tela
    // Indica o local do HTML que vai aparecer o texto (id="valorConvertido")
    let elementoValorConvertido = document.getElementById("valorConvertido");
    // Conteúdo que será colocado no local designado
    elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter Bitcoin para a moeda desejada
function ConverterBTC(valorElemento) {
    if (document.getElementById("real_out").checked) {
        // Converter o valor em bitcoin para real 
        let valorReal = valorElemento * cotacaoEuro
        console.log("BTC " + valorElemento + " = R$ " + valorReal)
        valorConvertido = `BTC${valorElemento.toFixed(7)} = R$${valorReal.toFixed(2)}`
    }

    if (document.getElementById("dolar_out").checked) {
        // Converter o valor em bitcoin para dolar
        let valorDolar = valorElemento * (cotacaoLibra / cotacaoDolar)
        console.log("BTC " + valorElemento + " = U$ " + valorDolar)
        valorConvertido = `BTC${valorElemento.toFixed(7)} = U$${valorDolar.toFixed(2)}`
    }

    if (document.getElementById("euro_out").checked) {
        // Converter o valor em bitcoin para euro 
        let valorEuro = valorElemento * (cotacaoLibra / cotacaoEuro)
        console.log("BTC " + valorElemento + " = € " + valorEuro)
        valorConvertido = `BTC${valorElemento.toFixed(7)} = €${valorEuro.toFixed(2)}`
    }

    if (document.getElementById("libra_out").checked) {
        // Converter o valor em bitcoin para libra 
        let valorLibra = valorElemento
        console.log("BTC " + valorElemento + " = £ " + valorLibra)
        valorConvertido = `BTC${valorElemento.toFixed(7)} = £${valorLibra.toFixed(2)}`
    }

    if (document.getElementById("btc_out").checked) {
        // Converter o valor em bitcoin para bitcoin
        let valorBTC = valorElemento * (cotacaoLibra / cotacaoBitcoin)
        console.log("BTC " + valorElemento + " = BTC " + valorBTC)
        valorConvertido = `BTC${valorElemento.toFixed(7)} = BTC ${valorBTC.toFixed(7)}`
    }

    // Jogar o número de volta para o HTML e imprimir na tela
    // Indica o local do HTML que vai aparecer o texto (id="valorConvertido")
    let elementoValorConvertido = document.getElementById("valorConvertido");
    // Conteúdo que será colocado no local designado
    elementoValorConvertido.innerHTML = valorConvertido;
}

// Função para inverter os botões
function Invert() {
    if (document.getElementById("real_in").checked) {
        // /\ Entrada: Real
        if (document.getElementById("real_out").checked) {
            real_in.checked = true;
            real_out.checked = true;
        } else if (document.getElementById("dolar_out").checked) {
            dolar_in.checked = true;
            real_out.checked = true;
        } else if (document.getElementById("euro_out").checked) {
            euro_in.checked = true;
            real_out.checked = true;
        } else if (document.getElementById("libra_out").checked) {
            libra_in.checked = true;
            real_out.checked = true;
        } else if (document.getElementById("btc_out").checked) {
            btc_in.checked = true;
            real_out.checked = true;
        }
    } else if (document.getElementById("dolar_in").checked) {
        // /\ Entrada: Dólar

        if (document.getElementById("real_out").checked) {
            real_in.checked = true;
            dolar_out.checked = true;
        } else if (document.getElementById("dolar_out").checked) {
            dolar_in.checked = true;
            dolar_out.checked = true;
        } else if (document.getElementById("euro_out").checked) {
            euro_in.checked = true;
            dolar_out.checked = true;
        } else if (document.getElementById("libra_out").checked) {
            libra_in.checked = true;
            dolar_out.checked = true;
        } else if (document.getElementById("btc_out").checked) {
            btc_in.checked = true;
            dolar_out.checked = true;
        }
    } else if (document.getElementById("euro_in").checked) {
        // /\ Entrada: Euro

        if (document.getElementById("real_out").checked) {
            real_in.checked = true;
            euro_out.checked = true;
        } else if (document.getElementById("dolar_out").checked) {
            dolar_in.checked = true;
            euro_out.checked = true;
        } else if (document.getElementById("euro_out").checked) {
            euro_in.checked = true;
            euro_out.checked = true;
        } else if (document.getElementById("libra_out").checked) {
            libra_in.checked = true;
            euro_out.checked = true;
        } else if (document.getElementById("btc_out").checked) {
            btc_in.checked = true;
            euro_out.checked = true;
        }
    } else if (document.getElementById("libra_in").checked) {
        // /\ Entrada: Libra

        if (document.getElementById("real_out").checked) {
            real_in.checked = true;
            libra_out.checked = true;
        } else if (document.getElementById("dolar_out").checked) {
            dolar_in.checked = true;
            libra_out.checked = true;
        } else if (document.getElementById("euro_out").checked) {
            euro_in.checked = true;
            libra_out.checked = true;
        } else if (document.getElementById("libra_out").checked) {
            libra_in.checked = true;
            libra_out.checked = true;
        } else if (document.getElementById("btc_out").checked) {
            btc_in.checked = true;
            libra_out.checked = true;
        }
    } else if (document.getElementById("btc_in").checked) {
        // /\ Entrada: Bitcoin

        if (document.getElementById("real_out").checked) {
            real_in.checked = true;
            btc_out.checked = true;
        } else if (document.getElementById("dolar_out").checked) {
            dolar_in.checked = true;
            btc_out.checked = true;
        } else if (document.getElementById("euro_out").checked) {
            euro_in.checked = true;
            btc_out.checked = true;
        } else if (document.getElementById("libra_out").checked) {
            libra_in.checked = true;
            btc_out.checked = true;
        } else if (document.getElementById("btc_out").checked) {
            btc_in.checked = true;
            btc_out.checked = true;
        }
    }

    Converter();
}