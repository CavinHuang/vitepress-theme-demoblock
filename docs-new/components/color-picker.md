# ColorPicker 颜色选择器

颜色选择器组件，支持多种颜色格式。

## 基础用法

基础用法

:::demo

color-picker/basic

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| modelValue | 颜色值 | `string` | `rgb(255, 255, 255)` |
| disabled | 是否禁用 | `boolean` | `false` |
| showAlpha | 是否支持透明度选择 | `boolean` | `true` |
| type | 颜色类型 | `"HEX8" \| "HEX" \| "RGB" \| "RGBA" \| "HSL" \| "HSV"` | `"HEX"` |
| colorListCount | 颜色列表长度 | `number` | `16` |
| colorList | 颜色列表 | `string[]` | `[]` |
| showColorList | 是否显示颜色列表 | `boolean` | `true` |
| showEyeDrop | 是否显示取色器 | `boolean` | `true` |
| triggerClass | 触发器类名 | `IClassNames` | - |

### Slots

| name | 说明 |
| ---- | ---- |
| trigger | 触发器slot |

### Events
| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| change | 颜色改变事件 | color: string  |

