<template>
  <div class="flex">
    <i-avatar class="mr-5" image="https://picsum.photos/50/50"></i-avatar>
    <i-avatar class="mr-5" label="林"></i-avatar>
    <i-avatar icon="i-member"></i-avatar>
  </div>
  <div class="flex mt-5">
    <i-avatar class="mr-5" image="https://picsum.photos/50/50"></i-avatar>
    <i-avatar class="mr-5" :size="40" label="林"></i-avatar>
    <i-avatar icon="i-member" :size="30"></i-avatar>
  </div>
  <div class="flex mt-5">
    <i-avatar class="mr-5" image="https://picsum.photos/50/50"></i-avatar>
    <i-avatar class="mr-5" shape="square" image="https://picsum.photos/50/50"></i-avatar>
    <i-avatar fit="fill" image="https://picsum.photos/150/100"></i-avatar>
  </div>
</template>
