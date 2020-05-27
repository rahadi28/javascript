/**
 * Module dependencies.
 */
import express from "express";
import dotenv from "dotenv";
import middlewares from "./src/middlewares";
import router from "./src/routes";

const app = express();
dotenv.config();

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

app.use(middlewares);
app.use(router);
app.listen(port, () => console.log(`${process.env.NAME} app listening at http://localhost:${port}`))

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}