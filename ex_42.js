// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicianNames = ["Ayaz", "Fayaz", "Tariq", "Madad"];
function show_magicians(greet) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("Hello, How are you Mr.");
show_magicians("Hello, "); // 2nd time calling of function
