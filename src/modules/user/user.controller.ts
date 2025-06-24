import { Request, Response } from "express";
import User from "./user.model";

const registerUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const user = new User(payload);
    const data = await user.save();

    res.send({
      success: true,
      message: "User Registered Successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Some thing is Wrong",
      data: error,
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await User.find();

    res.send({
      success: true,
      message: "Users Data Successfully parsed",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Some thing is Wrong",
      data: error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const data = await User.findById(userId);

    res.send({
      success: true,
      message: "User Retrived Successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Some thing is Wrong",
      data: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const userId = req.params.userId;
    const user = await User.findByIdAndUpdate(userId, payload, {
      new: true,
      runValidators: true,
    });

    res.send({
      success: true,
      message: "User Data Update Successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Some thing is Wrong",
      data: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const data = await User.findByIdAndDelete(userId);

    res.send({
      success: true,
      message: "User data deleted Successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Some thing is Wrong",
      data: error,
    });
  }
};

export const userController = {
  deleteUser,
  getUser,
  getUsers,
  registerUser,
  updateUser,
};
