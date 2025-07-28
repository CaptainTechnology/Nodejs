
const comparison = {
  "RuntimeError": {
    "definition": "An error that occurs while the program is running, even though the code is syntactically correct.",
    "occurrence": "After the program starts executing.",
    "causes": [
      "Accessing undefined or null values",
      "Invalid function calls",
      "File I/O failures",
      "Uncaught exceptions"
    ],
    "example": {
      "code": "let user = null;\nconsole.log(user.name);",
      "error": "TypeError: Cannot read properties of null (reading 'name')"
    },
    "can_be_caught_with_try_catch": true,
    "effect": "Program starts but crashes during execution.",
    "fix": "Use try...catch, validate data and logic."
  },
  "SyntaxError": {
    "definition": "An error caused by incorrect code structure that prevents the program from compiling or running.",
    "occurrence": "Before execution, during parsing or compilation.",
    "causes": [
      "Missing brackets or parentheses",
      "Incorrect use of keywords",
      "Invalid JSON or expressions",
      "Typos in code structure"
    ],
    "example": {
      "code": "function greet(name {\n  console.log('Hello ' + name);\n}",
      "error": "SyntaxError: Unexpected token '{'"
    },
    "can_be_caught_with_try_catch": false,
    "effect": "Program fails to start or load.",
    "fix": "Correct the code syntax before execution."
  },
  "LogicalError": {
    "definition": "An error where the program runs without crashing but produces incorrect or unintended results due to flawed logic.",
    "occurrence": "During or after execution; often only found during testing or review.",
    "causes": [
      "Incorrect operators (e.g., using + instead of * for multiplication)",
      "Wrong conditions in if/else or loops",
      "Incorrect formula or algorithm",
      "Misplaced statements or returns"
    ],
    "example": {
      "code": "function calculateAverage(a, b, c) {\n  return (a + b + c) / 2; // Should divide by 3\n}\nconsole.log(calculateAverage(10, 20, 30));",
      "error": "Produces incorrect average (30 instead of 20)"
    },
    "can_be_caught_with_try_catch": false,
    "effect": "Program runs but output/results are wrong.",
    "fix": "Thorough testing, debugging, code reviews, and using correct logic."
  }
};
