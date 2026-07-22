import express from "express";
import cors from "cors";
import connectdb from "./config/db.js";
import dotenv from 'dotenv'
import router from "./routes/auditRoutes.js";
dotenv.config();
const app = express()

app.use(
    cors({
        origin: "https://audit-log-dashboard-rm842kt8x-arthik-ms-projects.vercel.app/",
    })
);
app.use(express.json())
const port = process.env.PORT || 4000;
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})
app.get("/", (req, res) => {
    res.send("server is running")
    console.log("server is running")
})
app.use("/api/logs", router)


const startServer = async () => {
    await connectdb()
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}

startServer().catch((error) => {
    console.log("Server failed to start", error)
})
