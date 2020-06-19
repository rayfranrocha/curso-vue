new Vue({
    el: '#desafio',
    data: {
        nome: 'Rayfran',
        idade: 40,
        imagemSrc: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/04/qr-707-carro-compara-velar-x-gle-01.jpg?quality=70&strip=info"
    },
    methods: {
        getIdadeVezes3() {
            return this.idade * 3
        },
        getRandom(){
            return Math.random()
        },
        alterarNome(event) {
            this.nome = event.target.value
        }
    }
})
