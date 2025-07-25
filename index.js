import express from 'express'
import sequelize from './config/db.js'
import deviceRoute from './route/gps_device.route.js'
import recordRoute from './route/record.route.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', deviceRoute)
app.use('/api', recordRoute)

const PORT = process.env.PORT || 3000

sequelize.sync({ force: false })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database error:', err))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})