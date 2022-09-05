const User = require('../models/user');
const bcrypt = require('bcrypt');

class AuthController {
  static async register(req, res) {
    const { username, email, password, role } = req.body;
    try {
      await User.create({ username, email, password, role });
      res
        .status(201)
        .send({ message: 'Your account was created successfully' });
    } catch (error) {
      console.log(error.message);
    }
  }
  static async login(req, res) {
    if (req.session.userId) {
      return res.send({ message: 'You are already logged in' });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email' });
    }
    const isAuthorized = await bcrypt.compare(password, user.password);
    if (isAuthorized) {
      req.session.userId = user._id;
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Incorrect password' });
    }
  }
  static logout(req, res) {}
}

module.exports = AuthController;
