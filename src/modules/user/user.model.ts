import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true, min: 3, max: 255 },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid e-mail address`,
      },
    },
    phone: {
      type: String,
      required: [true, "Your phone number is not valid"],
      unique: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: { values: ["Admin", "Customer"], message: "{VALUE} is acceptable" },
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model<IUser>("User", userSchema);
export default User;
