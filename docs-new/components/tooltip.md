# Tooltip 弹出提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

基础用法

:::demo

tooltip/basic

:::

## API

### Tooltip 属性

| 参数             | 说明                           | 类型                                                                                                                                                                                       | 默认值  |
| ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| content          | 弹出提示的内容                 | string                                                                                                                                                                                     | -       |
| placement        | 弹出位置                       | `'top'` \| `'top-start'` \| `'top-end'` \| `'right'` \| `'right-start'` \| `'right-end'` \| `'bottom'` \| `'bottom-start'` \| `'bottom-end'` \| `'left'` \| `'left-start'` \| `'left-end'` | `'top'` |
| disabled         | 是否禁用                       | `boolean`                                                                                                                                                                                  |
| customClass      | 自定义样式                     | `IClassNames`                                                                                                                                                                              | -       |
| disabled         | 是否禁用                       | `boolean`                                                                                                                                                                                  |
| keepAliveOnHover | 鼠标移入时是否保持弹出信息显示 | `boolean`                                                                                                                                                                                  |  |
| showArrow        | 是否显示箭头                   | `boolean`                                                                                                                                                                                  | `true`  |
| trigger | 触发方式 | `'click'` \| `'hover'` \| `'focus'` | `'click'` |
| isDark | 是否为暗色主题 | `boolean` | `false` |

### Tooltip 插槽

| name    | 说明       |
| ------- | ---------- |
| trigger | 触发元素，需要用一个节点包括 |

### Tooltip 事件

| 事件名 | 说明   | 参数 |
| ------ | ------ | ---- |
| 待补充 | 待补充 | -    |

### Tooltip Exposes

| 方法名 | 说明   | 参数 |
| ------ | ------ | ---- |
| 待补充 | 待补充 | -    |
