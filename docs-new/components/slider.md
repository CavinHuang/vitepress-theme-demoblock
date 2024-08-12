# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

## 基础用法

在拖动滑块时，显示当前值

通过设置绑定值自定义滑块的初始值

:::demo

slider/basic

:::

## 范围选择

你还可以选择一个范围值

配置 `modelValue` 为数组以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。

:::demo

slider/range

:::

## 步长

设置 `step` 属性可以让滑块在固定的步长内移动

:::demo

slider/step

:::

## 禁用状态

设置 `disabled` 属性可以让滑块处于禁用状态

:::demo

slider/disabled

:::

## 垂直显示

设置 `vertical` 属性可以让滑块垂直显示

:::demo

slider/vertical

:::

## API

### slider 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | slider的值 | `number` \| `number[]` | `0` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长 | `number` | `1` |
| disabled | 是否禁用 | `boolean` | `false` |
| showTooltip | 是否显示 tooltip | `boolean` | `true` |
| vertical | 是否垂直显示 | `boolean` | `false` |

### slider 插槽

| name | 说明 |
| ---- | ---- |
| default | 自定义内容 |

### slider 事件
| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| change | 开关状态切换时触发 | `checked: boolean` |

### slider Exposes

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- |
| default | 对外暴露实例 | `Ref<HTMLDivElement>` |
