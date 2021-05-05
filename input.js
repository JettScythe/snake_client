const { moveUpKey, moveLeftKey, moveDownKey, moveRightKey } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  switch (key) {
    case '\u0003':
      process.exit();

    case moveUpKey:
      connection.write('Move: up');
      break;
    
    case moveLeftKey:
      connection.write('Move: left');
      break;

    case moveDownKey:
      connection.write('Move: down');
      break;

    case moveRightKey:
      connection.write('Move: right');
      break;

    case '\u0031':
      connection.write('Say: waddup');
      break;

    case '\u0032':
      connection.write('Say: howdy');
      break;
    
    case '\u0033':
      connection.write('Say: Music Suggestions?');
      break;

    case '\u0034':
      connection.write('Say: Movie Suggestions?');
      break;

    case '\u0035':
      connection.write('Say: imma getcha');
      break;
  };
};

module.exports = setupInput;