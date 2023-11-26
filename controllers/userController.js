// controllers/userController.js
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { name, phone, address } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'User already exists with this phone number' });
    }

    const user = new User({
      name,
      phone,
      address,
    });

    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
