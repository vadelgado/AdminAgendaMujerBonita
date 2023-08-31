"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Cita = connection_1.default.define("citas", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    procedimiento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    celular: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});
