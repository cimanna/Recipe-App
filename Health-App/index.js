import express from "express";
import cors from "cors";
import routes from "./routes/routes.js"
import logger from "morgan";
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(logger("dev"));

app.use("/", routes);


app.listen(PORT,()=>{
  console.clear()
  console.log(

      `Express server running in development on: http://localhost:${PORT}`

  );
})