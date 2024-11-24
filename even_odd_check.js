/*var num = 11;
var result = num % 2;

if (result === 0) {
    console.log("this s even num");
}

else {
    console.log(" this is odd num");
}

var no=12;

if ( typeof no !== 'number' )
    {
        console.log(" Not a number");
    }

    else if  ( no%2 == 0)
    {
        console.log (" this is even num");
    }

    else{
        console.log ("this is odd num");
    }*/

var num = 9;

if (typeof num === 'number') {
    console.log("Value is number");
}
else {
    console.log("Value is not number");
}

if (num % 2 == 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}

// to check typeof property for string. In above code typeof property used to validate the value is integer.
var a="String";
if (typeof a === 'string')
{
    console.log("the value is string");
}
else
{
    console.log("The value is not string");
}