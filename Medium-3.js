let aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);
// -------------------------------------------------------------------

let n = [1,2,3];
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
console.log(add(n));

// -------------------------------------------------------------------
(function(arr1) {
 let sum1 = 0;
 for (let i = 0; i < arr1.length; i++){
 sum1+= arr1[i];
 }
 console.log(sum1);
})([9,8,5,6,4,3,2,1]);

// -------------------------------------------------------------------
var ano = function(arro) {
 for (var i = 0; i <arro.length; i++) {
 console.log(arro[i].charAt(0).toUpperCase() + arro[i].slice(1));
 }
}
ano(['guvi', 'geek', 'zen', 'fullstack']);

// -------------------------------------------------------------------

const newArray3 = [1,3,2,5,10];
const myPrime = newArray3.filter(num=>{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
            return true;
});
console.log(myPrime);

// -------------------------------------------------------------------

const num4 = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = ((a, b) => a + b);
const sum4 = num4.reduce(sum)
console.log(sum4);

// -------------------------------------------------------------------
