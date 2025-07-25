import Record from "../model/record.model.js"

export const store = async (req, res) => {
    try {
        const { 
            lat, 
            lng, 
            gps_id, 
            speed, 
            status, 
            satellite, 
            direction, 
            fuel_consumption, 
            altitude, 
            distance, 
            temperature 
        } = req.body

        const timestamp = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss')

        const record = await Record.create({
            lat,
            lng,
            gps_id,
            speed,
            status,
            satellite,
            direction,
            fuel_consumption,
            altitude, 
            distance, 
            temperature,
            timestamp
        })

        res.json(record)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}