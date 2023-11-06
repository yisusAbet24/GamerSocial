const asyncHandler = require("express-async-handler");

const {
  generateToken,
  generateRefreshToken,
  validateEmail,
} = require("../utils");
const { UserSchema } = require("../models");

// * Create a new user
const createUser = asyncHandler(async (req, res) => {
  if (!req.body || !req.body.email || !req.body.password) {
    throw new Error("Name, Email and Password are required");
  }
  const { email } = req.body;
  const user = await UserSchema.findOne({ email });
  if (user) {
    throw new Error("User already exists");
  }
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
    validateEmail(email);
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    validateEmail(email);

    const user = await UserSchema.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      throw new Error("Credentials do not match");
    }

    // Generate a refreshToken for the current user and store it in the database
    const refreshToken = generateRefreshToken(user._id);
    const userRefresh = await UserSchema.findByIdAndUpdate(
      user._id,
      { refreshToken },
      { new: true }
    );
    // Set a cookie in the user's browser to store the refreshToken
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000, // The cookie expires in 72 hours
    });

    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      data: userRefresh,
      token: generateToken(user._id),
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUser,
};
