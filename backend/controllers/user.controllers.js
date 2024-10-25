import Users from "../models/User.js";

//create a new user (C)
const createUser = async (req, res) => {
  try {
    //find user by email
    const email = req.body.email;
    const doc = await Users.findOne({
      email: email,
    });

    //if exists, send error message
    if (doc) {
      res.status(409).send({ message: "User already exists" });
    } else {
      //if not, create user
      const user = await Users.create(req.body);
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.status(200).json(user);
      } else {
        res.status(401).send({ message: "Invalid credentials" });
      }
    } else {
      res.status(404).send({ message: "User not found" });
    }
  });
};

export { createUser, loginUser };
