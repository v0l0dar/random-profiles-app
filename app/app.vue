<template>
  <div class="min-h-dvh bg-gray-50">
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
