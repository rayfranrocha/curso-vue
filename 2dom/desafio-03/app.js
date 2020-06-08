new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        // resultado : "?"  -- quando temos um campo COMPUTED, nao podemos ter 
        // o mesmo nome para um atributo de data, pois COMPUTED não pode ser
        // armazenado, ele é CALCULADO!
    },
    computed: {
        //usando o COMPUTED, deve-se colocar o atributo COMPUTADO
        //usa-se o 'return' pra devolver o valor computado, uma vez
        //que esse nao precisa ser armazendo
        resultado() {
            return this.valor == 37 ? 'valor = 37' : 'valor <> a 37'
        },
        msg(){
            return this.valor == 37 ? "Parabens! Em 2 segundo, o valor sera zerado." : ""
        }
    },
    watch: {
        valor(novo, antigo) {
            if (novo == 37) {
                setTimeout(() => {
                    this.valor = 0
                }, 2000)
            }

        }
    }
});