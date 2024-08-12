<template>
  <div class="flex">
    <i-badge value="100">
      <i-avatar image="https://picsum.photos/50/50"></i-avatar>
    </i-badge>
    <i-badge value="100">
      <i-avatar image="https://picsum.photos/50/50"></i-avatar>
    </i-badge>
    <i-badge value="100" class="mr-15">
      <i-avatar image="https://picsum.photos/50/50"></i-avatar>
    </i-badge>
  </div>

  <div class="flex mt-20">
    <i-badge value="默" class="mr-15">
      <i-button icon="i-add">默认按钮</i-button>
    </i-badge>

    <i-badge :value="1010" dot class="mr-15">
      <i-button icon="i-add">默认按钮</i-button>
    </i-badge>
  </div>

  <div class="flex mt-20">
    <i-badge :value="1" :show-zero="false" class="mr-15">
      <i-avatar shape="square" image="https://picsum.photos/50/50"></i-avatar>
    </i-badge>

    <i-badge :value="1010" :max="99" class="mr-15">
      <i-avatar shape="square" image="https://picsum.photos/50/50"></i-avatar>
    </i-badge>

    <i-badge :value="1010" dot class="mr-15">
      <i-avatar shape="square" image="https://picsum.photos/50/50"></i-avatar>
    </i-badge>
  </div>
</template>
