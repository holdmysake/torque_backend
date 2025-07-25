import express from 'express'
import {
    createGPSDevice
} from '../controller/gps_device.controller.js'

const router = express.Router()

router.post('/createGPSDevice', createGPSDevice)

export default router