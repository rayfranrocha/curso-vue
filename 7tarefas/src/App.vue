<template>
  <div id="app">
    <h1>Tarefas 2</h1>
    <!-- usa a TAG como nome do componente e passa o PROPS, neste caso 'tasks' -->
    <task-grid :tasks="tasks"></task-grid>
  </div>
</template>

<script>
//faz o import do componente
import TaskGrid from "@/components/TaskGrid.vue";

export default {
  //registra ele na instancia
  components: { TaskGrid },

  data() {
    return {
      tasks: [
        { name: "Lavar louça", pending: false },
        { name: "Comprar blusa", pending: true },
        { name: "Lavar louça", pending: false },
        { name: "Comprar blusa", pending: true },
        { name: "Lavar louça", pending: false },
        { name: "Comprar blusa", pending: true },
      ]
    };
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
