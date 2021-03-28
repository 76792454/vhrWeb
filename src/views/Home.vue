<template>
  <div>
    <el-container>
      <el-header class="header">
        <div class="title">微人事</div>
        <!--@command="commandHandler" 点击菜单项触发的事件回调-->
        <el-dropdown class="userInfo" @command="commandHandler">
           <span class="el-dropdown-link">
               {{user.name}}<i><img :src="user.userface" alt=""></i>
           </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
            <el-dropdown-item command="setting">设置</el-dropdown-item>
            <el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo" router>
           <el-submenu :index="index+''" v-for="(item,index) of this.routes" v-if="!item.hidden" :key="index">
             <template slot="title">
              <i style="color: #409eff;margin-right: 10px" :class="item.iconCls"></i>
               <span>{{item.name}}</span>
             </template>
             <el-menu-item-group>
               <el-menu-item :index="child.path" v-for="(child,index) of item.children" :key="index">
                 {{child.name}}
               </el-menu-item>
             </el-menu-item-group>
           </el-submenu>
          </el-menu>
        </el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      user: JSON.parse(window.sessionStorage.getItem('user'))
    }
  },
  computed: {
    routes () {
      return this.$store.state.routes
    }
  },
  methods: {
    // 该方法有一个参数，cmd
    commandHandler (cmd) {
      if (cmd === 'logout') {
        this.$confirm('此操作将注销登录，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 使用封装好的getRequest方法，参数写注销登录的地址
          this.getRequest('/logout')
          window.sessionStorage.removeItem('user')
          this.$router.replace('/')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
      }
    },
    menuClick (index, indexPath) {
      this.$router.push(index)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #409eff;
  display: flex;
  align-items: center; /*竖轴上居中*/
  justify-content:space-between; /*空白的地方在中间*/
  padding: 0 15px;
  box-sizing: border-box;
}
.title{
  font-size: 30px;
  font-family: 华文行楷;
  color: #ffffff;
}
/*.el-dropdown-link {*/
/*  cursor: pointer;*/
/*  color: #409EFF;*/
/*}*/
/*.el-icon-arrow-down {*/
/*  font-size: 12px;*/
/*}*/
/*鼠标放到连接上的鼠标变为小手形状*/
.userInfo{
  cursor: pointer;
}
.el-dropdown-link img{
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: 8px;
 }
.el-dropdown-link{
  display: flex;
  align-items: center;
}
</style>
