# Ouqoud
# TS Express Users API
## Description
A TypeScript + Express API that fetches users from [dummyjson.com](https://dummyjson.com/users), formats them, and allows filtering by `age` and `username`.
The project demonstrates:
- TypeScript with strong typing
- Separation of concerns (service, formatter)
- Environment variable configuration using dotenv
- Filtering and formatting user data
- Safe exposure of user data (no passwords, SSNs, or bank info)
---
### How to test?
GET http://localhost:3000/fetch/users
GET http://localhost:3000/fetch/users?age=29
GET http://localhost:3000/fetch/users?username=emilys
GET http://localhost:3000/fetch/users?age=29&username=emilys
