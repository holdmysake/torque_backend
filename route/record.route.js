import express from 'express'
import {
    store
} from '../controller/record.controller.js'

const router = express.Router()

router.post('/store', store)

export default router