import { ProfilesSchema } from '@/types/profile';

export default defineEventHandler(() => {
  const count = 10;

  const profiles = Array.from({ length: count }, () => generateProfile());

  return ProfilesSchema.parse(profiles);
});
