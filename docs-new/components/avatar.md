# Avatar 头像

头像用于代表用户或事物，支持图片、图标或字符展示。

## 基础用法

通过 `image`、`icon`、`label` 属性设置头像的展示。通过 `size`、`shape` 属性设置头像的大小和形状。通过 `fit` 属性来改变图片头像的展示方式。

:::demo

avatar/basic

:::

## 内容头像

通过 `content` 属性设置头像的内容。且可以通过 `position` 属性来设置内容的位置

:::demo

avatar/content

:::

## 随机头像

通过 `randomColor` 为 `true` 属性设置。

:::demo

avatar/randomColor

:::

## 头像组

通过 `randomColor` 为 `true` 属性设置。

:::demo

avatar/group

:::

## API

### Avatar 属性

| 参数        | 说明                         | 类型               | 默认值                 |
| ----------- | ---------------------------- | ------------------ | ---------------------- |
| image       | 图片地址                     | string             | -                      |
| fit         | 图片填充类型                 | `object-fit`值     | `contain`              |
| icon        | icon名称                     | string             | -                      |
| label       | 文本                         | string             | 默认展示第一个字符     |
| content     | 头像内容                     | string             | -                      |
| color       | 文字、icon颜色               | string             | `var(--primary-color)` |
| size        | 头像大小                     | number             | 50                     |
| shape       | 头像形状                     | `circle`、`square` | `circle`               |
| position    | 内容方向                     | `left`、`right`    | `right`                |
| opacity     | 文字、icon背景透明度         | number             | 0.1                    |
| formatter   | 文字头像的展示函数           | Function           | -                      |
| random-color | 文字、icon是否是随机颜色头像 | boolean            | `false`                |
| styles      | style自定义样式              | Object             | -                      |

### Avatar 插槽

| 插槽名字 | 说明          |
| -------- | ------------- |
| default  | 自定义content |


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
