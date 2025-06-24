import { Router } from "express";
import mangoRoute from "../mango/mango.routes";
import orderRoute from "../order/order.routes";
import userRoute from "../user/user.route";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/mango", mangoRoute);
routes.use("/order", orderRoute);

export default routes;
