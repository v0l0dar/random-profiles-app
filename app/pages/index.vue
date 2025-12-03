<script setup lang="ts">
const { getProfiles } = useApi();
const {
  data: profiles,
  pending,
  error,
} = await useAsyncData('home-profiles', getProfiles);
</script>

<template>
  <main>
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-center mb-12">Random Profiles</h1>
      <div
        v-if="pending"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCardSkeleton v-for="n in 6" :key="n" />
      </div>
      <div v-else-if="error" class="text-center text-red-500">
        Failed to load profiles
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard
          v-for="profile in profiles"
          :key="profile.id"
          :profile="profile" />
      </div>
    </div>
  </main>
</template>
