/**
 * @return {string}
 */
var BeerSong = function (number) {
    let lyrics ="";
    if(number != 1) {
        lyrics += number + " bottles of beer on the wall, " + number + " bottles of beer.\n" +
            "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.";
        return lyrics;
    }else {
        lyrics +=  "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
        return lyrics;
    }
}

var printLyrics = function (number) {
    let lyrics = "";
    while(number > 2){
        lyrics += number + " bottles of beer on the wall, " + number + " bottles of beer.\n" +
            "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.\n";
        number --;
    }
    if(number == 2){
        lyrics +=  "2 bottles of beer on the wall, 2 bottles of beer.\n" +
            "Take one down and pass it around, 1 bottle of beer on the wall.\n";
    }
    lyrics += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take one down and pass it around, no more bottles of beer on the wall.\n" +
        "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.";
    return lyrics;
}
module.exports = {
    BeerSong: BeerSong,
    printLyrics : printLyrics
};
