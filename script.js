let pratoSelecionado = null;
let bebidaSelecionada  = null;
let sobremesaSelecionada  = null;
const botaoFecharPedido = document.querySelector("#botao-fechar-pedido");


function selecionar(elementoCLicado){
    
    let clicadoAnteriormente = elementoCLicado.classList.contains("selecionado");
    
    if (clicadoAnteriormente) {
        if(elementoCLicado.classList.contains("dish")){
            pratoSelecionado.classList.remove("selecionado");
            pratoSelecionado = null;
        }
        else if(elementoCLicado.classList.contains("drink")){
            bebidaSelecionada.classList.remove("selecionado");
            bebidaSelecionada = null;
        }
        else if(elementoCLicado.classList.contains("dessert")){
            sobremesaSelecionada.classList.remove("selecionado");
            sobremesaSelecionada = null;
        }
        if (botaoFecharPedido.classList.contains("fechar-pedido")){
            botaoFecharPedido.classList.remove("fechar-pedido");
            botaoFecharPedido.innerHTML = "Selecione os 3 itens<br> para fechar o pedido";
        }
    }
    else if(!clicadoAnteriormente){
        if(elementoCLicado.classList.contains("dish")){
            if(pratoSelecionado===null)
                pratoSelecionado = elementoCLicado;
            else{
                pratoSelecionado.classList.remove("selecionado");
                pratoSelecionado = elementoCLicado;
            }
            elementoCLicado.classList.add("selecionado");
        }
        else if(elementoCLicado.classList.contains("drink")){
            if(bebidaSelecionada===null)
                bebidaSelecionada = elementoCLicado;
            else{
                bebidaSelecionada.classList.remove("selecionado");
                bebidaSelecionada = elementoCLicado;
            }
            elementoCLicado.classList.add("selecionado");
        }
        else if(elementoCLicado.classList.contains("dessert")){
            if(sobremesaSelecionada===null)
                sobremesaSelecionada = elementoCLicado;
            else{
                sobremesaSelecionada.classList.remove("selecionado");
                sobremesaSelecionada = elementoCLicado;
            }
            elementoCLicado.classList.add("selecionado");
        }
    }

    if(pratoSelecionado != null && bebidaSelecionada != null && sobremesaSelecionada != null){
        botaoFecharPedido.classList.add("fechar-pedido");
        

        let nomePratoSelecionado = pratoSelecionado.querySelector("h3").innerText;
        let nomeBebidaSelecionada = bebidaSelecionada.querySelector("h3").innerText;
        let nomeSobremesaSelecionada = sobremesaSelecionada.querySelector("h3").innerText;

        let precoPratoSelecionado = Number(pratoSelecionado.querySelector(".price").innerText.slice(3).replace(",","."));
        let precoBebidaSelecionada = Number(bebidaSelecionada.querySelector(".price").innerText.slice(3).replace(",","."));
        let precoSobremesaSelecionada = Number(sobremesaSelecionada.querySelector(".price").innerText.slice(3).replace(",","."));
        let valorTotal = (precoPratoSelecionado + precoBebidaSelecionada + precoSobremesaSelecionada).toFixed(2);

        let mensagem = 
        encodeURIComponent(`Olá, gostaria de fazer o pedido:\n - Prato: ${nomePratoSelecionado}\n - Bebida: ${nomeBebidaSelecionada}\n - Sobremesa: ${nomeSobremesaSelecionada}\n Total: R$ ${valorTotal}`);
        let linkWhatsapp = "https://wa.me/?text=" + mensagem;
        botaoFecharPedido.innerHTML = `<a href="${linkWhatsapp}" target="_blank">Fechar pedido</a>`;
    }


}