import express, { Express } from "express";
import cors from "cors";
import userRouter from './user.app/user.router'
import moodRouter from './mood.app/mood.router'

const app: Express = express()

const HOST: string = process.env.HOST || "0.0.0.0";
const PORT: number = Number(process.env.PORT) || 8000;

app.use(express.json())

app.use(cors({
    origin: "*", // для теста разрешаем все источники
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use('/api/user', userRouter)

app.use('/api/mood', moodRouter)


app.get("/health", (req, res) => {
    res.status(200).send("OK");
});



app.listen(PORT, HOST, () => {
    console.log(`✅ Server is running on http://${HOST}:${PORT}`)
})