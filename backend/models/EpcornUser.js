import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const EpcornUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "Epcorn" },
});

EpcornUserSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
EpcornUserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
EpcornUserSchema.methods.createJWT = async function () {
    return jwt.sign(
      { userId: this._id, role: this.id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    );
}


export default mongoose.model("EpcornUser", EpcornUserSchema)
