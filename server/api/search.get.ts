import { ProfilesSchema } from '@/types/profile';
import { profileCache } from '../utils/store';

export default defineEventHandler(() => {
  const count = 10;
  const profiles = [];

  for (let i = 0; i < count; i++) {
    const profile = generateProfile();

    profileCache.set(profile.id, profile);

    profiles.push(profile);
  }

  return ProfilesSchema.parse(profiles);
});
