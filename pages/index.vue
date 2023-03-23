<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3">
      <b-navbar-brand href="#">Task Manager</b-navbar-brand>
    </b-navbar>
    <task-form></task-form>
    <task-search></task-search>
    <task-list></task-list>
  </b-container>
</template>

<script>
import TaskForm from "~/components/TaskForm.vue";
import TaskList from "~/components/TaskList.vue";
import TaskSearch from "~/components/TaskSearch.vue";

export default {
  name: 'IndexPage',
  components: {
    TaskForm,
    TaskList,
    TaskSearch,
  },
  async asyncData(context) {
    await context.store.dispatch("fetchTasks", context);
  },
};
</script>
