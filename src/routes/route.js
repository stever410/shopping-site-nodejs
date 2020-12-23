const siteRouter = require('./site');
const userRouter = require('./user');

module.exports = (app) => {
  app.use("/", siteRouter);
  app.use("/user", userRouter);
};
