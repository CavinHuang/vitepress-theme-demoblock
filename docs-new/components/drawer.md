# Drawer 抽屉

## 基础用法

呼出一个临时的侧边栏, 可以从多个方向呼出

:::demo

drawer/basic

:::

## 无header

当你不需要标题的时候，你可以将它移除。

通过设置 header 属性为 false 来控制是否显示标题。

:::demo

drawer/no-header

:::

## 自定义内容

通过 slot 可以自定义 Drawer 的内容。可以用来显示多种不同的交互。

:::demo

drawer/custom-content

:::

## 自定义头部

通过 slot 可以自定义 Drawer 的头部。可以用来显示多种不同的交互。

:::demo

drawer/custom-header

:::

:::tip
Drawer 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。 因此，如果需要执行 DOM 操作，或通过 ref 获取相应组件，请在 open 事件回调中进行。
:::

:::tip
Drawer 还提供一个 destroy-on-close 的 API，用来控制是否在 Drawer 隐藏之后把 Drawer 的默认插槽内的内容销毁。 当你需要每次打开抽屉都要调用 mounted 生命周期时，可以使用此 API。
:::

## API

### Drawer 属性

| 参数                  | 说明                                                                                            | 类型                             | 默认值    |
| --------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| model-value / v-model | 是否显示弹窗                                                                                    | boolean                          | `false`   |
| title                 | 标题                                                                                            | string                           | `''`      |
| subtitle              | 副标题                                                                                          | string                           | `''`      |
| width                 | 宽度                                                                                            | string                           | `640px`   |
| header                | 是否显示头部                                                                                    | boolean                          | `true`    |
| showMask              | 是否显示遮罩                                                                                    | boolean                          | `true`    |
| maskClass             | 遮罩层样式                                                                                      | string                           | `''`      |
| appendTo              | 插入位置                                                                                        | string                           | `body`    |
| customClass           | content自定义类名                                                                               | IClassNames                      | `''`      |
| showClose             | 是否显示关闭按钮                                                                                | boolean                          | `true`    |
| beforeClose           | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.       | ((done: DoneFn) => void) => void | -         |
| closeOnClickMask      | 是否允许点击遮罩层关闭                                                                          | boolean                          | `true`    |
| closeOnPressEscape    | 是否允许按 ESC 关闭                                                                             | boolean                          | `true`    |
| destroyOnClose        | 关闭时销毁 Dialog 中的元素                                                                      | boolean                          | `false`   |
| closeIcon             | 关闭按钮图标                                                                                    | string                           | `i-close` |
| placement             | 抽屉方向                                                                                        | 'right' \| 'left'                | `right`   |

### Drawer 事件

| 事件名 | 说明                        |
| ------ | --------------------------- |
| open   | Dialog 打开时触发           |
| close  | Dialog 关闭时触发           |
| opened | Dialog 打开且动画结束后触发 |
| closed | Dialog 关闭且动画结束后触发 |

### Drawer 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| header  | 自定义头部 |
| footer  | 自定义底部 |

### Drawer Exposes

| 方法名 | 说明       | 参数 |
| ------ | ---------- | ---- |
| open   | 打开对话框 | -    |
| close  | 关闭对话框 | -    |
