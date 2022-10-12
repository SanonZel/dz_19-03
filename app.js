var color = ["green", "red", "yellow", "blue", "orange"];

console.log (color);

function colorick() {
    return console.log(color);
}

color.map(function(item, index){ 
    console.log(item, index)
})
 
// color.push("magenta", "pink", "violet")  
