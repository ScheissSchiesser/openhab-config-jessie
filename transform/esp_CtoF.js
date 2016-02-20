// Wrap everything in a function
(function(i) {
    var array = i.split(", ")
    var tempc = parseFloat(array[0])
    var tempf = tempc * 9/5 + 32
    return tempf;
})(input)
// input variable contains data passed by openhab
