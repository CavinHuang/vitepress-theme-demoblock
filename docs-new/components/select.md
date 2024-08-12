# Select 下拉框

## 基础用法

基础用法

:::demo

select/basic

:::

## 多选

通过 `multiple` 属性可以开启多选

:::demo

select/multiple

:::

## 禁用全部 和 禁用方法 和 禁用选项

通过 `disabled` 属性可以禁用全部，也支持 `disabled-method` 方法禁用单个，或者在 `data` 传递禁用属性， 通过 `field` 对象设置禁用的字段

:::demo

select/disabled

:::

## 搜索功能 或者 自定义过滤方法

通过 `filterable` 属性可以开启搜索功能，也支持 `filter-method` 方法进行自定义过滤

:::tip

如果 `filterable` 和 `filter-method` 都开启，优先使用 `filter-method`过滤数据，在从过滤后的数据里面进行搜索功能

:::

:::demo

select/filterable

:::

## API

### select 属性

| 参数                  | 说明                                          | 类型                    | 默认值         |
| --------------------- | --------------------------------------------- | ----------------------- | -------------- |
| data                  | 传入的值                                      | `Array`                 | `[]`           |
| field                 | 选项值的字段                                  | `Object`                | -              |
| model-value / v-model | 绑定的值                                      | `string、number、Array` | -              |
| clearable             | 是否可清空                                    | `boolean`               | `true`         |
| clearIcon             | 清空icon                                      | `string`                | `i-close-fill` |
| placeholder           | 占位符                                        | `string`                | -              |
| autocomplete          | 是否开启自动补全                              | `string`                | `off`          |
| placement             | 弹出框的位置                                  | `string`                | `bottom`       |
| disabled              | 是否禁用                                      | `boolean`               | `false`        |
| disabled-method        | 禁用方法，返回`true`为禁用                    | `(item)=>boolean`       | -              |
| filterable            | 是否开启搜索功能                              | `boolean`               | `false`        |
| filter-method          | 过滤方法，返回`true`为当前展示数据            | `(item)=>boolean`       | -              |
| filter-wait            | 过滤延迟时间，单位毫秒                        | `number`                | `600`          |
| multiple              | 是否开启多选                                  | `boolean`               | `false`        |
| multiple-limit         | 多选限制                                      | `number`                | `0`            |
| tag-limit              | `multiple` 属性设置为 `true` 时，标签展示条数 | `number`                | `2`            |
| tag-icon               | 标签展示图标                                  | `string`                | -              |
| tag-color              | 标签展示颜色                                  | `string`                | -              |
| tag-clearable          | 标签是否可删除                                | `boolean`               | `true`         |

### field 属性

| 参数     | 说明               | 类型     | 默认值     |
| -------- | ------------------ | -------- | ---------- |
| key       | 选项值的`唯一标识` | `string` | `id`       |
| label    | 选项值的文案字段   | `string` | `label`    |
| value    | 选项值的值字段     | `string` | `value`    |
| disabled | 选项值的禁用字段   | `string` | `disabled` |

### select 插槽

| name    | 说明                   | 参数         |
| ------- | ---------------------- | ------------ |
| default | 自定义下拉内容         | 传入的`data` |
| tag     | 自定义标签             | `item`       |
| footer  | 下拉组件底部自定义内容 | -            |
| empty   | 暂无数据自定义内容     | -            |

### select 事件

| 事件名         | 说明                  | 参数                  |
| -------------- | --------------------- | --------------------- |
| change         | 选中值更改时触发      | `({ids,data})=> void` |
| visible-change | 下拉框出现/隐藏时触发 | `()=> void`           |
| clear          | 清空时触发            | `()=> void`           |

### select Exposes

| 方法名    | 说明         | 参数                                 |
| --------- | ------------ | ------------------------------------ |
| selectRef | 对外暴露实例 | `ShallowRef<HTMLDivElement \| null>` |
