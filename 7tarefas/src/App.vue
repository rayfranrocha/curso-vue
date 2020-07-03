<template>
  <div id="app">
    <h1>Tarefas 2</h1>

    <!-- @taskAdded vai ficar escutando/esperando um $emit('taskAdded', objeto)-->
    <new-task @taskAdded="addTask" />

    <!-- usa a TAG como nome do componente e passa o PROPS, neste caso 'tasks' -->
    <task-grid :tasks="tasks"></task-grid>
  </div>
</template>

<script>
//faz o import do componente
import TaskGrid from "@/components/TaskGrid.vue";
import NewTask from "@/components/NewTask.vue";

export default {
  //registra ele na instancia
  components: { TaskGrid, NewTask },

  data() {
    return {
      tasks: [
        { name: "Lavar louça", pending: false },
        { name: "Comprar blusa", pending: true },
      ]
    };
  },
  methods: {
    //task é o objeto emitido pelo componente NewTask atraves de um $emit
    addTask(task) {
      const funcaoComparcao = t => t.name.toUpperCase() === task.name.toUpperCase();
      const nomeNaoExiste = this.tasks.filter(funcaoComparcao).length == 0;
      if (nomeNaoExiste) {
        this.tasks.push({
            name: task.name,
            //o codigo abaixo verifica se o objeto possui um atributo 'pending', senão coloca true (valor padrao)
            pending: task.pending || true
        });
      }
    }
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
