<template>
  <div>
    parent
    {{num}}<br/>
    {{childrenMsg}} <br/>
    <button @click="addNum()">+1</button>
    <Children title="title" :num="num" @childFn="childrenFN" >
        <!-- 插槽文案 -->
        <div>
            <p>p标签</p>
            <span>span标签</span>
        </div> 
    </Children>
  </div>
</template>

<script>
import Children from './component/Children'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  name: 'Parent',
  components: {
      Children
  },
  // 定义属性
  data() {
    return {
      num: 0,
      childrenMsg: ''
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    addNum() {
        ++this.num;
    },
    childrenFN(msg) {
        this.childrenMsg = msg;
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