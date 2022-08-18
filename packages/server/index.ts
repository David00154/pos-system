import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from '@trpc/server';
import { z } from 'zod'
import cors from 'cors'
import { authRouter } from "./routes/auth";
import { Context, createContext, createRouter} from "./utils";
const app = express();
const port = 2974;


const appRouter = createRouter()
  .merge('auth.', authRouter)

app.use(cors({
  origin: '*',
  credentials: true,
}))

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);


app.get("/api", (req, res) => {
  res.send(`cool`);
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});


export type AppRouter = typeof appRouter;