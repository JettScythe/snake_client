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

    case '\u0077':
      connection.write('Move: up');
      break;
    
    case '\u0061':
      connection.write('Move: left');
      break;

    case '\u0073':
      connection.write('Move: down');
      break;

    case '\u0064':
      connection.write('Move: right');
      break;
  };
};

module.exports = setupInput;