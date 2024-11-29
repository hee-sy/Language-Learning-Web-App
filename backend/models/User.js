import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter username"],
      default: "no name",
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    learningStyle: {
      AR: {},
      SI: {},
      VV: {},
      SG: {},
    },
    eolSummaries: {
      vocab: [],
      express: [],
      grammar: [],
    },
    quizResults: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("User", UserSchema);
export default Users; //Users is an object that represents the User collection in the database
// "default" keyword is used to export only one object, function, or primitive from a script file.
