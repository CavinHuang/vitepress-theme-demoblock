<template>
  <div class="flex">
    <div class="popover-grid">
      <i-popover placement="top-start" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 1 / 1 / 2 / 2">Top Start</i-button>
        </template>
        <div class="large-text">icc</div>
      </i-popover>
      <i-popover placement="top" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 1 / 2 / 2 / 3">Top</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="top-end" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 1 / 3 / 2 / 4">Top End</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="left-start" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 2 / 1 / 3 / 2">Left Start</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="left" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 3 / 1 / 4 / 2">Left</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="left-end" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 4 / 1 / 5 / 2">Left End</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="right-start" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 2 / 3 / 3 / 4">Right Start</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="right" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 3 / 3 / 4 / 4">Right</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="right-end" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 4 / 3 / 5 / 4">Right End</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="bottom-start" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 5 / 1 / 6 / 2">Bottom Start</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="bottom" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 5 / 2 / 6 / 3">Bottom</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
      <i-popover placement="bottom-end" trigger="hover">
        <template #trigger>
          <i-button style="grid-area: 5 / 3 / 6 / 4">Bottom End</i-button>
        </template>
        <div class="large-text">icc-ui</div>
      </i-popover>
    </div>
  </div>
</template>

<style lang="scss">
.popover-grid {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 12px;
  justify-content: center;
  align-items: center;

  .i-button + .i-button {
    margin-left: 0;
  }
}

.large-text {
  font-size: 48px;
}
</style>
