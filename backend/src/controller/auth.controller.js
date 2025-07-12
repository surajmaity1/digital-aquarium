import bcrypt from 'bcryptjs'
import User from '../model/User.model.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


dotenv.config()

export const registerUser = async (req, res) => {
   try {
     const {name, email, password , gender } = req.body
    if(!name || !email || !password || !gender){
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        })
    }
    
     // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

    // check if password is strong enough
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            });
        }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // check if user is already exists in database
    const existingUser = await User.findOne({email: email})
    if(existingUser){
        return res.status(400).json({
            success: false,
            message: 'User already exists'
        })
    }

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        gender
    })

    // Save user

    await user.save()
    .then(() => {
        console.log('User saved successfully')
    })
    .catch((err) => {
        console.error('Error saving user:', err)
        return res.status(500).json({ message: 'Error creating user', err });
    })

    // Generate token
    const token = jwt.sign({id: user._id, email: user.email, name: user.name, gender: user.gender},process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION ||'1d'});

    // Set token in cookie
        res.cookie('token', token, {
            httpOnly:true, 
            secure:true, // required for cross-site cookies over HTTPS
            sameSite: 'none', // required when frontend & backend are on different domains
            maxAge: 24 * 60 * 60 * 1000,
            path: '/' // Ensure the cookie is accessible across the application
        })

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user:{
            id: user._id,
            name: user.name,
            email: user.email,
            gender: user.gender
        }
    })
   } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
   }
}

export const loginUser = async (req, res) => {
   try {
     const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        })
    }

    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({
            success: false,
            message: 'Invalid credentials' 
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return res.status(400).json({
            success: false,
            message: 'Invalid credentials'
        })
    }

    const token = jwt.sign({id:user._id, email: user.email, name: user.name, gender: user.gender}, process.env.JWT_SECRET || 'Ub3rS3cr3tK3y', {expiresIn: process.env.JWT_EXPIRATION || '1d'})

    res.cookie('token', token,{
        httpOnly: true,
        secure: true,  // required for cross-site cookies over HTTPS
        sameSite: 'none', // required when frontend & backend are on different domains
        maxAge: 24 * 60 * 60 * 1000, 
        path:'/' // Ensure the cookie is accessible across the application
    })

    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            gender: user.gender
        }
    })
   } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error logging in user', error: error.message });
   }
}

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000,
            path: '/'
        })

        res.status(200).json({
            success: true,
            message: 'User logged out successfully'
        })
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ message: 'Error logging out user', error: error.message });
    }
}

export const resetPassword = (req, res) => {



    res.status(200).json({
        success: true,
        message: 'Password reset successfully'
    })
}






