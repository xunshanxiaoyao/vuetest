<template>
  <div>
    children
    {{title}} <br/>
    {{num}} <br/>
    <input type="text" v-model="message">
    <button @click="upload">上传</button>
    <br/>
    插槽<br/>
    <slot></slot><br/>
    插槽
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  name: 'Children',
  components: {
  },
  // 定义属性
  data() {
    return {
      message: ''
    }
  },
  props: {
      title: {
          type: String,
          default: '123'
      },
      num: {
          type: Number,
          default: 0
      }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    upload() {
        this.$emit('childFn', this.message);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped>
  
</style>