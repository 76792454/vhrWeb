<template>
<div>
  <!--element ui的表单验证规则配置 用 :rules="rules"这是简写的，本来是v-model:rules="rules"-->
  <!--:model 表单里面的数据对象-->
  <el-form :rules="rules" :model="loginForm" class="loginContainer" ref="loginForm">
    <h3 class="loginTitle">系统登录</h3>
    <!--表单里面的每一项叫做<el-form-item></el-form-item,要加个prop属性，本来是不用加的，但是我们这个使用了字段校验，这种情况家就一定要加prop属性-->
    <el-form-item prop="username">
    <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
    <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-checkbox class="loginRember" v-model="checked">记住密码</el-checkbox>
    <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123'
      },
      checked: false,
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.loginForm.validate((validate) => {
        if (validate) {
          this.postKeyValueRequest('/doLogin', this.loginForm).then(resp => {
            // resp：从服务端拿到的数据  用户的数据要保存到哪里？ 保存在sessionSto  打开就没了
            if (resp) {
              window.sessionStorage.setItem('user', JSON.stringify(resp.obj))
              this.$router.replace('/home')
              this.$message.success('登录成功')
            }
          })// then里面的参数就是服务端返回的参数
        } else {
          this.$message.error('请输入所有字段')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.loginContainer{
  position: relative;
  transform:translateY(60%);
  border-radius: 15px;
  background-clip: padding-box;
  margin: 0 auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle{
  margin:15px auto 20px auto;
  text-align: center;
  color: #505458;
}
.loginRember{
  margin: 0 0 25px 0;
  text-align: left;
}
</style>
