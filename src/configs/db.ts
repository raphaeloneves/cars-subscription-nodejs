// @ts-ignore
import { connect } from 'mongoose';

const hostname = process.env.DB_HOST
const database = process.env.DB_DATABASE
const port = process.env.DB_PORT

connect(`mongodb://${hostname}:${port}/${database}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to the database!"))
    .catch((err: any) => console.error(err))