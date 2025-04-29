### Question 1

    line 9 prints 20

### Question 2

    line 13 prints 20

### Question 3

    var ignores the code block, allowing it to be accessible for the any calls from outside of the code block. It leads to hoisting behavior and accidental reuse of variables.

### Question 4

    line 9 prints 20

### Question 5

    The code returns reference error because of "let". Unlike "var", it only lives within the codeblock. Since the codeblock for "let result" variable ends at line 11, result does not exists after that line.

### Question 6

    The code returns type error because you can't modify the "const" variable type.

### Question 7

    The code returns reference error because of the same reason as question 5.
