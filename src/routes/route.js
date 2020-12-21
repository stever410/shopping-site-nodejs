const siteRouter = require('./site');
const authRouter = require('./auth');

module.exports = (app) => {
  app.use("/", siteRouter);
  app.use("/auth", authRouter);
};
