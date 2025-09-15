import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';
import './config/server';
import bodyParser from 'body-parser';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // built-in body parser
//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home", (req: Request, res: Response) => {
  res.send("Hello, User!");
});

