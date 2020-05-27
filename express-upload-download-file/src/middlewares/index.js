import express from "express";
import fileUpload from "express-fileupload";

export default express.Router()
.use(express.json())
.use(fileUpload({
    abortOnLimit: true,
    safeFileNames: true,
    preserveExtension: true,
    limits: {
        fileSize: Number(process.env.FILE_SIZE_LIMIT) * 1024 * 1024,
        files: Number(process.env.FILE_UPLOAD_COUNT)
    }
}))