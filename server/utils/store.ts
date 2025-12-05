import type { Profile } from '@/types/profile';

export const profileCache = new Map<string, Profile>();

export const cleanupCache = () => {
  if (profileCache.size > 1000) {
    profileCache.clear();
  }
};
