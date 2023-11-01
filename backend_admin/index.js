import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 1002

app.listen('', (req, res) => {
    res.json({message: `Port is running at http://localhost:${port}  for Admin`})
})

app.get('/', (req, res) => {
    res.status(200).json({message: "Admin Server is up and running "})
})