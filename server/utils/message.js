/**
 * Created by starsky on 4/25/17.
 */

let generateMessage = (from, text) => {
  return {
      from,
      text,
      createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage};
