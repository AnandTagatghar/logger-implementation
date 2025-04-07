const express = require("express");
const { userRouter } = require("./routers/user.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

module.exports = app;
