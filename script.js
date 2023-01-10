
function SelecionarPrato(pratoSelecionado) {

const pratoAnterior = document.querySelector('.pratos .selecionado');

if(pratoAnterior !== null){
    pratoAnterior.classList.remove('selecionado')
}

pratoSelecionado.classList.add('selecionado');    

}

function SelecionarBebida(bebidaSelecionada) {

    const bebidaAnterior = document.querySelector('.bebidas .selecionado');
    
    if(bebidaAnterior !== null){
        bebidaAnterior.classList.remove('selecionado')
    }
    
    bebidaSelecionada.classList.add('selecionado');    
    
    }

function SelecionarSobremesa(sobremesaSelecionada) {

        const sobremesaAnterior = document.querySelector('.sobremesas .selecionado');
        
        if(sobremesaAnterior !== null){
            sobremesaAnterior.classList.remove('selecionado')
        }
        
        sobremesaSelecionada.classList.add('selecionado');    
        
        }

