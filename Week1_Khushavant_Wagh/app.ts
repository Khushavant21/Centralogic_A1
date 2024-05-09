// import dependencies
import express, { Request, Response } from "express";
import { splitString, concatenateStrings } from "./logic";

const app = express();
const PORT = 8000; // to start at localhost:8000

app.use(express.json());

// get request to split string
app.get("/split/:stringS", (req: Request, res: Response) => {
  const stringS = req.params.stringS;
  const revisedString = splitString(stringS);
  res.json({ revisedString });
});

// get request to concatenate string
app.get("/concatenate/:param1/:param2", (req: Request, res: Response) => {
  const param1 = req.params.param1;
  const param2 = req.params.param2;
  const revisedString = concatenateStrings(param1, param2);
  res.json({ revisedString });
});

// to start the local host in port number 8000 (which you provide in above line number 5)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
