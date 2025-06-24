import { Request, Response } from "express";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const order = await Order.create(payload);

    res.status(200).json({
      success: true,
      message: "Order Created Successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something is Wrong",
      data: error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const order = await Order.find();

    res.status(200).json({
      success: true,
      message: "Order retrived Successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something is Wrong",
      data: error,
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);

    res.status(200).json({
      success: true,
      message: "Order retrived Successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something is Wrong",
      data: error,
    });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const payload = req.body;
    const order = await Order.findByIdAndUpdate(orderId, payload, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Order retrived Successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something is Wrong",
      data: error,
    });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findByIdAndDelete(orderId, { new: true });

    res.status(200).json({
      success: true,
      message: "Order retrived Successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something is Wrong",
      data: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
