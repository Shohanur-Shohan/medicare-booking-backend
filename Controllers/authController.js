import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const register = async (req, res)=>{
    try {
        console.log("clicked register")
        const { name, email, password, photo, role, gender } = req.body;

        //role check
        let user = null;
        if(role === "patient"){
            user = User.findOne({email})
        }
        else if (role === "doctor"){
            user = Doctor.findOne({email})
        }

        //checking user exists or not
        if(user){
            return res.status(400).json({message: "User already exists!"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt);

        if(role === "patient"){
            User = new User({ 
                name,
                email,
                password: hashPassword,
                photo,
                role,
                gender 
            })
        }
        else if (role === "doctor"){
           Doctor  = new Doctor({ 
                name,
                email,
                password: hashPassword,
                photo,
                role,
                gender 
            })
        }


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