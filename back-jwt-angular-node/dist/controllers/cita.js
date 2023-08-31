"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putCita = exports.postCita = exports.deleteCita = exports.getCita = exports.getCitas = void 0;
const cita_1 = require("../models/cita");
const getCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCitas = yield cita_1.Cita.findAll();
    res.json(listCitas);
});
exports.getCitas = getCitas;
const getCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield cita_1.Cita.findByPk(id);
    if (cita) {
        res.json(cita);
    }
    else {
        res.status(404).json({
            msg: `No Existe una cita con el id ${id}`,
        });
    }
});
exports.getCita = getCita;
const deleteCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield cita_1.Cita.findByPk(id);
    if (!cita) {
        res.status(404).json({
            msg: `No Existe una cita con el id ${id}`,
        });
    }
    else {
        yield cita.destroy();
        res.json('La cita fue Cancelada');
    }
});
exports.deleteCita = deleteCita;
const postCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield cita_1.Cita.create(body);
        res.json({
            msg: "La cita fue creada Exitosamente",
        });
    }
    catch (error) {
        res.json({
            msg: "Error ! comuniquese con soporte",
        });
    }
});
exports.postCita = postCita;
const putCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const cita = yield cita_1.Cita.findByPk(id);
    try {
        if (cita) {
            yield cita.update(body);
            res.json({
                msg: "La cita fue actualizada con exito!",
            });
        }
        else {
            res.status(404).json({
                msg: `No Existe una cita con el id ${id}`,
            });
        }
    }
    catch (_a) {
        res.status(404).json({
            msg: `No Existe una cita con el id ${id}`,
        });
    }
});
exports.putCita = putCita;
