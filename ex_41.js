// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicianNames = ["Ayaz", "Fayaz", "Tariq", "Madad"];
function show_magicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(item);
    }
}
;
show_magicians(); // calling the function
show_magicians(); // 2nd time calling of function
