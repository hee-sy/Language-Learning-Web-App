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

const updateLearningStyleScore = async (req, res) => {
  const { id, learningStyle } = req.body;
  try {
    let user = await Users.findOne({ _id: id });
    if (user) {
      //update learning style scores
      user.learningStyle.AR.score = learningStyle.AR_score;
      user.learningStyle.SI.score = learningStyle.SI_score;
      user.learningStyle.VV.score = learningStyle.VV_score;
      user.learningStyle.SG.score = learningStyle.SG_score;

      //update num
      user.learningStyle.AR.num = Math.abs(learningStyle.AR_score);
      user.learningStyle.SI.num = Math.abs(learningStyle.SI_score);
      user.learningStyle.VV.num = Math.abs(learningStyle.VV_score);
      user.learningStyle.SG.num = Math.abs(learningStyle.SG_score);

      //update ab
      user.learningStyle.AR.ab = learningStyle.AR_score < 0 ? "a" : "b";
      user.learningStyle.SI.ab = learningStyle.SI_score < 0 ? "a" : "b";
      user.learningStyle.VV.ab = learningStyle.VV_score < 0 ? "a" : "b";
      user.learningStyle.SG.ab = learningStyle.SG_score < 0 ? "a" : "b";

      //update cat
      user.learningStyle.AR.cat = Math.abs(learningStyle.AR_score) <= 3 ? "low" : user.learningStyle.AR.num <= 7 ? "moderate" : "high";
      user.learningStyle.SI.cat = Math.abs(learningStyle.SI_score) <= 3 ? "low" : user.learningStyle.SI.num <= 7 ? "moderate" : "high";
      user.learningStyle.VV.cat = Math.abs(learningStyle.VV_score) <= 3 ? "low" : user.learningStyle.VV.num <= 7 ? "moderate" : "high";
      user.learningStyle.SG.cat = Math.abs(learningStyle.SG_score) <= 3 ? "low" : user.learningStyle.SG.num <= 7 ? "moderate" : "high";

      //update dim
      user.learningStyle.AR.dim = user.learningStyle.AR.ab == "a" ? "Active" : "Reflective";
      user.learningStyle.SI.dim = user.learningStyle.SI.ab == "a" ? "Sensing" : "Intuitive";
      user.learningStyle.VV.dim = user.learningStyle.VV.ab == "a" ? "Visual" : "Verbal";
      user.learningStyle.SG.dim = user.learningStyle.SG.ab == "a" ? "Sequential" : "Global";

      const result = await Users.findByIdAndUpdate(id, user, { new: true });

      if (!result) {
        return res.status(404).send({ message: "User not found" });
      }

      return res.status(200).json(result.learningStyle);
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
  const { id, lesson, part } = req.params;
  const { vocab, express, grammar } = req.body;
  const index = part - 1;
  try {
    const user = await Users.findOne({
      _id: id,
    });
    if (user) {
      user.eolSummaries.vocab[lesson][index] = vocab;
      user.eolSummaries.express[lesson][index] = express;
      user.eolSummaries.grammar[lesson][index] = grammar;
      await user.save();
      res.status(200).json(user.eolSummaries);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getEOLByLesson = async (req, res) => {
  const { id, lesson } = req.params;
  try {
    const user = await Users.findOne({ _id: id });
    if (user) {
      let eol = {
        vocab: user.eolSummaries.vocab[lesson], //vocab: array[part1, part2, part3, ...]
        express: user.eolSummaries.express[lesson],
        grammar: user.eolSummaries.grammar[lesson],
      };
      res.status(200).json(eol);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateFinalQuizResult = async (req, res) => {
  const { id, score, ans_stats } = req.body;
  try {
    const user = await Users.findOne({ _id: id });
    if (user) {
      user.quizResults.score = score;
      user.quizResults.ans_stats = ans_stats;
      const result = await Users.findByIdAndUpdate(id, user, { new: true });

      if (!result) {
        return res.status(404).send({ message: "User not found" });
      }

      return res.status(200).json(result.quizResults);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { createUser, loginUser, updateLearningStyle, updateLearningStyleScore, getLearningStyle, updateEOL, getEOLByLesson, updateFinalQuizResult };
