1. 3, i is declared with var type, although it declared in for loop.
2. 150, discountedPrice is declared with var type, although it declared in for loop.
3. 150, finalPrice is in the same scope with console.log and aslo with var type.
4. [50, 100, 150], function calculates discounted price for each item in the array and returns. 
5. error, it causes reference error. i is in scope in only in for loop.
6. error, it causes reference error. discountedPrice is in scope in only in for loop.
7. 150, finalPrice is in scope in funtion, therefore 150.
8. [50, 100, 150], function calculates discounted price for each item in the array and returns.
9. error, it causes reference error, i is in scope only in for loop.
10. 3, length is scope in the function, so it returns 3
11. [50, 100, 150], function calculates discounted price for each item in the array and returns.  
    
12. (A) student.name
    (B) student['Grad Year']
    (C) student.greeting();
    (D) student['Favorite Teacher'].name
    (E) student.courseLoad[0]

13. (A) '3' + 2 = '32'. JavaScript converts number to the string type and concate.
    (B) '3' - 2 = 1. JavaScript converts string to the number variable type.
    (C) 3 + null. In JavaScript boolean type converts to 0 for null.
    (D) 3null. converts  JavaScript converts boolean type to string type and concate.
    (E) 4. boolean type 'true' converts to int type 1, 1 + 3 = 4
    (F) 0, false = 0 and null = 0, 0 + 0 = 0
    (G) 3undefined 'undefined' converts to string and concate.
    (H) NaN, 3 converts no number but 'undetined' cannot converts to int type.

14. (A) true, '2' converts to int type 2 > 1 = true
    (B) false, both of them are string type and compare lexicographically.
    (C) true, '2' converts int type 2 == 2 and '==' is loose equality 
    (D) false, '===' is strict equality and both are not same type
    (E) false, true becomes int type as 1 and 1 is not equal to 2.
    (F) true, Boolean(2) returns true, true === true. 

15. == operator is loose equality, compare value after conversion. But === operator is strict equal to, check both variable type and value. 

16. I uploaded part2-question16.js.
    
17. Returns array[2, 4, 6]. In the function modifyArray, we have newArr. In the for loop, newArr pass function through callback which is doSomething function. After that, we push that value to the newArr. After for loop, ModifyArray function returns newArr.

18. I uploaded part2-question18.js.

19. 1 4 3 2