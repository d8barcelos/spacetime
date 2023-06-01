import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";
import "dotenv/config";
import multipart from "@fastify/multipart";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt";
import { uploadRoutes } from "./routes/upload";
import { resolve } from "path";

const app = fastify();

app.register(multipart);

app.register(cors, {
  origin: true,
});

app.register(require("@fastify/static"), {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(memoriesRoutes);
app.register(authRoutes);
app.register(uploadRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server is running on http://localhost:3333");
  });
