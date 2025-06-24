import { Router } from "express";
import { mangoController } from "./mango.controllers";

const mangoRoute = Router();

mangoRoute.get("/:mangoId", mangoController.getMango);
mangoRoute.patch("/:mangoId", mangoController.updateMango);
mangoRoute.delete("/:mangoId", mangoController.deleteMango);
mangoRoute.post("/", mangoController.createMango);
mangoRoute.get("/", mangoController.getMangoes);
export default mangoRoute;
