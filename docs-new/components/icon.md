# Icon 图标

默认使用 阿里图标库，可以根据项目各自引用对应的文件，内置默认样式名为 iconfont 便于 阿里图标库的使用，[iconfont](https://www.iconfont.cn/)。

## 基础用法

使用 `name` 来定义icon。

:::demo

icon/basic

:::

## API

### Icon 属性

| 参数      | 说明                                     | 类型              | 默认值  |
| --------- | ---------------------------------------- | ----------------- | ------- |
| tag       | 可以传入元素名或组件,isSvg为true时不生效 | string、Component | `i`     |
| name      | icon名字`必填`                           | string            | -       |
| is-svg     | 是否是svg类型的                          | boolean           | `false` |
| svg-width  | 宽度                                     | string            | -       |
| svg-height | 高度                                     | string            | -       |
| disabled  | 是否禁用状态                             | boolean           | `false` |
