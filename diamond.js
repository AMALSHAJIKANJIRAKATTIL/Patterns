let fs = require("fs");
let data = fs.readFileSync('pattern.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n=parseInt(readLine());
let coloumns=0;
let temp=n;


for(let i=1;i<2*n;i++){ //row

  let spaces=parseInt(i>n?i-n:n-i);
  
if(i>n){

  temp--; 
  coloumns=2*temp-1;   
}else{
  coloumns=2*i-1;
}


for(let p=0;p<spaces;p++){  //spaces

  process.stdout.write(" ");

}

for(let q=1;q<=coloumns;q++){ //coloumns
  
  process.stdout.write("*");

}

console.log();
}

/*
   *
  ***
 *****
  ***
   *
*/

