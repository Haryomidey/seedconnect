import { User } from "../models/user.model.js";
import { Investor } from "../models/investors.model.js";
import { BusinessOwner } from "../models/business-owner.model.js";
import { AppError } from "../utils/AppError.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const signUp = async (req, res, next) => {
    try {
        const { fullName, email, password, role, ...rest } = req.body;

        if (!fullName || !email || !password || !role) {
        return next(new AppError("Please provide all required fields", 400));
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return next(new AppError("Email already exists", 400));
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        let newUser;
        if (role === "investor") {
        newUser = await Investor.create({
            fullName,
            email,
            password: hashedPassword,
            role,
            ...rest,
        });
        } else if (role === "business") {
        newUser = await BusinessOwner.create({
            fullName,
            email,
            password: hashedPassword,
            role,
            ...rest,
        });
        } else {
        return next(new AppError("Invalid role specified", 400));
        }

        newUser.password = undefined;

        res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: newUser,
        });
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("Please provide email and password", 400));
        }

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return next(new AppError("Invalid email or password", 401));
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return next(new AppError("Invalid email or password", 401));
        }

        const token = generateToken(user._id, user.role);

        user.password = undefined;

        res.status(200).json({
            status: "success",
            message: "Login successful",
            token,
            data: user,
        });
    } catch (err) {
        next(err);
    }
};