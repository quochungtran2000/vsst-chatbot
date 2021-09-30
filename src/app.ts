import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PORT } from "./utils/constant";
import { initialRouter } from "./router";
import { LoggerMiddleware } from "./midllewares/logger.middleware";

const app = Express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(LoggerMiddleware)

initialRouter(app);

app.listen(PORT, () =>
  console.log(`app listenning on http://localhost:${PORT}`)
);
 