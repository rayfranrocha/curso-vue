<template>
  <div id="app">
    <h1>Tarefas 2</h1>

    <TaskProgress :progress="progress"/>

    <!-- @taskAdded vai ficar escutando/esperando um $emit('taskAdded', objeto)-->
    <NewTask @taskAdded="addTask" />

    <!-- usa a TAG como nome do componente e passa o PROPS, neste caso 'tasks' -->
    <TaskGrid :tasks="tasks" @taskDeleted="deleteTask" @taskStatusChanged="changeStatus"/>
    
  </div>
</template>

<script>
//faz o import do componente
import TaskGrid from "@/components/TaskGrid.vue"
import NewTask from "@/components/NewTask.vue"
import TaskProgress from "@/components/TaskProgress.vue"

export default {
  //registra ele na instancia
  components: { TaskGrid, NewTask , TaskProgress},

  data() {
    return {
      tasks: [
          {name: 'aaa', pending: true},
          {name: 'aaav', pending: false},
      ]
    };
  },
  computed:{
      progress(){
          const total = this.tasks.length
          const done = this.tasks.filter(t => !t.pending).length
          //o retorno abaixo, tem valor default, pois se der algum erro no calculo, 
          //por exemplo divisao por zero, ele assume o valor default, neste caso 0
          return Math.round( done / total * 100) || 0
      }
  },
  methods: {
    //task é o objeto emitido pelo componente NewTask atraves de um $emit
    addTask(task) {
      const funcaoComparcao = t =>
        t.name.toUpperCase() === task.name.toUpperCase();
      const nomeNaoExiste = this.tasks.filter(funcaoComparcao).length == 0;
      if (nomeNaoExiste) {
        this.tasks.push({
          name: task.name,
          //o codigo abaixo verifica se o objeto possui um atributo 'pending', senão coloca true (valor padrao)
          pending: task.pending || true
        });
      }
    },
    deleteTask(task) {
      const i = this.tasks.indexOf(task);
      if (i >= 0) this.tasks.splice(i, 1);
    },
    changeStatus(task){
        task.pending = !task.pending;
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
