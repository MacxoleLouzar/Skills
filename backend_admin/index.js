import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connect from './Db/connect.js'
import AdminRoute from '../backend_admin/Routes/AdminRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 1002
connect()
app.use('/api/admin', AdminRoute)

app.listen(port, (req, res) => {
  console.log(` Admin Port is running at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.status(200).json({message: "Admin Server is up and running "})
})