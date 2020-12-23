const siteRouter = require('./site');
const userRouter = require('./user');
const productRouter = require('./product');

module.exports = (app) => {
  app.use("/", siteRouter);
  app.use("/user", userRouter);
  app.use("/product", productRouter);
};
