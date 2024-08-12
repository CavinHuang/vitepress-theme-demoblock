<template>
  <div class="flex">
    <i-tooltip placement="top" trigger="click" content="tooltip content">
      <template #trigger>
        <i-button>Click me</i-button>
      </template>
    </i-tooltip>

    <i-tooltip placement="top" trigger="click" is-dark content="tooltip content">
      <template #trigger>
        <i-button>Click me dark</i-button>
      </template>
    </i-tooltip>
  </div>
</template>
