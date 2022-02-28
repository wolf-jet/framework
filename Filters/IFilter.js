const { Client } = require("@wolf.jet/core");
const CommandContext = require("../CommandContext");

module.exports = class IFilter {
  FailedMessage = null;

  /**
   * @param {Client} client
   * @param {CommandContext} context
   */
  Validate = async (client, context) => {};
};
