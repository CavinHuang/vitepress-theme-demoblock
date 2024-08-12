# Material 素材展示

## 基础用法

基础用法，默认是 `image` 类型，可以通过修改 `type` 属性来切换；通过 `preview` 来定义是否支持预览；

:::demo

material/basic

:::

## 视频用法

通过 `type = video` 属性设置视频类型

:::demo

material/video

:::

## 懒加载用法

通过 `lazy` 属性设置图片懒加载，目前通过 `IntersectionObserver` API 来实现，图片属性 `loading` 默认为true

:::demo

material/lazy

:::

## 素材组 用法

通过 `data` 属性传递数据，也可以直接使用插槽，可以通过 `limit` 属性限制展示条数，也可以通过 `orient` 属性设置展示方向

:::demo

material/group

:::

## API

### Material 属性

| 参数        | 说明                                | 类型    | 默认值    |
| ----------- | ----------------------------------- | ------- | --------- |
| src         | 素材地址                            | string  | -         |
| placeholder | 素材占位符，缩略图或默认图          | string  | -         |
| fail-src     | 素材加载失败的图片                  | string  | -         |
| width       | 素材宽度                            | string  | `auto`    |
| height      | 素材高度                            | string  | `auto`    |
| type        | 素材类型,目前仅支持`image`、`video` | string  | `image`   |
| lazy        | 素材是否懒加载                      | boolean | true      |
| preview     | 素材是否可以预览                    | boolean | false     |
| tag-config   | 素材标签原生的配置                  | Object  | -         |
| content     | 素材文本                            | string  | -         |
| fit         | 素材裁剪配置,仅支持`image`          | string  | `contain` |


### Material 插槽

| 插槽名字 | 说明           |
| -------- | -------------- |
| default  | 自定义按钮内容 |

### Material 事件

| 事件名 | 说明     | 返回参数 |
| ------ | -------- | -------- |
| click  | 点击事件 | -        |

## Group API

### Group 属性

| 参数   | 说明                                 | 类型                     | 默认值       |
| ------ | ------------------------------------ | ------------------------ | ------------ |
| data   | 原数据                               | Array、Object            | －           |
| limit  | 可展示几条,传0或不传,默认展示全部 　 | number                   | -            |
| orient | 展示的朝向                           | `horizontal`、`vertical` | `horizontal` |

### Group 插槽

| 插槽名字 | 说明           |
| -------- | -------------- |
| default  | 自定义按钮内容 |

