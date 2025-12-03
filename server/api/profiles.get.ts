import { ProfilesSchema } from '@/types/profile';
import { generateProfile } from '../utils/generateProfile';

export default defineEventHandler(() => {
  const count = 6;

  const profiles = Array.from({ length: count }, () => generateProfile());

  return ProfilesSchema.parse(profiles);
});
