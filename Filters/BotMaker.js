const { Client } = require("@wolf.jet/core");
const IFilter = require("./IFilter");
const CommandContext = require("../CommandContext");

module.exports = class Banded extends IFilter {
  #Maker;
  /**
   * Only Bot Maker Can Use This Command.
   */
  constructor(id) {
    super();
    this.FailedMessage = "Only bot maker can run this";
    this.#Maker = id;
  }
  /**
   *
   * @param {Client} client
   * @param {CommandContext} context
   */
  Validate = async (client, context) => {
    try {
      if (context.User.Id === this.#Maker) return true;
    } catch (e) {
      return false;
    }
  };
};
