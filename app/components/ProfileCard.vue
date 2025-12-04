<script setup lang="ts">
defineProps<{
  profile: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    username: string;
    jobTitle: string;
    company: string;
  };
}>();
</script>

<template>
  <NuxtLink
    :to="`/profile/${profile.id}`"
    class="block group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    :aria-label="`View profile of ${profile.name}`">
    <div class="aspect-w-1 aspect-h-1 relative">
      <NuxtImg
        :src="profile.avatarUrl"
        :alt="`Avatar of ${profile.name}`"
        class="w-full h-64 object-cover"
        loading="lazy"
        referrerpolicy="no-referrer"
        format="webp" />
      <div
        class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div class="p-6">
      <h3
        class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {{ profile.name }}
      </h3>
      <p class="text-lg text-gray-700 mt-1">{{ profile.jobTitle }}</p>
      <p class="text-sm text-gray-500 mt-2">{{ profile.company }}</p>
      <p class="text-sm text-gray-600 mt-3 truncate">{{ profile.email }}</p>
      <p class="text-sm text-indigo-600 mt-2">@{{ profile.username }}</p>
    </div>

    <div
      class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div
        class="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
        View Details
      </div>
    </div>
  </NuxtLink>
</template>
