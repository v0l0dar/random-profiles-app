import type { Profile } from '@/types/profile';

export const useApi = () => {
  const getProfiles = async (): Promise<Profile[]> => {
    return await $fetch('/api/profiles');
  };

  const getProfile = async (id: string): Promise<Profile> => {
    return await $fetch(`/api/profile/${id}`);
  };

  const searchProfiles = async (): Promise<Profile[]> => {
    const all = await $fetch<Profile[]>('/api/profiles');
    return all
      .concat(Array.from({ length: 10 - all.length }, () => generateProfile()))
      .slice(0, 10);
  };

  return { getProfiles, getProfile, searchProfiles };
};
