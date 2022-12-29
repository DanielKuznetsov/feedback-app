const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Please enter title of the request!"],
  },
  category: {
    type: String,
    lowercase: true,
    required: [true, "Please choose a category from the dropdown list!"],
  },
  feedback: {
    type: String,
    maxlength: [1000, "The description cannot have more than 75 words."],
    required: [true, "Please leave your feedback!"],
    validate: [
      function (feedback) {
        return feedback.split(" ").length <= 75;
      },
      "The description of your feedback cannot have more than 75 characters.",
    ],
  },
  feature: {
    type: String,
    default: "Feature",
    enum: ["UI", "UX", "Enhancement", "Bug"],
    required: [true, "Please choose the category!"],
  },
  status: {
    type: String,
    default: "Suggestion",
    enum: ["Planned", "In-Progress", "Live"],
    required: [true, "Please choose the status!"],
  },
  upvotes: {
    type: Number,
    default: 0,
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
