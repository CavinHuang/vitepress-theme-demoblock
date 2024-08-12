<template>
  <div class="h-100">
    <i-scrollbar tag="ul" content-class="h-100 w-800">
      <li
        v-for="i in 20"
        :key="i"
        class="h-50 d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Scroll me!</h1>
        <p>Use the mouse wheel or drag the scrollbar to scroll</p>
      </li>
    </i-scrollbar>
  </div>
</template>
