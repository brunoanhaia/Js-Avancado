class DateHelper {

    constructor(){
        throw new Error('DateHelper não pode ser instanciada')
    }

    static dataParaTexto(texto){
        return texto.getDate() + '/' + (texto.getMonth()+1) + '/' + texto.getFullYear()
    }
    static textoParaData(data){
        if(!/\d{4}-\d{2}-\d{2}/.test(data)){throw new Error('Deve estar no formato aaaa-mm-dd')}
        return new Date(...data.split('-').map( (item,indice) => item - indice % 2 ))    /* Subtrai 1 se o módulo do índice for impar */ 
    }
}

