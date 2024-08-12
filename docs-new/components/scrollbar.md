# Scrollbar 滚动条容器

:::demo

scrollbar/basic

:::

## API

### Scrollbar 属性

| 参数                | 说明                 | 类型                  | 默认值 |
| ------------------- | -------------------- | --------------------- | ------ |
| height              | 容器高度             | string                | 100%   |
| width               | 容器宽度             | string                | 100%   |
| bar-width            | 纵向 滚动条宽度      | number                | 6      |
| bar-height           | 横向 滚动条高度      | number                | 6      |
| is-vertical-bar       | 是否需展示纵向滚动条 | boolean               | true   |
| is-horizontal-bar     | 是否需展示横向滚动条 | boolean               | true   |
| always-vertical-bar   | 一直显示纵向滚动条   | boolean               | true   |
| always-horizontal-bar | 一直显示横向滚动条   | boolean               | true   |
| tag                 | 容器元素名称         | string                | div    |
| wrap-class           | 容器样式名           | string、Array、Object | -      |
| content-class        | 内容样式名           | string、Array、Object | -      |
| content-style        | 内容样式             | Object、string        | -      |

### Scrollbar 插槽

| 插槽名字 | 说明           |
| -------- | -------------- |
| default  | 自定义按钮内容 |

### Scrollbar 事件

| 事件名 | 说明         | 返回参数  |
| ------ | ------------ | --------- |
| scroll | 滚动事件     | `Event`   |
| load   | 容器加载事件 | `DOMRect` |

### Scrollbar Exposes

| 事件名              | 说明           | 返回参数        |
| ------------------- | -------------- | --------------- |
| update              | 更新事件       | `() => void`    |
| scrollTo            | 滚动到指定位置 | `(x,y) => void` |
| scrollbarContentRef | 滚动条实例     | `HTMLElement`   |
| scrollContentRect   | 内容的宽高     | `Object`        |
| position            | 滚动的位置     | `Object`        |
