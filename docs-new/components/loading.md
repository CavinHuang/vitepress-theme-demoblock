# Loading 加载中

## 基础用法

通过插槽使用

:::demo

loading/basic

:::

## 通过方法 `showLoading` 和 `hideLoading` 控制加载状态

:::demo

loading/handleFn

:::

## API

### Loading 属性

| 参数        | 说明              | 类型    | 默认值  |
| ----------- | ----------------- | ------- | ------- |
| text        | 加载中的内容      | string  | -       |
| loading     | 是否加载中        | boolean | `false` |
| stroke-color | stroke 自定义颜色 | string  | -       |
| text-color   | 文本自定义颜色    | string  | -       |

### Loading 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |


## 函数 - API

### Loading 函数属性

| 参数   | 说明                       | 类型   | 默认值 |
| ------ | -------------------------- | ------ | ------ |
| text   | 加载中的内容               | string | -      |
| target | 目标元素，传入类名或者id名 | string | `body` |
