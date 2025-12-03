import { faker } from '@faker-js/faker';
import type { Profile } from '@/types/profile';

export function generateProfile(): Profile {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const gender = faker.person.sex() as 'male' | 'female';

  return {
    id: faker.string.uuid(),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    avatarUrl: `https://api.testingbot.com/v1/avatar?name=${encodeURIComponent(firstName + '+' + lastName)}&gender=${gender}&size=200`,
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
