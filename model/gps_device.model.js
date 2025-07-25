import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const GPSDevice = sequelize.define('gps_device', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gps_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    nopol: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    kode: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
}, {
    tableName: 'gps_device',
    timestamps: false,
    underscored: true
})

export default GPSDevice
