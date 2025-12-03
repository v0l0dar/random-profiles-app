import { ProfileSchema } from '@/types/profile';

const cache = new Map<string, unknown>();

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid profile ID' });
  }

  if (cache.has(id)) {
    return cache.get(id);
  }

  const profile = { ...generateProfile(), id };
  const validated = ProfileSchema.parse(profile);
  cache.set(id, validated);
  return validated;
});
