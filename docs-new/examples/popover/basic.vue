<template>
  <div class="flex">
    <i-popover placement="top" trigger="click" @open="handleOpen" @opened="handleOpened">
      <template #trigger>
        <i-button>Click me</i-button>
      </template>
      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
    </i-popover>

    <i-popover placement="top" trigger="click" is-dark>
      <template #trigger>
        <i-button>Click me dark</i-button>
      </template>
      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
    </i-popover>

    <i-popover placement="top" trigger="click" is-dark>
      <template #trigger>
        <button class="ml-10px">
          <span>Click me dark</span>
          <i-icon name="i-arrow-bottom" />
        </button>
      </template>
      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
    </i-popover>
  </div>
</template>

<script lang="ts" setup>
const handleOpen = () => {
  console.log('open')
}

const handleOpened = () => {
  console.log('opened')
}
</script>
