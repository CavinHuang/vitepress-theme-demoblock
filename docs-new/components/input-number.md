# InputNumber 数字输入框

## 基础用法

设置 `max` 或者 `min` 属性来限制输入框的值。设置 `precision` 属性来限制小数位数。

:::demo

input-number/basic

:::

## 格式化操作

设置 `formatter` 属性来自定义输入框的展示值。设置 `digital-delimiter` 和 `decimal-separator` 来自定义数字和小数分隔符。

:::demo

input-number/decimal

:::

## 禁用 或 只读

设置 `disabled` 属性来禁用输入框。设置 `readonly` 属性来设置为只读。

:::demo

input-number/disabled

:::

## 通过插槽自定义前后缀

设置 `prefix` 和 `suffix` 来自定义前后缀。

:::demo

input-number/slot

:::

## 自定义控制

设置 `controls` 属性来自定义控制按钮。设置 `controls-position` 属性来自定义控制按钮的位置。设置 `controls-icon` 来自定义控制按钮的图标。

:::demo

input-number/controls

:::

## API

### input-number 属性

| 参数                  | 说明                   | 类型                                         | 默认值       |
| --------------------- | ---------------------- | -------------------------------------------- | ------------ |
| model-value / v-model | 输入值                 | `string \| number`                           | -            |
| disabled              | 禁用                   | `boolean`                                    | `false`      |
| readonly              | 只读                   | `boolean`                                    | `false`      |
| placeholder           | 占位文本               | `string`                                     | -            |
| max                   | 最大值                 | `number`                                     | -            |
| min                   | 最小值                 | `number`                                     | -            |
| precision             | 小数位数               | `number`                                     | -            |
| step                  | 步长                   | `number`                                     | `1`          |
| decimal-separator     | 小数分隔符             | `string`                                     | `.`          |
| digital-delimiter     | 数字分隔符             | `string`                                     | -            |
| formatter             | 格式化展示在输入框的值 | `(value: string \| number) => string`        | -            |
| controls              | 显示控制               | `boolean`                                    | `true`       |
| controls-position     | 控制按钮位置           | `both-sides \| right`                        | `both-sides` |
| controls-icon         | 控制按钮图标           | `{ addIcon?: string; subtractIcon?: string}` | -            |

### input-number 插槽

| name   | 说明                 |
| ------ | -------------------- |
| prefix | 输入框头部自定义内容 |
| suffix | 输入框尾部自定义内容 |

### input-number 事件

| 事件名 | 说明       | 参数                                |
| ------ | ---------- | ----------------------------------- |
| change | 值变化触发 | `(value: number) => void`           |
| input  | 输入值     | `(value: number \| string) => void` |
| blur   | 失去焦点   | -                                   |

