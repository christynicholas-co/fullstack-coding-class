Consider the following code.  What would be console logged?  Why is apple type reported incorrectly?

-->Apple type is clementine

What would you change to address this issue (the Apple type is mis-represented in the last line below)?

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    <!--var orange = apple--> remove 

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)

    apple type is granny smith.


Why does this comparison return false?  Please explain.

    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?

Variables can be different objects and hold the same value.
its like basket a, and basket b both have an apple, orange and lime. 

Score - 50%

This question was dealing with objects and how we uses a reference to compare,m not values.
school_a is actually pointing to a different part of the memory than school_b so
they will never be equal. What we wanted to check were the values.