import type { Profile } from '@/types/profile';

export const useApi = () => {
  const getProfiles = async (): Promise<Profile[]> => {
    return await $fetch('/api/profiles');
  };

  const getProfile = async (id: string): Promise<Profile> => {
    return await $fetch(`/api/profile/${id}`);
  };

  const searchProfiles = async (): Promise<Profile[]> => {
    return await $fetch<Profile[]>('/api/search');
  };

  return { getProfiles, getProfile, searchProfiles };
};
