const asyncHandler = require("express-async-handler");

const { UserSchema } = require("../models");

// * Create a new user
const createUser = asyncHandler(async (req, res) => {
  try {
    const newUser = await UserSchema.create(req.body);
    res.status(201).json({
      status: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// * Login a user
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await UserSchema.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      throw new Error("Credentials do not match");
    }

    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUser,
};
