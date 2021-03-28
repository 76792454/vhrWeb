<template>
<div>
  <div>
  <el-input
    class = "posNameInput"
    size="small"
    placeholder="添加职位..."
    prefix-icon="el-icon-plus"
    v-model="pos.name">
  </el-input>
  <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
  </div>
  <div class = "posManaMain">
    <el-table
      :data="positions"
      stripe
      size="small"
      border
      style="width: 70%">
      <el-table-column
        prop="id"
        label="编号"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="职位名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="创建时间">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'PosMana',
  data () {
    return {
      pos: {
        name: ''
      },
      positions: []
    }
  }
}
</script>

<style scoped>
  .posNameInput{
    width: 300px;
    margin-right: 10px;
  }
  .posManaMain{

  }
</style>
