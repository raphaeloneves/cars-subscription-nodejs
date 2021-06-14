import './configs/db'

import express from 'express'

const app = express()

app.listen(process.env.PORT, () => console.log(`Server connected on port ${process.env.PORT}`))