<template>
  <div class="flex">
    <i-tag>我是标签1</i-tag>
    <i-tag>我是标签1</i-tag>
    <i-tag>我是标签3</i-tag>
    <i-tag>我是标签5</i-tag>
  </div>

  <div class="flex mt-5">
    <i-tag round>我是标签1</i-tag>
    <i-tag round>我是标签1</i-tag>
    <i-tag round>我是标签3</i-tag>
    <i-tag round>我是标签5</i-tag>
  </div>

  <div class="flex mt-5">
    <i-tag prefix-icon="i-organization">我是标签1</i-tag>
    <i-tag prefix-icon="i-label" color="#00bea2">我是标签1</i-tag>
    <i-tag prefix-icon="i-department" color="#fd6b7e">我是标签3</i-tag>
    <i-tag prefix-icon="i-member" color="#ffa800">我是标签4</i-tag>
    <i-tag prefix-icon="i-shop" color="#A33AC8">我是标签5</i-tag>
  </div>

  <div class="flex mt-5">
    <i-tag round prefix-icon="i-organization">我是标签1</i-tag>
    <i-tag round prefix-icon="i-label" color="#00bea2">我是标签1</i-tag>
    <i-tag round prefix-icon="i-department" color="#fd6b7e">我是标签3</i-tag>
    <i-tag round prefix-icon="i-member" color="#ffa800">我是标签4</i-tag>
    <i-tag round prefix-icon="i-shop" color="#A33AC8">我是标签5</i-tag>
  </div>

  <div class="flex mt-5">
    <i-tag disabled prefix-icon="i-organization">我是标签1</i-tag>
    <i-tag disabled prefix-icon="i-label" color="#00bea2">我是标签1</i-tag>
    <i-tag disabled prefix-icon="i-department" color="#fd6b7e">我是标签3</i-tag>
    <i-tag closeable disabled prefix-icon="i-member" color="#ffa800">我是标签4</i-tag>
    <i-tag disabled suffix-icon="i-shop" color="#A33AC8">我是标签5</i-tag>
  </div>

  <div class="flex mt-5">
    <i-tag hoverable closeable>我是标签1</i-tag>
    <i-tag hoverable closeable round>我是标签1</i-tag>
    <i-tag hoverable closeable prefix-icon="i-department" color="#fd6b7e">我是标签3</i-tag>
    <i-tag hoverable closeable round prefix-icon="i-department" color="#fd6b7e">我是标签3</i-tag>
  </div>
</template>
<script></script>
