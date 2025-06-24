import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>(
  {
    name: { type: String, trim: true, require: true },
    variety: { type: String, trim: true, require: true },
    unit: { type: String, enum: ["KG", "TON"], default: "KG", required: true },
    price: { type: Number, min: 0 },
    stock: { type: Number, min: 0 },
    origin: { type: String, default: "Unknown" },
    season: {
      type: String,
      enum: ["SUMMER", "SPRING", "FALL"],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Mango = model<IMango>("Mango", mangoSchema);
export default Mango;
