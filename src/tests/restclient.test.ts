import { RestClient } from "..";
import * as dotenv from "dotenv";
dotenv.config();

const client = new RestClient({
  baseURL: "https://yawa.sedana.io",
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
});

test("REST CLIENT TEST", async () => {
  expect(
    await client.get("/api/instances/65").then((res) => res?.data)
  ).toStrictEqual({
    id: 65,
    name: "old instance",
    instanceID: "instance65",
    token: "kZqvZ0w1JlzM",
    active: true,
    status: "WORKING",
    note: null,
    userId: "c442e8a3-3683-41a3-8eda-146aa9d79eb1",
    expiredAt: "2024-02-11T00:00:00.000Z",
    createdAt: "2023-08-11T15:14:26.000Z",
    updatedAt: "2023-11-04T16:21:09.000Z",
    deletedAt: null,
  });
});
