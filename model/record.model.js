import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'
import moment from 'moment-timezone'
import GPSDevice from './gps_device.model.js'

const Record = sequelize.define('record', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gps_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
        references: {
            model: GPSDevice,
            key: 'gps_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    lat: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    lng: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    speed: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    fuel_consumption: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    satellite: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    direction: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    altitude: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    distance: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    temperature: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('idle', 'on', 'off'),
        allowNull: true
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            const raw = this.getDataValue('timestamp')
            return raw ? moment(raw).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss') : null
        }
    }
}, {
    tableName: 'record',
    timestamps: false,
    underscored: true
})

export default Record
