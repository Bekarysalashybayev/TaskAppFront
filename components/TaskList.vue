<template>
  <b-list-group>
    <b-list-group-item v-for="task in tasks" :key="task.id" class="display-flex">
      <input type="checkbox" :checked="task.completed" @change="toggleTaskStatus(task.id)"/>
      {{ task.name }}
      <b-button @click="deleteTask(task.id)" variant="danger" class="ml-auto">Delete</b-button>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "TaskList",
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks;
    },
  },
  methods: {
    async deleteTask(taskId) {
      await this.$store.dispatch("deleteTask", taskId);
    },
    async toggleTaskStatus(taskId) {
      await this.$store.dispatch("toggleTaskStatus", taskId);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

.display-flex {
  display: flex;
  align-items: center;
}

input[type=checkbox] {
  margin-right: 10px;
  width: 1rem;
  height: 1rem;
}
</style>
