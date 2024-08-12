# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，4.5 秒后自动消失。

:::demo

message/basic

:::

## 不同的类型

提供四种不同的样式，包括成功、警告、信息和错误。

:::demo

message/type

:::

## 自定义图标

可以通过 `icon` 属性自定义图标。

:::demo

message/icon

:::

## 自定义Vnode内容

可以通过 `content` 属性自定义Vnode内容。

:::demo

message/content

:::

## 打开之后操作内容

可以通过 消息实例 更改内容。

:::demo

message/change

:::

## API

### Message 属性

| 参数        | 说明                         | 类型                                          | 默认值    |
| ----------- | ---------------------------- | --------------------------------------------- | --------- |
| type        | 消息提示类型                 | `'success' \| 'info' \| 'warning' \| 'error'` | `default` |
| content     | 消息提示内容                 | `string \| VNode \| (() => VNode \| string)`  | -         |
| duration    | 消息提示持续时间，单位为毫秒 | `number`                                      | `4500`    |
| icon        | 自定义图标                   | `string \| VNode \| (() => VNode \| string)`  | -         |
| onClose     | 关闭时的回调函数             | `() => void`                                  | -         |
| customClass | 自定义类名                   | `IClassNames`                                 | -         |
| appendRight | 自定义右侧内容               | `string \| VNode \| (() => VNode \| string)`  | -         |
