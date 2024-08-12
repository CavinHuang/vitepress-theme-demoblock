# VirtualSelect 虚拟下拉组件

## 基础用法

基础用法

:::demo

virtual-select/basic

:::

## 多选

通过 `multiple` 属性可以开启多选

:::demo

virtual-select/multiple

:::

## 禁用全部 和 禁用方法 和 禁用选项

通过 `disabled` 属性可以禁用全部，也支持 `disabled-method` 方法禁用单个，或者在 `data` 传递禁用属性， 通过 `field` 对象设置禁用的字段

:::demo

virtual-select/disabled

:::

## 搜索功能 或者 自定义过滤方法

通过 `filterable` 属性可以开启搜索功能，也支持 `filter-method` 方法进行自定义过滤

:::tip

如果 `filterable` 和 `filter-method` 都开启，优先使用 `filter-method`过滤数据，在从过滤后的数据里面进行搜索功能

:::

:::demo

virtual-select/filterable

:::

## API

### virtual-select 属性

:::tip

虚拟下拉组件的 `方法`、`事件` 和 `select 组件` 是一样的 [select 组件](/components/select)。

:::

| 参数              | 说明                | 类型    | 默认值 |
| ----------------- | ------------------- | ------- | ------ |
| item-height       | 单个高度            | number  | 40     |
| limit             | 展示条数            | number  | 15     |
| offset            | 距离底部-px触发分页 | number  | 180    |
| is-paging         | 是否开启分页        | boolean | false  |
| is-dynamic-height | 是否为动态高度      | boolean | false  |

