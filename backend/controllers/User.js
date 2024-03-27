const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if all required fields are provided
        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "Invalid user, please provide all required fields",
                success: false
            });
        }

        // Check if the email already exists in the database
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "Email ID already exists",
                success: false
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user record in the database
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
            }
        });
    } catch (error) {
        // Handle any errors that occur during the registration process
        console.error("Error registering user:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = registerUser;
