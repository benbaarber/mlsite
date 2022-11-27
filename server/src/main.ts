import express, { Request, Response } from 'express';
// import cors from 'cors';
import path from "path"

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use("/", express.static(path.resolve(__dirname, "../client")));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});