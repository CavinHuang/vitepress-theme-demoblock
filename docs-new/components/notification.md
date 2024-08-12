# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

在最简单的情况下，你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 duration 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。

:::demo

notification/basic

:::

## 不同类型的通知

我们提供了五种不同类型的提醒框：default、success、warning、info 和error。

Notification 组件准备了四种通知类型：success, warning, info, error。 他们可以设置 type 字段来修改，除上述的四个值之外的值会被忽略。

:::demo

notification/type

:::

## 自定义消息弹出的位置

可以让 Notification 从屏幕四角中的任意一角和屏幕的上下弹出

使用 `placement` 属性设置 Notification 的弹出位置， 支持四个选项：`top-right`、`top-left`、`bottom-right` 、 `bottom-left` 、 `top`、`bottom`， 默认为 top-right。

:::demo

notification/placement

:::

## vnode 用法

Notification 支持使用 vnode 作为 message/title/footer，这样可以实现更加复杂的内容。

:::demo

notification/vnode

:::

## API

### Notification 属性

| 参数             | 说明                                          | 类型                                                                                | 默认值      |
| ---------------- | --------------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| type             | 通知类型                                      | `"default" \| "success" \| "info" \| "warning" \| "error"`                          | `default`   |
| title            | 通知标题                                      | `string \| VNode \| ((scoped: { titleClass: string }) => VNode \| string)`          | ''          |
| message          | 通知正文                                      | `string \| VNode \| ((scoped: { messageClass: string }) => VNode \| string)`        | -           |
| duration         | 自动关闭的延时，单位毫秒。设为 0 则不自动关闭 | `number`                                                                            | `4500`      |
| placement        | 弹出位置                                      | `"top-right" \| "top-left" \| "bottom-right" \| "bottom-left" \| "top" \| "bottom"` | `top-right` |
| showClose        | 是否显示关闭按钮                              | `boolean`                                                                           | `true`      |
| customClass      | 自定义类名                                    | `string`                                                                            | -           |
| keepAliveOnHover | 鼠标悬停时是否保持显示                        | `boolean`                                                                           | `false`      |
| footer           | 通知底部                                      | `string \| VNode \| ((scoped: { footerClass: string }) => VNode \| string)`         | -           |

::: details NotificationInstanceState类型定义如下：

```typescript
/**
 * 确认弹窗实例状态
 */
export type ConformInstanceState = {
  /**
   * 关闭弹窗
   */
  destroy: () => void;

  /**
   * 关闭所有弹窗
   */
  destroyAll: () => void;
};
```

:::
