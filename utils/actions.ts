'use server';
import { readFile, writeFile } from 'fs/promises';

type User = {
  firstName: string;
  lastName: string;
  id: string;
};

export const createUser = async (formData: FormData) => {
  'use server';

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;

  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  await saveUser(newUser);

  // shorthand code for access properties (currently sticking with "formData.get()"" approach)
  // const rawData = Object.fromEntries(formData);
  // console.log(rawData);

  console.log({ firstName, lastName });
};

const fetchUsers = async () => {
  const result = await readFile('users.json', { encoding: 'utf8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  writeFile('users.json', JSON.stringify(users));
};
