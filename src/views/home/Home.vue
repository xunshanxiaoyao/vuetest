<template>
  <div class="home">
    <input type="text" placeholder="todo List" v-model="inputItem">
    <button @click="addList()">提交</button>
    <ul> 
      <li v-for="item in $store.state.todos" :key="item.id">
        <span @click="removeItem(item.id)">{{item.name}} + {{ item.id }}</span>
      </li>
    </ul>
    <router-link to='/parent'>to Parent</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return  {
      todoList: [],
      inputItem: ''
    }
  },
  mounted () {
    // this.todoList = this.getList();
  },
  methods: {
    // getList: function() {
    //   return this.$store.getters.getTodos;
    // },
    addList: function() {
      this.$store.dispatch('addTodos', this.inputItem);
    },
    removeItem: function(id) {
      this.$store.dispatch('removeTodo', id);
    }
  }
}
</script>

<style lang="less" scoped>
</style>