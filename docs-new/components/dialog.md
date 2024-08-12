# Dialog 弹窗

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 `model-value` / `v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 `Dialog`。 `Dialog` 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。

:::demo

dialog/basic

:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。

:::demo

dialog/custom-content

:::

## 自定义头部

Dialog 的头部可以通过 `header` 插槽来自定义。

:::demo

dialog/custom-header

:::

::: tip
before-close 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 footer 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 before-close 的相关逻辑。
:::

## 关闭前校验

可以通过 `before-close` 属性来校验关闭 Dialog 的行为。 `before-close` 是一个函数，它接收一个 `done` 回调函数作为参数。 你可以在 `before-close` 中调用 `done` 来关闭 Dialog，也可以通过返回 `false` 来阻止 Dialog 关闭。

:::demo

dialog/before-close

:::

## API

### Dialog 属性

| 参数                  | 说明                                                                                            | 类型                             | 默认值    |
| --------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| model-value / v-model | 是否显示弹窗                                                                                    | boolean                          | `false`   |
| title                 | 标题                                                                                            | string                           | `''`      |
| subtitle              | 副标题                                                                                          | string                           | `''`      |
| width                 | 宽度                                                                                            | string                           | `640px`   |
| height                | 高度                                                                                            | string                           | `auto`    |
| header                | 是否显示头部                                                                                    | boolean                          | `true`    |
| showMask              | 是否显示遮罩                                                                                    | boolean                          | `true`    |
| maskClass             | 遮罩层样式                                                                                      | string                           | `''`      |
| appendTo              | 插入位置                                                                                        | string                           | `body`    |
| customClass           | 自定义类名                                                                                      | IClassNames                      | `''`      |
| showClose             | 是否显示关闭按钮                                                                                | boolean                          | `true`    |
| beforeClose           | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候. | ((done: DoneFn) => void) => void | -         |
| closeOnClickMask      | 是否允许点击遮罩层关闭                                                                          | boolean                          | `true`    |
| closeOnPressEscape    | 是否允许按 ESC 关闭                                                                             | boolean                          | `true`    |
| destroyOnClose        | 关闭时销毁 Dialog 中的元素                                                                      | boolean                          | `false`   |
| closeIcon             | 关闭按钮图标                                                                                    | string                           | `i-close` |

### Dialog 事件

| 事件名 | 说明                        |
| ------ | --------------------------- |
| open   | Dialog 打开时触发           |
| close  | Dialog 关闭时触发           |
| opened | Dialog 打开且动画结束后触发 |
| closed | Dialog 关闭且动画结束后触发 |

### Dialog 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| header  | 自定义头部 |
| footer  | 自定义底部 |

### Dialog Exposes

| 方法名 | 说明       | 参数 |
| ------ | ---------- | ---- |
| open   | 打开对话框 | -    |
| close  | 关闭对话框 | -    |
