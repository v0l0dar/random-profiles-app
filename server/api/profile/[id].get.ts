import { ProfileSchema } from '@/types/profile';
import { profileCache } from '../../utils/store';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid profile ID' });
  }

  if (profileCache.has(id)) {
    return profileCache.get(id);
  }

  const profile = { ...generateProfile(), id };
  const validated = ProfileSchema.parse(profile);

  profileCache.set(id, validated);

  return validated;
});
