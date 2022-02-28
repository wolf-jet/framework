const { Client } = require("@wolf.jet/core");
const IFilter = require("./IFilter");
const CommandContext = require("../CommandContext");

module.exports = class BotMaker extends IFilter {
  #Maker;
  /**
   * Band user to run command
   */
  constructor(id) {
    super();
    this.FailedMessage = "(n) you are banded to use this command";
  }
  /**
   *
   * @param {Client} client
   * @param {CommandContext} context
   */
  Validate = async (client, context) => {
    try {
      if (context.User.Id === this.#Maker) return false;
    } catch (e) {
      return true;
    }
  };
};
