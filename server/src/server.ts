import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";
import "dotenv/config";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(memoriesRoutes);
app.register(authRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server is running on http://localhost:3333");
  });
