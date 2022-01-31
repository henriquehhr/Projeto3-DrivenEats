let pratoSelecionado = null;
let bebidaSelecionada  = null;
let sobremesaSelecionada  = null;
let linkWhatsapp;

function selecionar(elementoCLicado){
    
    let clicadoAnteriormente = elementoCLicado.classList.contains("opcao--selecionada");
    const botaoFecharPedido = document.querySelector("#botao-fechar-pedido");

    if (clicadoAnteriormente) {
        if(elementoCLicado.classList.contains("js-prato")){
            pratoSelecionado.classList.remove("opcao--selecionada");
            pratoSelecionado = null;
        }
        else if(elementoCLicado.classList.contains("js-bebida")){
            bebidaSelecionada.classList.remove("opcao--selecionada");
            bebidaSelecionada = null;
        }
        else if(elementoCLicado.classList.contains("js-sobremesa")){
            sobremesaSelecionada.classList.remove("opcao--selecionada");
            sobremesaSelecionada = null;
        }
        if (!botaoFecharPedido.disabled){
            botaoFecharPedido.classList.remove("botao-fechar-pedido--habilitado");
            botaoFecharPedido.innerHTML = "Selecione os 3 itens<br> para fechar o pedido";
            botaoFecharPedido.disabled = true;
        }
    }
    else if(!clicadoAnteriormente) {
        if(elementoCLicado.classList.contains("js-prato")){
            if (pratoSelecionado != null){
                pratoSelecionado.classList.remove("opcao--selecionada");
            }
            pratoSelecionado = elementoCLicado;
        }
        else if(elementoCLicado.classList.contains("js-bebida")){
            if(bebidaSelecionada != null){
                bebidaSelecionada.classList.remove("opcao--selecionada");    
            }
            bebidaSelecionada = elementoCLicado;
        }
        else if(elementoCLicado.classList.contains("js-sobremesa")){
            if(sobremesaSelecionada != null){
                sobremesaSelecionada.classList.remove("opcao--selecionada");
            }
            sobremesaSelecionada = elementoCLicado;
        }
        elementoCLicado.classList.add("opcao--selecionada");
    }

    if(pratoSelecionado != null && bebidaSelecionada != null && sobremesaSelecionada != null){
        botaoFecharPedido.classList.add("botao-fechar-pedido--habilitado");
        botaoFecharPedido.disabled = false;
        botaoFecharPedido.innerHTML = "Fechar pedido";
    }

}

function fecharPedido(){
    
    nomeCLiente = prompt("Qual o seu nome?");
    enderecoCLiente = prompt("Qual o seu endereço?");
    document.querySelector(".tela-branca-opaca").classList.remove("desaparecer");
    document.querySelector("body").classList.add("body__impedir-rolagem-vertical");

    let nomePratoSelecionado = pratoSelecionado.querySelector("h3").innerText;
    let nomeBebidaSelecionada = bebidaSelecionada.querySelector("h3").innerText;
    let nomeSobremesaSelecionada = sobremesaSelecionada.querySelector("h3").innerText;

    let precoPratoSelecionado = Number(pratoSelecionado.querySelector(".opcao__base__preco").innerText.slice(3).replace(",","."));
    let precoBebidaSelecionada = Number(bebidaSelecionada.querySelector(".opcao__base__preco").innerText.slice(3).replace(",","."));
    let precoSobremesaSelecionada = Number(sobremesaSelecionada.querySelector(".opcao__base__preco").innerText.slice(3).replace(",","."));
    
    let valorTotal = (precoPratoSelecionado + precoBebidaSelecionada + precoSobremesaSelecionada).toFixed(2);

    document.querySelector(".confirmar-pedido__nome-prato").innerText = nomePratoSelecionado;
    document.querySelector(".confirmar-pedido__nome-bebida").innerText = nomeBebidaSelecionada;
    document.querySelector(".confirmar-pedido__nome-sobremesa").innerText = nomeSobremesaSelecionada;

    document.querySelector(".confirmar-pedido__preco-prato").innerText = (precoPratoSelecionado.toFixed(2)).replace(".",",");
    document.querySelector(".confirmar-pedido__preco-bebida").innerText = (precoBebidaSelecionada.toFixed(2)).replace(".",",");
    document.querySelector(".confirmar-pedido__preco-sobremesa").innerText = (precoSobremesaSelecionada.toFixed(2)).replace(".",",");

    document.querySelector(".confirmar-pedido__preco-total").innerText = "R$ " + valorTotal.replace(".",",");

    let mensagem = 
    encodeURIComponent(`Olá, gostaria de fazer o pedido:\n - Prato: ${nomePratoSelecionado}\n - Bebida: ${nomeBebidaSelecionada}\n - Sobremesa: ${nomeSobremesaSelecionada}\n Total: R$ ${valorTotal}`);
    linkWhatsapp = "https://wa.me/5518997472691?text=" + mensagem + encodeURIComponent("\n\n Nome: " + nomeCLiente + "\n Endereço: " + enderecoCLiente);
}

function confirmarPedido() {
    window.open(linkWhatsapp);
    window.location.reload();
}

function cancelarPedido() {
    document.querySelector(".tela-branca-opaca").classList.add("desaparecer");
    document.querySelector("body").classList.remove("body__impedir-rolagem-vertical");
}