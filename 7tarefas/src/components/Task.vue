<template>
  <div class="task" :class="stateClass" @click="$emit('taskStatusChanged',task)">
      <!-- perceba que esse click mais interno incluimos '.stop' pra evitar que o click seja propagado pra o click mais externo-->
    <span class="close" @click.stop="$emit('taskDeleted',task)">x</span>
    <p>{{task.name}}</p>
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
  },
};
</script>

<style>
.task {
  position: relative;
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
.done {
  color: #ddd;
  border-left: 13px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}
.pending .close {
  background: #b73229;
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
}
.done .close {
  background: #0a8f08;
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
}
</style>