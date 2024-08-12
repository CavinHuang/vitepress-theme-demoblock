# Card 卡片

## 基础用法

基础用法

:::demo

card/basic

:::

## API

### Card 属性

| 参数      | 说明           | 类型    | 默认值         |
| --------- | -------------- | ------- | -------------- |
| closeable | 是否有删除按钮 | boolean | `true`         |
| hoverable | 是否可悬停     | boolean | `true`         |
| disabled  | 是否禁用       | boolean | `false`        |
| clear-icon | 删除按钮icon   | string  | `i-close-fill` |

### Card 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

### Card 事件

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| clear  | 删除事件 | -    |
