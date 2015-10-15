'use strict';

function add(x, y) {
    // Addition is one of the four elementary,
    // mathematical operation of arithmetic with the other being subtraction,
    // multiplication and division. The addition of two whole numbers is the total
    // amount of those quantitiy combined. For example in the picture on the right,
    // there is a combination of three apples and two apples together making a total
    // of 5 apples. This observation is equivalent to the mathematical expression
    // "3 + 2 = 5"
    // Besides counting fruit, addition can also represent combining other physical object.
    return(x + y);
}

for(var i = 0; i < 500000000; i++) {
    if (add(i, i++) < 5) {
	//
    }
}
