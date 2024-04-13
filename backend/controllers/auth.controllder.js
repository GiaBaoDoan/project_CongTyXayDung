import usersModel from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../untils/createError.js";
export const createAdmin = async (req, res, next) => {
  const password = "Admin@123";
  const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  try {
    const newUser = new usersModel({
      email: "Admin@gmail.com",
      username: "Admin",
      password: hash,
      isAdmin: true,
    });
    await newUser.save();
    return res.status(201).send("Admin is created !!");
  } catch (err) {
    next(err);
  }
};
export const signIn = async (req, res, next) => {
  try {
    const user = await usersModel.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(400, "username or password is not correct !!"));
    }
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Password or username is not correct!"));
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY
    );
    const { password, ...info } = user._doc;
    return res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};
