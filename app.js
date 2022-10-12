const color = ["green", "red", "yellow", "blue", "orange", 'фылводфдлыов', 'олфрывлофрыв', ';фдылвфждыв'];
function colorpick(string, array){
     for(let i = 0; i < array.length; i++){
        if(string == array[i]){
            return console.log(array[i], 'найден');
        }
     }
}
let str = "orange"
colorpick(str, color)

// var colorr = ["green", "red", "yellow", "blue", "orange"];

// console.log (color);

// function colorick() {
//     return console.log(color);
// }

// color.map(function(item, index){ 
//     console.log(item, index)
// })