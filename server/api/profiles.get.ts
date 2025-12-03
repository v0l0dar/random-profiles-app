import { ProfilesSchema } from '@/types/profile';
import { generateProfile } from '../utils/generateProfile';
import { profileCache } from '../utils/store';

export default defineEventHandler(() => {
  const count = 6;
  const profiles = [];

  for (let i = 0; i < count; i++) {
    const profile = generateProfile();

    profileCache.set(profile.id, profile);
    profiles.push(profile);
  }

  return ProfilesSchema.parse(profiles);
});
