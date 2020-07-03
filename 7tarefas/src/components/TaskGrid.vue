<template>
  <div class="task-grid">
    <template v-if="tasks.length>0">
      <Task
        v-for="task in tasks"
        :key="task.name"
        :task="task"
        @taskDeleted="$emit('taskDeleted',$event)"
      ></Task>
    </template>
    <p v-else class="no-task">Nenhuma tarefa a fazer. Parabéns!</p>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true }
  }
};
</script>

<style>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.task-grid .task {
  margin: 10px;
}
.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>