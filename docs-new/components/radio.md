# Radio 单选


## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 `Radio` 组件，只需要设置v-model绑定变量， 选中意味着变量的值为相应 `Radio` value属性的值， value可以是String、Number 或 Boolean。

:::demo

radio/basic

:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

:::demo

radio/disabled

:::



## API

### radio 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 选中项绑定值 | `string` / `number` / `boolean` | - |
| value | radio 的 value | `string` / `number` / `boolean` | - |
| disabled | 是否禁用 | `boolean` | false |
| name | 原生属性 | `string` | - |
| label | 描述 | `string` | - |


### radio 插槽

| name | 说明 |
| ---- | ---- |
| default | 自定义label |

### radio 事件
| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| change | 状态切换时触发 | value: string / number / boolean  |
