const siteRouter = require('./site');
const userRouter = require('./user');
const productRouter = require('./product');
const apiRouter = require('./api');

module.exports = (app) => {
  app.use("/", siteRouter);
  app.use("/user", userRouter);
  app.use("/product", productRouter);
  app.use("/api", apiRouter);
};
