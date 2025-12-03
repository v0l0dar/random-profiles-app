<template>
  <main>
    {{ profiles }}
  </main>
</template>

<script setup lang="ts">
const { getProfiles } = useApi();
const {
  data: profiles,
  pending,
  error,
} = await useAsyncData('home-profiles', getProfiles);
</script>
