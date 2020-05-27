import { Router } from "express";
import path from "path";

const UploadRouter = Router()
    .post('/', function (req, res) {
        const sampleFile = req.files.sampleFile;
        sampleFile.mv(path.join(process.env.FILE_UPLOAD_PATH, sampleFile.name), function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json({ status: 'OK' });
            }
        });
    });

export default UploadRouter;