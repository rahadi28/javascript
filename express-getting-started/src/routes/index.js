import express from "express";
import hello from "./hello.js";

export default express
  .Router()
  .use("/hello", hello)
  .use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
  });
