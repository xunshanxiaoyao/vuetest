<template>
  <div>
    <div class="login-box">
        <input type="text" placeholder="用户名" v-model="accountName">
        <input type="password" placeholder="密码" v-model="accountPassword">
        <button @click="submitJudeg()">登录</button>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  name: 'Login',
  data () {
    return {
      accountName: '',
      accountPassword: ''
    }
  },
  mounted () {

  },
  methods: {
    loginSubmit () {
      this.$router.push({path: '/home'});
    },
    submitJudeg () {
      var _this = this;
      if (_this.accountName.length > 2 && _this.accountPassword.length > 3) {
        _this.loginSubmit(); 
      }
    }
  }
}
</script>

<style scoped lang="less">
  input {
    display: block;
    text-align: center;
    width: 200px;
    margin: 10px auto;
  }
</style>