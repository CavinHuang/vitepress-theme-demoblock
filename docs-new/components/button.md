# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` 来定义按钮的类型。通过 `ghost` 、`secondary`、`text` 来定义按钮的样式， 通过 `disabled` 来定义按钮的禁用状态。

:::demo

button/basic

:::



## 防抖按钮

使用 `debounce` 和 `wait` 来定义按钮的防抖时间。一般防抖按钮的使用场景为：搜索功能，输入框等。


:::demo

button/debounce

:::

## API

### Button 属性

| 参数       | 说明                        | 类型                        | 默认值    |
| ---------- | --------------------------- | --------------------------- | --------- |
| type       | 按钮类型                    | `default`、`delete`         | `default` |
| text       | 是否是文本按钮              | boolean                     | false     |
| ghost      | 是否是幽灵按钮              | boolean                     | false     |
| loading    | 是否加载中                  | boolean                     | false     |
| secondary  | 是否为次要按钮              | boolean                     | false     |
| disabled   | 是否禁用                    | boolean                     | false     |
| icon       | icon 名字                   | string                      | -         |
| suffix-icon | 文字后面的 icon             | string                      | -         |
| native-type | 原生 type 属性              | `button`、`submit`、`reset` | `button`  |
| autofocus  | 原生 focus 属性             | boolean                     | false     |
| debounce   | 是否防抖                    | boolean                     | false     |
| wait       | 防抖时间，开启后默认`500ms` | number                      | `500`     |

### Button 插槽

| 插槽名字 | 说明           |
| -------- | -------------- |
| default  | 自定义按钮内容 |

### Button 事件

| 事件名 | 说明     | 返回参数 |
| ------ | -------- | -------- |
| click  | 点击事件 | `Event`  |
