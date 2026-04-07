const { UserModel } = require("../Models/models");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const findUser = await UserModel.findOne({ email });
    if (findUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const HashPassword = await bcrypt.hash(password, 10);
    const userCount = await UserModel.countDocuments();
    const newUser = userCount === 0 ? "admin" : "user";

    const user = new UserModel({
      name,
      email,
      password: HashPassword,
      role: newUser,
    });

    await user.save();
    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (e) {
    res.status(500).json({
      message: "Error registering user",
      error: e.message,
      success: false,
    });
  }
};

module.exports = { userRegister };
