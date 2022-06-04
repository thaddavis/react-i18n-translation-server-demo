import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/error";

const app = express();

app.use((res,req, next) => {
    console.log(res.method)
    console.log(res.path)
    next()
})

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/locales", express.static("locales"));
app.use(errorMiddleware);

export default app;