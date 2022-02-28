const { Client } = require("@wolf.jet/core");
const IFilter = require("./IFilter");
const CommandContext = require("../CommandContext");

module.exports = class GroupFilter extends IFilter {
  constructor() {
    super();
    this.FailedMessage = `(n) Sorry, this command can only be used in a group.`;
  }

  /**
   *
   * @param {Client} client
   * @param {CommandContext} context
   */
  Validate = async (client, context) => {
    return context.Message.IsGroup;
  };
};
