import { Router } from "express";
import path from "path";
import fs from "fs";

const DownloadRouter = Router()
    .get('/', function (req, res) {
        fs.readdir(process.env.FILE_UPLOAD_PATH, function (err, files) {
            if (err) {
                return res.status(500).send(err);
            }
            const documentList = [];
            files.forEach(function (file) {
                documentList.push({ namaFile: file })
            });
            res.json(documentList);
        });
    })

    .get('/:namaFile', function (req, res) {
        const pathFile = path.join(process.env.FILE_UPLOAD_PATH, req.params.namaFile);
        res.setHeader('Content-disposition', 'attachment; filename=' + req.params.namaFile);
        res.download(pathFile);
    });

export default DownloadRouter;