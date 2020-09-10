import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {name: '123', status: 'open', id: 1},
      {name: '222', status: 'open', id: 2}
    ],
    id: 2
  },
  getters: {
    getTodos(state) {
      return state.todos;
    } 
  },
  mutations: {
    addTodo(state, item) {
      state.todos.push({name: item, status: 'open', id: ++state.id });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((item) => {
        return item.id !== id
      })
    }
  },
  actions: {
    addTodos({ commit }, item) {
      commit('addTodo', item);
    },
    removeTodo({ commit }, id) {
      commit('removeTodo', id);
    }
  },
  modules: {
  }
})
