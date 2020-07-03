<template>
  <div class="task" :class="stateClass">
     {{task.name}}
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true }
  },
  computed: {
    //este metodo definira qual a classe que a DIV da Task utilizará
    stateClass() {
      //retorna um obejto com atributos, cada atributo será TRUE ou FALSE
      return {
        pending: this.task.pending,
        done: !this.task.pending
      };
    }
  }
};
</script>

<style>
.task {
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pending {
  color: #ddd;
  border-left: 13px solid #b73229;
  background-color: #f44336;
}
.done{
  color: #ddd;
  border-left: 13px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}
</style>