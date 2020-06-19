new Vue({
	el: '#desafio',
	data: {
		isMostrarDestaque: true,
		angulo: 0,
		css1 : "css1",
		css2 : "css2",
		classe3 : "",
		classe4 : "",
		isMostrarClasse4 : true,
		estilo5 : {
			height : '100px',
			width : '100px'
		},
		cor5 : "",
		widthBarra : '10%'
	},
	methods: {
		iniciarEfeito1() {
			i = 1
			while (i < 13) {
				//o setTimeout roda assyncronamente!
				setTimeout(() => {
					this.angulo += 15
					console.log("timeout 5000")
				}, i * 500)
				console.log("i: " + i + ", isMostrarDestaque: " + this.isMostrarDestaque)
				i++
			}
		},
		iniciarEfeito2() {
			this.isMostrarDestaque = !this.isMostrarDestaque
			i = 1
			while (i < 10) {
				//o setTimeout roda assyncronamente!
				setTimeout(() => {
					this.isMostrarDestaque = !this.isMostrarDestaque
					console.log("timeout 5000")
				}, i * 500)
				console.log("i: " + i + ", isMostrarDestaque: " + this.isMostrarDestaque)
				i++
			}
		},
		iniciarProgresso() {
			console.log("...progresso iniciado")
			let valor = 0
			//Aqui usamos o setInterval e em outro momento eu usei o setTimeout
			const temporizador = setInterval(()=>{
				valor += 5
				// essa forma de concatenacao usa o sinal de CRASE
				this.widthBarra = `${valor}%`
				console.log("widthbarra = "+this.widthBarra)
				if (valor == 100){
					clearInterval(temporizador)
				}
			}, 500)
		}
	},
	computed: {
		classeCorrente() {
			r = this.isMostrarDestaque ? "destaque" : "encolher"
			console.log("classeCorrente: " + r)
			return r
		},
		rotacao() {
			return "rotate(" + this.angulo + "deg)"
		},
		computedClasse4(){
			return this.isMostrarClasse4 ? this.classe4 : ""
		}
	}
})
