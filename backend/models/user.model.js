import { request } from "express";
import mongoose, { Mongoose } from "mongoose";

const userschema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
           type: String,
           required: true,
           minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("user", userschema);

export default User;
