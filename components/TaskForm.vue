<template>
  <b-form @submit.prevent="addTask" @reset="onReset" class="mb-3">
    <b-form-group
      id="input-group-1"
      label="Task name*:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="newTaskTitle"
        type="text"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary" :disabled="!newTaskTitle">Save</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    onReset() {
      this.newTaskTitle = "";
    },
    async addTask() {
      if (!this.newTaskTitle) return;
      const task = {
        name: this.newTaskTitle,
      };
      await this.$store.dispatch("addTask", task);
      await this.onReset()
    },
  },
};
</script>
