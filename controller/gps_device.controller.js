import GPSDevice from "../model/gps_device.model.js"

export const createGPSDevice = async (req, res) => {
    try {
        const { gps_id, nopol, kode } = req.body

        const device = await GPSDevice.create({
            gps_id, nopol, kode
        })

        res.json(device)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}