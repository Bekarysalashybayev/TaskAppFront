export const state = () => ({
  tasks: [],
  searchQuery: "",
});

export const mutations = {
  addTask(state, task) {
    state.tasks.push(task);
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
  toggleTaskStatus(state, taskId) {
    const task = state.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  },
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  updateSearchQuery(state, searchQuery) {
    state.searchQuery = searchQuery;
  },
};

export const actions = {
  async fetchTasks({commit},) {
    const tasks = await this.$taskService.getTasks();
    commit("setTasks", tasks);
  },
  async addTask({commit}, task) {
    const newTask = await this.$taskService.addTask(task);
    commit("addTask", newTask);
  },
  async deleteTask({commit}, taskId) {
    await this.$taskService.deleteTask(taskId);
    commit("deleteTask", taskId);
  },
  async toggleTaskStatus({commit, state}, taskId) {
    const task = state.tasks.find((task) => task.id === taskId);
    if (task) {
      await this.$taskService.updateTask({
        ...task,
        completed: !task.completed,
      });
      await commit("toggleTaskStatus", taskId);
    }
  },
};

export const getters = {
  filteredTasks(state) {
    if (!state.searchQuery) {
      return state.tasks;
    }
    return state.tasks.filter((task) => task.name.toLowerCase().includes(state.searchQuery.toLowerCase()));
  },
};
