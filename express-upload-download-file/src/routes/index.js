import express from "express";
import UploadRouter from "./upload-route";
import DownloadRouter from "./download-route";

export default express.Router()
    .use("/upload", UploadRouter)
    .use("/download", DownloadRouter)
    .use((req, res, next) => res.status(404).json({ message: "Not found" }))