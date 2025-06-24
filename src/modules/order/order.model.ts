// import { model, Schema } from "mongoose";
// import { IOrder, IOrderAddress } from "./order.interface";

// const orderAddressSchema = new Schema<IOrderAddress>(
//   {
//     zipcode: String,
//     state: String,
//     country: String,
//     street: String,
//   },
//   {
//     _id: false,
//     versionKey: false,
//   }
// );

// const orderSchema = new Schema<IOrder>(
//   {
//     user: { type: Schema.Types.ObjectId, required: true },
//     mango: { type: Schema.Types.ObjectId, required: true },
//     quantity: { type: Number, min: 0, required: true },
//     totalPrice: { type: Number, min: 0, required: true },
//     status: { type: String, required: true },
//     address: {
//       type: orderAddressSchema,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// const Order = model("Order", orderSchema);
// export default Order;
