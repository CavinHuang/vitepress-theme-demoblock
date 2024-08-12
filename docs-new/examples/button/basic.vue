<template>
  <div class="flex flex-wrap">
    <i-button>默认按钮</i-button>
    <i-button icon="i-add">默认按钮</i-button>
    <i-button type="delete">默认按钮</i-button>
    <i-button icon="i-delete" type="delete">默认按钮</i-button>
  </div>

  <div class="flex flex-wrap mt-5">
    <i-button ghost>幽灵按钮</i-button>
    <i-button ghost icon="i-add">幽灵按钮</i-button>
    <i-button ghost type="delete">幽灵按钮</i-button>
    <i-button ghost icon="i-delete" type="delete">幽灵按钮</i-button>
  </div>

  <div class="flex flex-wrap mt-5">
    <i-button secondary>次要按钮</i-button>
    <i-button secondary icon="i-add">次要按钮</i-button>
    <i-button secondary type="delete">次要按钮</i-button>
    <i-button secondary icon="i-delete" type="delete">次要按钮</i-button>
  </div>

  <div class="flex flex-wrap mt-5">
    <i-button text>文本按钮</i-button>
    <i-button icon="i-add" text></i-button>
    <i-button type="delete" text>文本按钮</i-button>
    <i-button icon="i-delete" type="delete" text>文本按钮</i-button>
  </div>

  <div class="flex flex-wrap mt-5">
    <i-button disabled>禁用按钮</i-button>
    <i-button text disabled>禁用按钮</i-button>
    <i-button type="delete" disabled>禁用按钮</i-button>
    <i-button icon="i-delete" text disabled>禁用按钮</i-button>
  </div>
</template>
