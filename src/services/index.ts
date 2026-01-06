import type { ApiUser } from "../types";
import "dotenv/config";

const { USERS_API_URL } = process.env;

export async function fetchUsers(
  age?: string | string[],
  username?: string | string[]
): Promise<ApiUser[]> {
  const response = await fetch(USERS_API_URL || "https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const json = await response.json();
  const users: ApiUser[] = json.users;
  return filterUsers(users, age, username);
}

export function filterUsers(
  users: ApiUser[],
  age?: string | string[],
  username?: string | string[]
): ApiUser[] {
  let filtered = users;

  if (age) {
    const ageNumber = Number(age);
    filtered = filtered.filter((u) => u.age === ageNumber);
  }

  if (username) {
    const value = String(username).toLowerCase();
    filtered = filtered.filter((u) => u.username.toLowerCase().includes(value));
  }

  return filtered;
}
