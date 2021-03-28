<template>
  <div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="部门管理" name="first"><DepMana></DepMana></el-tab-pane>
        <el-tab-pane label="职位管理" name="second"><PosMana></PosMana></el-tab-pane>
        <el-tab-pane label="职称管理" name="third"><JobLevelMana></JobLevelMana></el-tab-pane>
        <el-tab-pane label="奖惩规则" name="fourth"><EcMana></EcMana></el-tab-pane>
        <el-tab-pane label="权限组" name="fourth"><PermissMana></PermissMana></el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import DepMana from './basic/DepMana'
import EcMana from './basic/EcMana'
import JobLevelMana from './basic/JobLevelMana'
import PermissMana from './basic/PermissMana'
import PosMana from './basic/PosMana'

export default {
  name: 'SysBasic',
  components: {DepMana, EcMana, JobLevelMana, PermissMana, PosMana},
  data () {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style scoped>

</style>
