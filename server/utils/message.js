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

let generateLocationMessage = (from, latitude, longitude) => {
  return{
    from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`,
      createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage, generateLocationMessage};
