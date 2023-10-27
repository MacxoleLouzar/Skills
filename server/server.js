import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 1001

app.listen(port, (req, res) => {
    console.log(`PORT is listen at http://localhost:${port}`)
})

app.use('/', (req, res) => {
    res.status(200).json({ data: 'server is running' })
})