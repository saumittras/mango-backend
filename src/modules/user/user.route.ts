import { Router } from "express";
import { userController } from "./user.controller";

const userRoute = Router();

userRoute.get("/:userId", userController.getUser);
userRoute.patch("/:userId", userController.updateUser);
userRoute.delete("/:userId", userController.deleteUser);
userRoute.post("/", userController.registerUser);
userRoute.get("/", userController.getUsers);

export default userRoute;
