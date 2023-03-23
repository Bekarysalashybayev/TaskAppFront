import createTaskService from '~/services/taskService';
import Vue from "vue";

export default ({ app }, inject) => {
  const taskService = createTaskService(app.$axios);

  Vue.prototype.$taskService = taskService;

  inject('taskService', taskService);
};
