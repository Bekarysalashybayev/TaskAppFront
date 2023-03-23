<template>
  <b-form-input class="mb-3" v-model="searchQuery" @input="searchTasks" placeholder="Enter your name"></b-form-input>
</template>

<script>
export default {
  name: "TaskSearch",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    searchTasks() {
      this.$store.commit("updateSearchQuery", this.searchQuery);
    },
  },
};
</script>
