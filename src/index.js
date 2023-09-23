const serverless = require("serverless-http");
const app = require("./server/server");
const { PORT } = require("./config/environments");
app.listen(PORT);

module.exports.handler = serverless(app);
