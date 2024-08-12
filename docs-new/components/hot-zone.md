# Hot-Zone 热区

## 基础用法

通过 `data` 传入热区事件，通过 `width` 和 `height` 设置热区的宽高。`data` 可以是数组也可以是对象

:::demo

hot-zone/basic

:::

## 数组用法

:::demo

hot-zone/hotArr

:::

## API

### Hot-Zone 属性

| 参数     | 说明         | 类型          | 默认值 |
| -------- | ------------ | ------------- | ------ |
| data     | 热区数据     | Object、Array | []     |
| width    | 热区宽度     | string        | -      |
| height   | 热区高度     | string        | -      |
| disabled | 热区是否禁用 | boolean       | false  |

### Data 参数

| 参数   | 说明         | 类型   | 默认值 |
| ------ | ------------ | ------ | ------ |
| width  | 热区宽度     | number | -      |
| height | 热区高度     | number | -      |
| left   | 热区距离左边 | number | -      |
| top    | 热区距离顶部 | number | -      |

### Hot-Zone 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

### Hot-Zone 事件

| 事件名 | 说明         | 参数                 |
| ------ | ------------ | -------------------- |
| change | 热区变化事件 | 返回`热区数据`       |
| load   | 热区加载完毕 | 返回`热区宽度、高度` |
| leave  | 离开热区事件 | -                    |
