# Material-Preview 素材预览

## 基础用法

:::demo

material-preview/basic

:::

## 素材组预览 - 函数调用

:::demo

material-preview/handleFn

:::

## API

### Material-Preview 属性

| 参数                  | 说明                       | 类型          | 默认值  |
| --------------------- | -------------------------- | ------------- | ------- |
| model-value / v-model | 是否打开（函数调用不支持） | boolean       | `false` |
| data                  | 素材原数据                 | Array、Object | -       |
| current               | 当前预览的下标             | number        | 0       |
| placeholder           | 素材占位符，缩略图或默认图 | string        | -       |
| fail-src               | 素材加载失败的图片         | string        | -       |
| field                 | 数据字段，详细看下面配置   | Object        | -       |

###  Field 参数

| 参数 | 说明     | 类型             | 默认值  |
| ---- | -------- | ---------------- | ------- |
| url  | 素材地址 | string           | -       |
| type | 素材类型 | `image`、`video` | `image` |
