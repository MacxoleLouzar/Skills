require('dotenv').config()
const express = require("express"); 
const cors = require("cors"); 
const connect = require("./DB/DbConnect"); 
const routeDept = require('../server/Routes/DepartmentRoutes.js')
const routeJobRoles = require('../server/Routes/JobRolesRoutes')
const routeEmployee = require('../server/Routes/EmployeeRoutes')
const { GetDepartmentAndPositionFunc} = require('./Controller/DpartmentController')

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 1001

app.use("/api/dep/", routeDept);
app.use("/api/dep_pos/", GetDepartmentAndPositionFunc);
app.use("/api/job/", routeJobRoles);
app.use("/api/emp/", routeEmployee);

app.listen(port, (req, res) => {
    console.log(`PORT is listen at http://localhost:${port}`)
})

app.use('/', (req, res) => {
    res.status(200).json({ data: 'server is running' })
})