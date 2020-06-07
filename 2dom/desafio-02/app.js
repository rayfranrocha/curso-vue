new Vue({
    el: '#desafio',
    data: {
        valor: 'A'
    },
    methods: {
        alertarBotaoClicado(){
            alert('Botão foi clicado.')
        },
        guardarValor(){
            this.valor = event.target.value
            console.log(this.valor)
        },
        atualizarValor(){
            this.valor = event.target.value
        }
    }
})