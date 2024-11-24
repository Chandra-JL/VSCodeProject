var age = 20;

if (age>18)
    {
        console.log("eligible for vote");
    }
else 
{
    console.log("not eligible for voting");
}

var vage=17;

if (vage==17)
    {
        console.log("You will be eligible for voting next year");
    }
else if (vage>=18)
    {
        console.log("Eligible for vote");
    }

else
{
    console.log("Not eligible for voting");
}


var a = 100; // this is number datatype
var b = "100"; // this is string datatype

if(a==b){ // double equal to will match only value not datatype.. === triple equal to will check for datatype as well
    console.log("Matching");
}else{
    console.log("Not Matching");
}
