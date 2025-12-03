import { z } from 'zod';

export const ProfileSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.email(),
  avatarUrl: z.url(),
  username: z.string(),
  phone: z.string(),
  website: z.url(),
  company: z.string(),
  address: z.string(),
  bio: z.string(),
  age: z.number().int().min(18).max(100),
  jobTitle: z.string(),
  country: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;

export const ProfilesSchema = z.array(ProfileSchema);
