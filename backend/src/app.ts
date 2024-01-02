import express from 'express';
const app = express();
import { config } from 'dotenv';
config();

//middlewares
app.use(express.json());

export default app;