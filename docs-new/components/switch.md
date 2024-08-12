# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。 可以使用 --switch-on-color 属性与 --switch-off-color 属性来设置开关的背景色。

:::demo

switch/basic

:::

## 禁用状态

通过设置 disabled 属性来禁用开关。

:::demo

switch/disabled

:::

## 自定义颜色

通过设置 --switch-on-color 属性与 --switch-off-color 属性来设置开关的背景色。

:::demo

switch/color

:::

## 自定义类型

你可以设置 active-value 和 inactive-value 属性， 它们接受 Boolean、String 或 Number 类型的值。

:::demo

switch/value-type

:::

## 加载状态

通过设置 loading 属性来显示加载状态。

:::demo

switch/loading

:::

## 阻止切换

通过设置 before-change 属性来阻止切换。

:::demo

switch/before-change

:::

## API

### Switch 属性

| 参数          | 说明                                                                  | 类型                                     | 默认值  |
| ------------- | --------------------------------------------------------------------- | ---------------------------------------- | ------- |
| model-value / v-model    | 绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型  | SwitchValue                              | `false` |
| activeValue   | 打开时的值                                                            | SwitchValue                              | `true`  |
| inactiveValue | 关闭时的值                                                            | SwitchValue                              | `false` |
| disabled      | 是否禁用                                                              | `boolean`                                | `false` |
| loading       | 是否加载中                                                            | `boolean`                                | `false` |
| beforeChange  | 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换 | `(value) => boolean \| Promise<boolean>` | -       |

### Switch 事件

| 事件名 | 说明                   | 回调参数             |
| ------ | ---------------------- | -------------------- |
| change | 开关状态发生变化时触发 | `value: SwitchValue` |
