<template>
  <div class="about">
    <h1 v-for="item in list" :key="item.id">{{item.name}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'About',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.list = this.getList();
  },
  methods: {
    getList() {
      return this.$store.getters.getTodos;
    }
  }
}
</script>