new Vue({
    el: "#app",
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        },
        resultado() {
            return this.playerLife == 0 ? "Você perdeu! :(" : "Você ganhou! :)"
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        giveUp() {
            this.running = false
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'monster')
            if (this.monsterLife>0){
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'player')
            }
        },
        hurt(atributo, min, max, especial, source, target, classe) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            //this[playerLife] = this.playerLife
            this[atributo] = Math.max(this.playerLife - hurt, 0)
            this.registerLog(`${source} atingiu o ${target} com ${hurt}.`, classe)
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`O jogador ganhou força de ${heal}.`)
        },
        healAndHurt(min, max) {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        getRandom(min, max) {
            const value = min + (Math.random() * (max - min))
            return Math.round(value)
        },
        registerLog(texto, classe) {
            this.logs.unshift({ texto, classe })
        }
    }
})