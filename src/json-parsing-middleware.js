module.exports = require("body-parser").json({
  type: () => true,
  limit: "10mb"
});
