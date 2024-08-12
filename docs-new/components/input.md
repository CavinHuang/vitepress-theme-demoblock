# Input 输入框

## 基础用法

基础用法

:::demo

input/basic

:::

## 格式化展示和解析输出

通过 `formatter` 格式化展示在输入框的值，通过 `parser` 解析输出值，通常 `formatter` 和 `parser` 都是配合使用。

:::demo

input/format

:::

## 显示字数限制

通过 `showWordLimit` 属性可以显示字数限制，如果没有设置 `maxlength` 属性则不生效。

:::demo

input/limit

:::

## 自定义 icon 与 插槽

可替换各种前后缀图标，通过 `prefixIcon` 和 `suffixIcon` 属性来设置前后缀图标。也可以通过插槽 `prefix` 和 `suffix` 来自定义前后缀图标以及内容。

:::demo

input/icon

:::

## 禁用、只读、可删除内容

通过 `disabled` 和 `readonly` 属性来设置是否禁用和只读。通过 `clearable` 属性来设置是否可删除内容。删除 icon 可以通过 `clearIcon` 替换

:::demo

input/clear

:::

## textarea

通过 `type="textarea"` 来设置为 textarea 类型

:::demo

input/textarea

:::

## textarea 自适应高度

通过 `autosize` 来设置自适应高度，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }， 1 rows 的高度为 40px

:::demo

input/autosize

:::

## API

 <!--
| type                  | 输入框类型            | string，等同原生type | `text`  | 
| max                   | 原生属性-最大值       | number              | -     |
| min                   | 原生属性-最小值       | number              | -       | 
      -->

### input 属性

<!-- [input-type类型查看]('https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#input_%E7%B1%BB%E5%9E%8B') -->

| 参数                  | 说明                               | 类型                                  | 默认值  |
| --------------------- | ---------------------------------- | ------------------------------------- | ------- |
| type                  | 输入框类型，只有`text \| textarea` | string                                | `text`  |
| model-value / v-model | 输入值，会转化为`string`类型       | string、number                        | -       |
| show-word-limit       | 是否显示字数限制                   | boolean                               | `false` |
| clearable             | 是否可清空                         | boolean                               | `false` |
| prefix-icon           | 前缀图标                           | string                                | -       |
| suffix-icon           | 后缀图标                           | string                                | -       |
| clear-icon            | 清空图标                           | string                                | -       |
| placeholder           | 占位符                             | string                                | -       |
| disabled              | 原生属性-是否禁用                  | boolean                               | `false` |
| readonly              | 原生属性-只读                      | boolean                               | `false` |
| autofocus             | 原生属性-自动获取焦点              | boolean                               | `false` |
| minlength             | 原生属性-最小输入长度              | string、number                        | -       |
| maxlength             | 原生属性-最大输入长度              | string、number                        | -       |
| autocomplete          | 原生属性-自动补全                  | string                                | `off`   |
| formatter             | 格式化展示在输入框的值             | `(value: string \| number) => string` | -       |
| parser                | 解析输出值                         | `(value: string) => string \| number` | -       |

### input 插槽

| name   | 说明                 |
| ------ | -------------------- |
| prefix | 输入框头部自定义内容 |
| suffix | 输入框尾部自定义内容 |

### input 事件

| 事件名  | 说明     | 参数                                          |
| ------- | -------- | --------------------------------------------- |
| input   | 输入事件 | `(value: string \| number, e: Event) => void` |
| change  | 值变化触发 | `(value: string \| number, e: Event) => void` |
| focus   | 聚焦事件 | `(e: Event) => void`                          |
| blur    | 失焦事件 | `(e: Event) => void`                          |
| keydown | 键盘事件 | `(e: KeyboardEvent) => void`                  |
| clear   | 清空事件 | `() => void`                                  |

### input Exposes

| 方法名   | 说明                         | 参数                            |
| -------- | ---------------------------- | ------------------------------- |
| inputRef | 对外暴露实例                 | `ShallowRef<TargetRef \| null>` |
| focus    | 获取焦点                     | `() => void`                    |
| blur     | 失去焦点                     | `() => void`                    |
| clear    | 清除内容                     | `() => void`                    |
| resize   | 重新计算，仅限 textarea 有效 | `() => void`                    |

::: details TargetRef 类型定义如下：

```typescript
type TargetRef = HTMLInputElement | HTMLTextAreaElement;
```

:::
