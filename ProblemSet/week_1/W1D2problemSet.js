function isOdd(num) {
    return console.log(!(num % 2 == 0));
}

function isOddV2(num) {
    if (!(num % 2 == 0)) {
        return console.log(true);
    }
    return console.log(false);
}
isOdd(2);    // => false
isOdd(5);    // => true
isOdd(-17);  // => true

isOddV2(2);    // => false
isOddV2(5);    // => true
isOddV2(-17);  // => true

function plusFive(num) {
    return console.log(num + 5)
}

plusFive(10);  // => 15
plusFive(2);   // => 7
plusFive(-8);  // => -3  

function threeOrSeven(num) {
    return console.log(num % 3 === 0 || num % 5 === 0)
}

function threeOrSevenV2(num) {
    if (num % 3 === 0) {
        return console.log(true);
    }
    else if (num % 5 === 0) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
}

threeOrSeven(3);   // => true
threeOrSeven(42);  // => true
threeOrSeven(8);   // => false

threeOrSevenV2(3);   // => true
threeOrSevenV2(42);  // => true
threeOrSevenV2(8);   // => false

function hello(str) {
    return console.log(`hello, ${str}`);
}
hello("child");    // prints "Hello, child"
hello("Anthony");  // prints "Hello, Anthony"


function yell(string) {
    return console.log(`${string.toUpperCase()}!!!`);
}

yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
yell("Time to program"); // => "TIME TO PROGRAM!!!"


function whisper(string) {
    return console.log(`...${string.toLowerCase()}...`)
}

whisper("Hey Anthony"); // => "...hey anthony..."
whisper("YEA! that was fun"); // => "...yea! that was fun..."

function isSubstring(searchString, subString) {
    if (searchString.toLowerCase().indexOf(subString) !== -1) {
        return console.log(true);
    }
    return console.log(false);
}

function isSubstringV2(searchString, subString) {
    return console.log(searchString.toLowerCase().indexOf(subString) !== -1);

}

isSubstring("The cat went to the store", "he cat went"); // => true
isSubstring("Time to program", "time"); // => true
isSubstring("Jump for joy", "joys"); // => false

isSubstringV2("The cat went to the store", "he cat went"); // => true
isSubstringV2("Time to program", "time"); // => true
isSubstringV2("Jump for joy", "joys"); // => false

function echo(string) {
    return console.log(`${string.toUpperCase()} ... ${string} ... ${string.toLowerCase()}`);
}

echo("Mom!"); // => "MOM! ... Mom! ... mom!"
echo("hey"); // => "HEY ... hey ... hey"
echo("JUMp"); // => "JUMP ... JUMp ... jump"

function isEven(num) {
    return console.log(num % 2 == 0)
        ;
}

isEven(2); // => true
isEven(5); // => false

function averageOfFour(n1, n2, n3, n4) {
    return console.log((n1 + n2 + n3 + n4) / 4);
}
averageOfFour(10, 10, 15, 5); // => 10
averageOfFour(3, 10, 11, 4); // => 7
averageOfFour(1, 2, 3, 4); // => 2.5