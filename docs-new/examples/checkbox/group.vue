<template>
  <div class="flex flex-col">
    <i-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
      全选
    </i-checkbox>
    <div class="mt-10">
      <i-checkbox-group v-model="checkboxList" @change="handleCheckedGroupChange">
        <i-checkbox v-for="city in optionList" :key="city" :value="city" :label="city" />
      </i-checkbox-group>
    </div>
    <pre class="mt-20">
当前选中：{{ checkboxList }}
    </pre>
  </div>
</template>
<script setup lang="ts">
import type { CheckboxValue } from 'icc-ui'
import { ref } from 'vue'
const checkboxList = ref<string[]>([])
const indeterminate = ref(false)

const optionList = [
  '北京',
  '上海',
  '广州',
  '深圳',
  '杭州',
  '成都',
  '西安',
  '苏州',
  '南京',
  '天津',
  '重庆',
  '武汉',
  '长沙',
  '郑州',
  '青岛',
  '沈阳',
  '大连',
  '厦门'
]

const checkAll = ref(false)
const handleCheckAll = (value: CheckboxValue) => {
  checkboxList.value = value ? optionList : []
}

const handleCheckedGroupChange = (value: CheckboxValue[]) => {
  const checkedCount = value.length
  checkAll.value = optionList.length === checkedCount
  indeterminate.value = checkedCount > 0 && checkedCount < optionList.length
}
</script>
