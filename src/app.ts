import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from 'express'
import cors from 'cors';
import { Server } from 'http';
import db from "mongoose";
import todoRoutes from "./routes/todos";
import todoNewRoutes from "./routes/todosnew";
import { json, urlencoded } from "body-parser";
import createHttpError from 'http-errors'
const app: Application = express();
import { config } from 'dotenv';

config()
app.use(cors())
app.use(json());

app.use(urlencoded({ extended: true }));
// all API
app.use("/todos", todoRoutes);
app.use('/todosnew', todoNewRoutes)


app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.send("Hello typescript")
})
// error handle
app.use((req: Request, res: Response, next: NextFunction)=>{
 next(new createHttpError.NotFound())
})
const errorHandler: ErrorRequestHandler = (err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message,
    })
}

app.use(errorHandler)

db.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_KEY}@cluster0.cvtbcrw.mongodb.net/?retryWrites=true&w=majority`, () => {
  console.log("Database connected");
});


const PORT: Number = Number(process.env.PORT) || 5000
const server: Server = app.listen(PORT, ()=>{
    console.log(`Port is run ${PORT}`)
})
