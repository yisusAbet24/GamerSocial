const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose; // Importa el objeto Schema de mongoose

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@gmail.com$/.test(v);
        },
        message: "Email must be a valid Gmail address",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
