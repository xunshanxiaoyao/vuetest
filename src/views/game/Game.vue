<template>
  <div>
    <div class='box'>
        <span @click="itemClick(0, 0)">{{itemList[0][0]}}</span>
        <span @click="itemClick(0, 1)">{{itemList[0][1]}}</span>
        <span @click="itemClick(0, 2)">{{itemList[0][2]}}</span>
    </div>
    <div class='box'>
        <span @click="itemClick(1, 0)">{{itemList[1][0]}}</span>
        <span @click="itemClick(1, 1)">{{itemList[1][1]}}</span>
        <span @click="itemClick(1, 2)">{{itemList[1][2]}}</span>
    </div>
    <div class='box'>
        <span @click="itemClick(2, 0)">{{itemList[2][0]}}</span>
        <span @click="itemClick(2, 1)">{{itemList[2][1]}}</span>
        <span @click="itemClick(2, 2)">{{itemList[2][2]}}</span>
    </div>
    <h2 v-if="!isWin">下一位：{{computedText}}</h2>
    <h2 v-if="isWin">获胜者：{{text ? 'O' : 'X'}}</h2>
    <ul @click="liClick">
        <li v-for="item in history" :key="item.id" :data-id='item.id'>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  components: {

  },
  // 定义属性
  data() {
    return {
      text: true,
      isWin: false,
      itemList: [[null,null,null], [null, null, null], [null, null, null]],
      xList: [],
      oList: [],
      resultList: [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
      ],
      history: [
          {id: 0, name: 'game start'}
      ]
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
      computedText: function() {
          return this.text ? 'X' : 'O'
      }
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    itemClick(l, i) {
        if (this.isWin) return false;
        if (this.itemList[l][i] !== null) {return false}
        const L = l === 0 ? l + i : l === 1 ? 3 + i : l === 2 ? 6 + i : 0; 
        let win = '';
        this.itemList[l][i] = this.computedText;
        if (this.computedText === 'X') {
            this.xList.push(L);
            if(this.xList.length > 2) win = this.overJudge(this.xList);
        } else {
            this.oList.push(L);
            if(this.oList.length > 2) win = this.overJudge(this.oList);
        }
        this.history.push({
            id: this.history[this.history.length - 1].id + 1,
            name: 'Go to move #' + this.history.length,
            path: {
                l: l,
                i: i,
                text: this.computedText
            }
        })
        this.isWin = win;
        this.text = !this.text;
    },
    overJudge(list) {
        let win = null;
        for (let i = 0; i < this.resultList.length; i++) {
            // const [a, b, c] = this.resultList[i];
            let num = 0;
            for (let j = 0; j < list.length; j++) {
                if (this.resultList[i].indexOf(list[j]) > -1) {
                    ++num;
                }
                if (num === 3) {
                    return true;
                }
            }
        }
        return win;
    },
    liClick(event) {
        const id = event.target.dataset.id;
        
        console.log(id)
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

<style scoped lang="less">
  .box {
    border: 1px solid #000;
    width: 300px;
    height: 100px;
    margin: 0 auto;
    font-size: 0;
    span {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 1px solid #000;
        box-sizing: border-box;
        font-size: 60px;
        vertical-align: middle;
        line-height: 100px;
    }
  }
</style>