<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;

const { getProfile } = useApi();
const {
  data: profile,
  pending,
  error,
} = await useAsyncData(`profile-${id}`, () => getProfile(id));

useHead(() => ({
  title: profile.value ? `${profile.value.name} – Profile` : 'Loading...',
  meta: [
    { name: 'description', content: profile.value?.bio || '' },
    { property: 'og:image', content: profile.value?.avatarUrl },
    { property: 'og:title', content: profile.value?.name },
  ],
}));
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <NuxtLink to="/" class="inline-block mb-8 text-blue-600 hover:underline">
      ← Back to Gallery
    </NuxtLink>

    <div v-if="pending" class="flex justify-center">
      <div
        class="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent" />
    </div>

    <div v-else-if="error" class="text-center py-20 text-red-500">
      Profile not found
    </div>

    <div v-else-if="profile" class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-3 gap-10">
        <div class="text-center">
          <img
            :src="profile.avatarUrl"
            :alt="`Photo of ${profile.name}`"
            class="w-64 h-64 rounded-full mx-auto shadow-2xl object-cover" />
          <h1 class="text-4xl font-bold mt-6">{{ profile.name }}</h1>
          <p class="text-2xl text-gray-600 mt-2">{{ profile.jobTitle }}</p>
          <p class="text-lg text-gray-500">{{ profile.company }}</p>
        </div>

        <div class="md:col-span-2 space-y-8">
          <section>
            <h2 class="text-2xl font-semibold mb-4">About</h2>
            <p class="text-lg leading-relaxed text-gray-700">
              {{ profile.bio }}
            </p>
          </section>

          <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="font-semibold text-gray-900">Email</h3>
              <a
                :href="`mailto:${profile.email}`"
                class="text-blue-600 hover:underline">
                {{ profile.email }}
              </a>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="font-semibold text-gray-900">Phone</h3>
              <p>{{ profile.phone }}</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="font-semibold text-gray-900">Location</h3>
              <p>{{ profile.address }}</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="font-semibold text-gray-900">Website</h3>
              <a
                :href="profile.website"
                target="_blank"
                class="text-blue-600 hover:underline">
                {{ profile.website }}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
