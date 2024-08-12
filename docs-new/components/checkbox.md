# Checkbox 复选框

在一组备选项中进行多选。

## 基础用法

基础用法

:::demo

checkbox/basic

:::

## 禁用状态

禁用状态

:::demo

checkbox/disabled

:::


## 分组

使用`checkbox-group`组件可以实现多个`checkbox`的分组

:::demo

checkbox/group

:::

## 分组 disabled

使用`checkbox-group`组件可以实现多个`checkbox`的分组

:::demo

checkbox/group-disabled

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 测试 | 测试 | `default` |

### Slots

| name | 说明 |
| ---- | ---- |
| default | 自定义内容 |

### Events
| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| change | 开关状态切换时触发 | `checked: boolean` |

### Exposes

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- |
| default | 对外暴露实例 | `Ref<HTMLDivElement>` |
