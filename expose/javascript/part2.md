### Question 1

    line 12 will print 3 because prices.length = 3, and according to the for-loop behavior, var i will keep incrementing up to 3 and that's when the for-loop stopped.

### Question 2

    line 13 will print 150, because 300 * (1 - 0.5). Even though it's inside the loop, var variable ignores the code block

### Question 3

    line 14 will print 150, because round(150 * 100)/100. The finalPrice var is declared outside of the loop, but constantly getting updated and reassigned to the new value from the operation.

### Question 4

    The function will return [50, 100, 150] which is a list of finalPrices calculated in each iteration inside the loop.

### Question 5

    It will return reference error, because of let variable type. It doesn't exist outside of the codeblock, so i only exist inside the for-loop.

### Question 6

    It will return reference error as well, due to similar reason as question 5

### Question 7

    It will return 150, this time finalPrice lives within the function codeblock, but outside of the for-loop. The console.log is still in the function codeblock, and that is why finalPrice let variable still exists.

### Question 8

    It will return [50, 100, 150] just like how it worked with var variable. Even though it's let variable, we are returning the variable as the function return.

### Question 9

    line 11 will raise reference error, because of let variable.

### Question 10

    line 12 will print 3. length is the const variable but it got assigned to price.length and never got reassigned to anything.

### Question 11

    The function will return [50, 100, 150], it is a const variable but const only raise error on reassigning different value of the data type. But in our case, we are only mutating the list by pushing.

### Question 12

    a) student.name
    b) student['Grad Year']
    c) student.greeting()
    d) student['Favorite Teacher].name
    e) student.courseLoad[0]

### Question 13

    a) '3' + 2 = '32'
    This is because the + with a string forces to string concatenation, 2 is converted into '2'
    b) '3' - 2 = 1
    - with an integer forces the number subtraction, '3' is converted into 3
    c) 3 + null = 3
    null is converted into 0
    d) '3' + null = '3null'
    As the same behavior question a, null got converted into 'null'
    e) true + 3 = 4
    true is 0 in numeric
    f) false + null = 0
    false is 0, and null is also 0 in numeric
    g) '3' + undefined = '3undefined'
    undefined is converted into 'undefined'
    h) '3' - undefined = NaN
    Since - is an arithmetic operation, undefined is converted into NaN. 3 - NaN = NaN

### Question 14

    a) '2' > 1 = true
    '2' is converted into 2
    b) '2' < '12' = false
    This is because when both are strings, it does lexicographical compare. Since '2' < '1', '2' < '12' as well
    c) 2 == '2' = true
    == coerces '2' into 2
    d) 2 === '2' = false
    === doesn't perform coerces, it's a strict equality check.
    e) true == 2 = false
    true is converted into 1, but 1 == 2 is false
    f) true == Boolean(2) = true
    Boolean() return false for values like 0, "", null, undefined, NaN. In our case, it returns true so true == true is true

### Question 15

    == is loose equality. It coerces data types of the operands into a common type.
    === is strict equality. It checks both data type and value without doing any coerce.

### Question 17

    The result will be [2, 4, 6]. This is because the for-loop inside the modifyArray is pushing the value returned from the callback function, doSomething in our case, which multiply the array[i] by 2.

### Question 18

    Output : 1 4 3 2
