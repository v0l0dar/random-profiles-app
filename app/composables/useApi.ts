import { type Profile, ProfileSchema, ProfilesSchema } from '@/types/profile';

export const useApi = () => {
  const getProfiles = async (): Promise<Profile[]> => {
    const data = await $fetch('/api/profiles');
    return ProfilesSchema.parse(data);
  };

  const getProfile = async (id: string): Promise<Profile> => {
    const data = await $fetch(`/api/profile/${id}`);
    return ProfileSchema.parse(data);
  };

  const searchProfiles = async (): Promise<Profile[]> => {
    const data = await $fetch<Profile[]>('/api/search');
    return ProfilesSchema.parse(data);
  };

  return { getProfiles, getProfile, searchProfiles };
};
