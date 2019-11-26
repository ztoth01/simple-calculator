const asyncHandler = require("../middleware/async");
const ErrorHandler = require("../utils/errorResponse");
const readFile = require("../utils/readFile");
const fs = require("fs");

// @desc    Get a single result
// @route   GET /api/v1/result
// @access  Public
exports.getResult = asyncHandler(async (req, res, next) => {
  const data = await readFile("./data/result.txt", "utf8");

  if (!data) {
    return next(new ErrorHandler("Bad request", 400));
  }
  res.status(200).json({
    success: true,
    data
  });
});

// @desc    Save a new result and replace the previously saved one
// @route   POST /api/v1/result
// @access  Public
exports.saveResult = asyncHandler(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler(err, 400));
  }
  fs.writeFile("./data/result.txt", req.body, err => {
    if (err) {
      return next(new ErrorHandler(err, 400));
    }
    res.status(201).json({
      success: true
    });
  });
});
