import type { ApiUser, User } from "../types";

export function formatUsers(users: ApiUser[]): User[] {
  return users.map(formatUser);
}
function formatUser(user: ApiUser): User {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    maidenName: user.maidenName,
    age: user.age,
    email: user.email,
    phone: user.phone,
    username: user.username,
  };
}
