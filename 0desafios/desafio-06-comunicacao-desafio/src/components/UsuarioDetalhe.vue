<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuario.id }}</h2>
            <h2>Nome: {{ usuario.nome }}</h2>
            <h2>Idade: {{ usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>

import barramento from '@/barramento'

//perceba que o UsuarioDetalhe é só a saída, portanto não precisa de 'methods' 
//ele precisa apenas do LISTENER definido no 'created()'

export default {
    data() {
        return {
            usuario: null
        }
    },
    //created = funcao de ciclo de vida... onde nós definimos o LISTENER
    created(){
        barramento.onUsuarioSelecionado( usuario => {
            this.usuario = usuario
        })
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
