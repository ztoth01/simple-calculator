// async wrapper to clean up try catch blocks (DRY - noice mate init?!)
// resource: https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
// resource: https://www.acuriousanimal.com/blog/2018/03/15/express-async-middleware/
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
