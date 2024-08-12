# Popover 气泡卡片

Popover 在内容周围弹出一些隐藏的信息。Popover 里面没什么内置样式，在里面填什么主要靠你了。

如果你只想展示一些基本的文本内容，使用 Tooltip。

## 基础用法

:::demo

popover/basic

:::

## 触发方式

:::demo

popover/trigger

:::

## API

### Popover 属性

| 参数                  | 说明                                                            | 类型                                                                                                                                                                                       | 默认值    |
| --------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| model-value / v-model | 是否展示 popover                                                | `boolean`                                                                                                                                                                                  | `false`   |
| trigger               | 触发方式                                                        | `'click'` \| `'hover'`                                                                                                                                                                     | `'hover'` |
| arrowClass            | 自定义箭头样式                                                  | `IClassNames`                                                                                                                                                                              | -         |
| customClass           | 自定义样式                                                      | `IClassNames`                                                                                                                                                                              | -         |
| placement             | 弹出位置                                                        | `'top'` \| `'top-start'` \| `'top-end'` \| `'right'` \| `'right-start'` \| `'right-end'` \| `'bottom'` \| `'bottom-start'` \| `'bottom-end'` \| `'left'` \| `'left-start'` \| `'left-end'` | `'top'`   |
| disabled              | 是否禁用                                                        | `boolean`                                                                                                                                                                                  | `false`   |
| flip                  | 是否在当前放置方式不能提供足够空间的时候调整弹出信息的位置      | `boolean`                                                                                                                                                                                  | `true`    |
| duration              | 悬浮关闭弹出信息的延迟                                          | `number`                                                                                                                                                                                   | `100`     |
| keepAliveOnHover      | 鼠标移入时是否保持弹出信息显示                                  | `boolean`                                                                                                                                                                                  | `false`   |
| showArrow             | 是否显示箭头                                                    | `boolean`                                                                                                                                                                                  | `true`    |
| appendTo              | 弹出信息的挂载节点                                              | `string`                                                                                                                                                                                   | `body`    |
| width                 | 弹出信息的宽度 'target' 表示 popover 的宽度会和它的触发元素一致 | `string`                                                                                                                                                                                   | -         |
| closeOnClickOutside   | 点击外部是否关闭弹出信息                                        | `boolean`                                                                                                                                                                                  | `true`    |
| isDark                | 是否为暗色主题                                                  | `boolean`                                                                                                                                                                                  | `false`   |
| transition            | 自定义过渡动画                                                  | `string`                                                                                                                                                                                   | `popover` |
| destroyOnClose        | 关闭时销毁弹出信息                                              | `boolean`                                                                                                                                                                                  | `true`    |

### Popover 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| trigger | 触发元素   |

### Popover 事件

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| open   | 动画打开时回调 | -    |
| opened | 动画打开后回调 | -    |
| close  | 动画关闭时回调 | -    |
| closed | 动画关闭后回调 | -    |

### Popover Exposes

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| open   | 手动打开 | -    |
| close  | 手动关闭 | -    |
