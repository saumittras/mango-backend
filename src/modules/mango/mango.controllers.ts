import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await Mango.create(payload);

    res.status(201).json({
      success: true,
      message: "Mango Data Created successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something is Wrong",
      error,
    });
  }
};

const getMangoes = async (req: Request, res: Response) => {
  try {
    const data = await Mango.find();

    res.status(201).json({
      success: true,
      message: "Retrived all MangoData successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something is Wrong",
      error,
    });
  }
};

const getMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const data = await Mango.findById(mangoId);

    res.status(201).json({
      success: true,
      message: "Retrived Mango Data successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something is Wrong",
      error,
    });
  }
};

const updateMango = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const mangoId = req.params.mangoId;
    const data = await Mango.findByIdAndUpdate(mangoId, payload, {
      new: true,
      truerunValidators: true,
    });

    res.status(201).json({
      success: true,
      message: "Updated Mango Data successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something is Wrong",
      error,
    });
  }
};

const deleteMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const data = await Mango.findByIdAndDelete(mangoId, { new: true });

    res.status(201).json({
      success: true,
      message: "Mango Data Deleted successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something is Wrong",
      error,
    });
  }
};

export const mangoController = {
  createMango,
  deleteMango,
  getMango,
  getMangoes,
  updateMango,
};
