
// Strings

// creating strings
// const str1 = "Demon Dweller";
// const str2 = 'Daemon Targaryen'
// const day = 89;
// const str3 = `Strike is coming soon ${day}` // Modern way // output- Strike is coming soon 89

// console.log(str1, str2, str3);



// const str4 = "Demon  // you cannot write like this
//     Dweller
// ";

// but in backticks you can write like that

// const str5 = `Strike is
//     coming
//  soon`

const str = `Hello Coder Army`;

// console.log(str.length); // output - 16

// accessing items
// console.log(str[0]);

// Strings are immutable
// str[2] = "S"; // you cannot change the string
// console.log(str);

// upper case
// console.log(str.toUpperCase()); // a new string is returned with Captilised letters

// lowercase
// console.log(str.toLowerCase());

// finding substr
// console.log(str.indexOf('Cod')); // 6 - index of starting of substring
// else -1

// console.log(str.includes('cod'));

// slices, parts of str
// starting index, ending index
// console.log(str.slice(0,3)); // Hel 
// console.log(str.slice(0)); // Hello Coder Army

// Negative indexing
// console.log(str.slice(-4)); // Army


// Sub string

// console.log(str.substring(2, 5)); //llo
// cannot use negative indexing in this

//concatination - adding

// const a = "Daemon"
// const b = "Targaryen"

// // const c = a + b; // DaemonTargaryen
// const c = a + " " + b; // Daemon Targaryen
// // console.log(c);

// console.log(12 + a); // 12Daemon

// replace

// console.log(str.replace("ode", "iam")); // Hello Ciamr Army

// trim - removes leading and ending back spaces

// const user = "   Dexter   ";
// console.log(user.trim());

// split

// const name = "Rohit,Mohit,Suraj,Rohan";

// console.log(name.split(',')); // [ 'Rohit', 'Mohit', 'Suraj', 'Rohan' ]

// ------------------------------------DATE-----------------------

const now = new Date();

// console.log(now); // 2026-02-17T12:37:43.986Z
// the above one is the UTC - Universal Time Co-ordinate
// India's UTC + 5:30

// console.log(now.toString()); // Tue Feb 17 2026 18:10:15 GMT+0530 (India Standard Time)

// console.log(now.toLocaleString()); // 17/2/2026, 6:15:20 pm


// console.log(now.getDate()); // 17
// console.log(now.getFullYear()); // 2026
// console.log(now.getMonth()); // Month count starts from, jan-0, feb-1 like that


// creating custom dates

// const newdate = new Date(2025, 8, 20, 8, 25, 16, 125);
// console.log(newdate.toString());







