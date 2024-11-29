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
        res.status(401).send({ message: "Incorrect email or password" });
      }
    } else {
      res.status(404).send({ message: "Incorrect email or password" });
    }
  });
};

const updateLearningStyle = async (req, res) => {
  const { id, learningStyle } = req.body;
  try {
    const user = await Users.findOne({ _id: id });
    if (user) {
      //update learning styles
      user.learningStyle.AR = learningStyle.AR;
      user.learningStyle.SI = learningStyle.SI;
      user.learningStyle.VV = learningStyle.VV;
      user.learningStyle.SG = learningStyle.SG;
      await user.save(); //save() is a method provided by mongoose to save the updated document
      res.status(200).json(user.learningStyle);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getLearningStyle = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findOne({ _id: id });
    if (user) {
      res.status(200).json(user.learningStyle);
    } else {
      res.status(404).send({ message: "User cannnot found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateEOL = async (req, res) => {
  const { id, part } = req.params;
  const { vocab, express, grammar } = req.body;
  const index = part - 1;
  try {
    const user = await Users.findOne({
      _id: id,
    });
    if (user) {
      user.eolSummaries.vocab[index] = vocab;
      user.eolSummaries.express[index] = express;
      user.eolSummaries.grammar[index] = grammar;
      await user.save();
      res.status(200).json(user.eolSummaries);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { createUser, loginUser, updateLearningStyle, getLearningStyle, updateEOL };
