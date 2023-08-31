import { Request, Response } from "express";
import { Cita } from "../models/cita";

export const getCitas = async (req: Request, res: Response) => {
  const listCitas = await Cita.findAll();

  res.json(listCitas);
};

export const getCita = async (req: Request, res: Response) => {

  const { id } = req.params;
  const cita = await Cita.findByPk(id);

  if(cita){
    res.json(cita);
  }else{
    res.status(404).json({
      msg: `No Existe una cita con el id ${id}`,
    });
  }
};

export const deleteCita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cita = await Cita.findByPk(id);

   if (!cita) {
     res.status(404).json({
       msg: `No Existe una cita con el id ${id}`,
     });
   } else {
     await cita.destroy();
      res.json('La cita fue Cancelada');
   }

};
export const postCita = async (req: Request, res: Response) => {
  const { body } = req;
  try{
      await Cita.create(body);
      res.json({
        msg: "La cita fue creada Exitosamente",
      });

  }catch(error){
    res.json({
      msg: "Error ! comuniquese con soporte",
    });
  }

};
export const putCita = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  const cita = await Cita.findByPk(id);
try{
    if (cita) {
      await cita.update(body);
      res.json({
        msg: "La cita fue actualizada con exito!",
      });
    } else {
      res.status(404).json({
        msg: `No Existe una cita con el id ${id}`,
      });
    }

}catch{
     res.status(404).json({
       msg: `No Existe una cita con el id ${id}`,
     });
}


};