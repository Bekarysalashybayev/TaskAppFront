

export default function ($axios) {
  return{
    async getTasks() {
      const response = await $axios.get('');
      return response.data;
    },

    async addTask(task) {
      const response = await $axios.post('', task);
      return response.data;
    },

    async deleteTask(taskId) {
      await $axios.delete(`/${taskId}/`);
    },

    async updateTask(task) {
      const response = await $axios.put(`/${task.id}/`, task);
      return response.data;
    },
  }
};
