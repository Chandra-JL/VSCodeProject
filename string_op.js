var str1= "This s first string";
var str2= "Continued to second string";
var str3= " This string to check replace method";
 
var result = str1.concat(str2);

console.log(result);
console.log(str1+" "+str2);
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str1.length);
console.log(str2.toLocaleLowerCase());

console.log(str3.replace(" to", " used to"));


console.log(str1.split(" "));
console.log(str1.split(" ")[0]);
console.log(str1.split(" ")[1]);
