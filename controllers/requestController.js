const Request = require("../models/requestModel.js");
const AppError = require("../utils/appError.js");
const catchAsync = require("../utils/catchAsync.js");

exports.createRequest = catchAsync(async (req, res, next) => {
  const request = await Request.create({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    status: req.body.status,
  });

  res.status(200).json({
    status: "success",
    data: {
      request,
    },
  });
});
