import express from "express";
import cors from "cors";
import questionRouter from "./routes/question.routes";
import errorHandlerMiddleware from "./middleware/error.handler";

const server = express();

server.use(cors());
server.use("/", questionRouter);
server.use(errorHandlerMiddleware);

export default server;
