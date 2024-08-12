# Virtual-List 虚拟列表

## 基础用法

通过 `data` 传递数据，`node-key` 设置唯一标识，`item-height` 设置每项的高度。

:::demo

virtual-list/basic

:::

## 分页用法

通过 `isPaging` 来开启分页功能

:::demo

virtual-list/paging

:::

## 动态高度

通过 `isDynamicHeight` 来开启动态高度计算

:::demo

virtual-list/dynamicHeight

:::

## API

### Virtual-List 属性

| 参数              | 说明                | 类型    | 默认值 |
| ----------------- | ------------------- | ------- | ------ |
| data              | 数据源              | Array   | -      |
| node-key          | 唯一标识            | string  | `id`   |
| height            | 容器高度            | string  | 100%   |
| item-height       | 单个高度            | number  | 40     |
| limit             | 展示条数            | number  | 15     |
| is-paging         | 是否开启分页        | boolean | false  |
| offset            | 距离底部-px触发分页 | number  | 180    |
| is-dynamic-height | 是否为动态高度      | boolean | false  |

### Virtual-List 插槽

| 插槽名字 | 说明           | 返回值                   |
| -------- | -------------- | ------------------------ |
| default  | 自定义按钮内容 | item 数据源， index 下标 |

### Virtual-List 事件

| 事件名 | 说明     | 返回参数 |
| ------ | -------- | -------- |
| scroll | 滚动事件 | `Event`  |
| pullUp | 分页事件 | `Event`  |

### Virtual-List Exposes

| 方法名       | 说明                         | 返回参数        |
| ------------ | ---------------------------- | --------------- |
| reset        | 重置事件                     | `() => void`    |
| clear        | 清空事件                     | `() => void`    |
| update       | 更新事件                     | `() => void`    |
| scrollTo     | 滚动到指定位置               | `(x,y) => void` |
| scrollToById | 通过`node-key`滚动到指定位置 | `(id) => void`  |
