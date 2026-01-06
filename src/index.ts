import express from "express";
import type { Request, Response } from "express";
import { fetchUsers } from "./services/index";
import { formatUsers } from "./formmater/index";
import "dotenv/config";

const { PORT } = process.env;

const app = express();

app.get("/fetch/users", async (req: Request, res: Response) => {
  try {
 const age = req.query.age as string | undefined;
    const username = req.query.username as string | undefined;
    const data = await fetchUsers(age, username);
    const formatUser = formatUsers(data);
    return res.status(200).json(formatUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT || 3000}`);
});
