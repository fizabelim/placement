1 sort

var map = new Map();
map.set('2-1', "red");
map.set('0-1', "pink");
map.set('3-1', "yellow");

var mapAsc = new Map([...map.entries()].sort());

console.log(mapAsc)

2 for
var input = [2,3,8,1,4,5,9,7,6];

var output = [];
var inserted;

for (var i = 0, ii = input.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}


console.log(output);

3 foreach

a = [];
a[0] = 1000;
a[1] = 500;
a[2] = 200;
a[3] = 100;
a.sort( function( a, b ) { return a - b });
a.forEach( function( value ) { console.log( value ) }); 
