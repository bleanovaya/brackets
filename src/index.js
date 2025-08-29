module.exports = function check(str, bracketsConfig) {
  const stack = [];

  const openBrackets = [];
  const bracketPairs = {};

  bracketsConfig.forEach(([open, close]) => {
    openBrackets.push(open);
    bracketPairs[close] = open;
  });

  str.split('').forEach((char) => {
    if (openBrackets.includes(char)) {
      if (bracketPairs[char] === char) {
        if (stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else {
        stack.push(char);
      }
    } else {
      const last = stack[stack.length - 1];
      if (bracketPairs[char] === last) {
        stack.pop();
      } else {
        stack.push('invalid');
      }
    }
  });

  return stack.length === 0;
};
