const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Invalid input. Please fill all required fields.",
                success: false
            });
        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password.",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password.",
                success: false
            });
        }

        // Successful login
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            },
            success: true
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if all required fields are provided
        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "Invalid user. Please provide all required fields.",
                success: false
            });
        }

        let user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: "Email ID already exists.",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            fullname,
            email,
            password: hashedPassword
        });

        // Return success response with the newly created user's data
        return res.status(201).json({
            message: "User created successfully",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            },
            success: true
        });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = { registerUser, loginUser };
