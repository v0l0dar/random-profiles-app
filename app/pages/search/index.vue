<script setup lang="ts">
const {
  data: profiles,
  pending,
  error,
  refresh,
} = await useAsyncData('search', () => $fetch('/api/search'));

useHead({
  title: 'Search Results – 10 Random Profiles',
  meta: [
    {
      name: 'description',
      content: 'Browse 10 completely random person profiles',
    },
    { property: 'og:title', content: 'Random Profiles Search' },
    {
      property: 'og:description',
      content: 'Discover 10 random people from around the world',
    },
  ],
});
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="flex justify-between items-center mb-12">
      <h1 class="text-4xl font-bold">Search Results</h1>
      <button
        class="btn-primary flex items-center gap-2"
        :disabled="pending"
        aria-label="Generate new random profiles"
        @click="() => refresh()">
        New Random 10
      </button>
    </div>

    <div
      v-if="pending"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <ProfileCardSkeleton v-for="n in 10" :key="n" />
    </div>

    <div v-else-if="error" class="text-center py-20 text-red-500">
      Oops! Something went wrong.
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <ProfileCard
        v-for="profile in profiles"
        :key="profile.id"
        :profile="profile" />
    </div>
  </div>
</template>
