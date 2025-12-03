import { faker } from '@faker-js/faker';
import type { Profile } from '@/types/profile';

export function generateProfile(): Profile {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  // const slug = `${firstName}+${lastName}`;
  const id = faker.string.uuid();

  return {
    id: id,
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    avatarUrl: `https://i.pravatar.cc/256?u=${id}`,
    // avatarUrl: `https://testingbot.com/free-online-tools/random-avatar/256?u=${slug}`,
    username: faker.internet.username({ firstName, lastName }),
    phone: faker.phone.number(),
    website: faker.internet.url(),
    company: faker.company.name(),
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
    bio: faker.person.bio(),
    age: faker.number.int({ min: 20, max: 80 }),
    jobTitle: faker.person.jobTitle(),
    country: faker.location.country(),
  };
}
