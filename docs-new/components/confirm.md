# Confirm 确认弹窗

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

:::tip

Conform 的作用是美化系统自带的 confirm，因此适合展示较为简单的内容。 如果需要弹出较为复杂的内容，请使用 Dialog。

:::

## 基础用法

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

:::demo

confirm/basic

:::

## 使用VNode

title, message, footer, 可以是 VNode。

:::tip
如果组件只有默认槽，可以使用单个插槽函数进行传递。
[vue3 h函数详解](https://cn.vuejs.org/api/render-function.html#render-function-apis)
:::

:::demo

confirm/vnode

:::

## 定制化动作confirm

使用了 `showCancel` 字段，用于显示取消按钮。 使用 cancelText 来自定义取消按钮文本（Confirm 按钮也具有相同的字段，在文末的 API 说明中有完整的字段列表）。

使用了 beforeClose 属性， 当 beforeClose 被赋值且被赋值为一个回调函数时，在消息弹框被关闭之前将会被调用，并且可以通过该方法来阻止弹框被关闭。 它是一个接收两个参数：action和done 的方法。 使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加 loading 状态等；此时若需要关闭实例，可以调用 done 方法（若在 beforeClose 中没有调用 done，则弹框便不会关闭）。

:::demo

confirm/action

:::

## 删除前的确认- custom confirm

在删除操作前，需要用户确认是否真的要删除时，可以使用此对话框。

:::demo

confirm/delete

:::

## API

### Confirm 属性

| 参数                      | 说明                               | 类型                                                                              | 默认值  |
| ------------------------- | ---------------------------------- | --------------------------------------------------------------------------------- | ------- |
| model-value / v-model                | 是否显示弹窗                       | `boolean`                                                                         | `false` |
| title                     | 标题                               | `string \| VNode \| (() => VNode \| string)`                                      | -       |
| type                      | 类型                               | `default \| delete`                                                             | `default`  |
| message                   | 消息内容                           | `string \| VNode \| (() => VNode \| string)`                                      | -       |
| showClose                 | 是否显示close按钮                  | `boolean`                                                                         | `true`  |
| showCancel                | 是否显示取消按钮                   | `boolean`                                                                         | `false` |
| cancelText                | 取消按钮文案                       | `string`                                                                          | `取消`  |
| showConfirm               | 是否显示确认按钮                   | `boolean`                                                                         | `true`  |
| confirmText               | 确认按钮文案                       | `string`                                                                          | `确定`  |
| showMask                  | 是否显示遮罩层                     | `boolean`                                                                         | `true`  |
| closeOnClickMask          | 是否允许点击遮罩层关闭弹窗         | `boolean`                                                                         | `true`  |
| closeOnPressEscape        | 是否允许按esc键关闭弹窗            | `boolean`                                                                         | `true`  |
| beforeClose               | 关闭前的回调函数，会暂停弹窗的关闭 | `(action: ConfirmAction, state: ConformInstanceState,  done: () => void) => void` | -       |
| confirmButtonProps        | 确认按钮的props                    | `Partial<ButtonProps>`                                                            | -       |
| cancelButtonProps         | 取消按钮的props                    | `Partial<ButtonProps>`                                                            | -       |
| footer                    | 自定义底部内容                     | `string \| VNode \| (() => VNode \| string)`                                      | -       |
| hasFooter                 | 是否显示底部                       | `boolean`                                                                         | `true`  |
| distinguishCancelAndClose | 区分取消和关闭按钮                 | `boolean`                                                                         | `false` |

::: details ConformInstanceState类型定义如下：

```typescript
/**
 * 确认弹窗实例状态
 */
export type ConformInstanceState = {
  /**
   * @description 当前的操作
   */
  action: ConfirmAction;
  /**
   * @description 确认按钮的loading状态
   */
  confirmLoading: boolean;
  /**
   * @description 确认按钮的文字
   */
  confirmText: string;
  /**
   * @description 取消按钮的文字
   */
  cancelText: string;
};
```

:::
