<template>
  <div class="flex">
    <i-button @click="drawerTableVisible = true">打开表格</i-button>

    <!-- Form -->
    <i-button @click="drawerFormVisible = true">打开表单</i-button>
  </div>

  <!-- Table drawer -->
  <i-drawer v-model="drawerTableVisible" title="Shipping address">
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </i-drawer>

  <!-- Form drawer -->
  <i-drawer v-model="drawerFormVisible" title="实例">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <i-button type="handle" @click="drawerFormVisible = false">取消</i-button>
      <i-button fill @click="drawerFormVisible = false">确认</i-button>
    </template>
  </i-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const drawerTableVisible = ref(false)
const drawerFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }
]
</script>

<style lang="scss" scoped></style>
