# Tag 标签

## 基础用法

通过 `prefixIcon` 或 `suffixIcon` 来传递前缀或后缀，通过 `closeable` 来设置是否可删除，通过 `disabled` 来设置是否禁用，通过 `round` 来设置是否是圆角, 通过 `color` 来设置主题色。

:::demo

tag/basic

:::

## 标签组

:::demo

tag/group

:::

## API

### Tag 属性

| 参数       | 说明                                                 | 类型    | 默认值    |
| ---------- | ---------------------------------------------------- | ------- | --------- |
| prefix-icon | 标签前缀icon                                         | string  | -         |
| suffix-icon | 标签后缀icon                                         | string  | -         |
| disabled   | 标签禁用                                             | boolean | `false`   |
| closeable  | 是否可删除                                           | boolean | `false`   |
| round      | 是否是圆角                                           | boolean | `false`   |
| color      | 标签主题色，通过主题色计算背景色，边框颜色，icon颜色 | string  | `#6e28f8` |
| clear-icon  | 删除icon                                             | boolean | `i-close` |

### Tag 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

### Tag 事件

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| clear  | 删除按钮点击事件 | -    |

## Group API

### Group 属性

| 参数   | 说明                                 | 类型                     | 默认值       |
| ------ | ------------------------------------ | ------------------------ | ------------ |
| data   | 原数据                               | Array、Object            | －           |
| limit  | 可展示几条,传0或不传,默认展示全部 　 | number                   | -            |
| orient | 展示的朝向                           | `horizontal`、`vertical` | `horizontal` |

### Group 插槽

| 插槽名字 | 说明           |
| -------- | -------------- |
| default  | 自定义按钮内容 |
