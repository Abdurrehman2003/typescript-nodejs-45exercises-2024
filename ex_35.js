// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animalsNames = ["Cow", "Sheep", "Goat", "Camel"];
// printing only names
for (var _i = 0, animalsNames_1 = animalsNames; _i < animalsNames_1.length; _i++) {
    var i = animalsNames_1[_i];
    console.log(i);
}
for (var _a = 0, animalsNames_2 = animalsNames; _a < animalsNames_2.length; _a++) {
    var i = animalsNames_2[_a];
    console.log("".concat(i, " is a domestic animal."));
}
console.log("All these animals ".concat(animalsNames[0], ", ").concat(animalsNames[1], ", ").concat(animalsNames[2], " and ").concat(animalsNames[3], " meat is Halal in Islam"));
