import User from "../models/UserSchema.js"
import Doctors from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const register = async (req, res)=>{
    try {
        console.log("clicked register")
        const { name, email, password, photo, role, gender } = req.body;

    } catch (error) {
        console.log("Error at authController", error)
    }
}

export const login = async (req, res)=>{
    try {
        console.log("clicked login")
    } catch (error) {
        console.log("Error at authController", error)
    }
}