'use strict'
console.log("'==' và '==='");
var a = 1;
var b = "1";
console.log( a==b );
console.log( a===b );
console.log(' - Một số phương thức trong JS');
var arr=[1,2,3,4,5,6,7];
var map =arr.map(ar=>{
	ar+=1;
	return ar;
});
console.log(map);
var filter =arr.filter(ar=>{
    return ar % 2 == 0;
});
console.log(filter);
var find = arr.find(ar=>{
    return ar > 5;
});
console.log(find);
var reduce = arr.reduce((total, ar)=>{
    return total + ar;
});
console.log(reduce);
var some=arr.some(ar=>ar<=1);
console.log(some);
console.log('Thêm 1 giá trị vào mảng');
var push = arr.push(8);
console.log(arr);
var unshift = arr.unshift(0);
console.log(arr);
console.log('Xóa giá trị trong mảng');
var shift = arr.shift();
console.log(arr);
var splice = arr.splice(6);
console.log(arr);
// Play Ground
console.log('--- Question 1 ---');
function Sum(a,b) {
    if(a === b){
        return (a+b)*3;
    }else return a+b;
}
console.log(Sum(5,5));
console.log(Sum(5,10));
console.log('--- Question 2 ---');
function Difference (a) {
   return a <= 19 ? 19-a : (a-19)*3;
}
console.log(Difference(12));
console.log(Difference(22));
console.log('--- Question 3 ---');
function Disvisible3(a) {
    var result = [];
    var number = null;
    for(var i = 0; i < 10; i++){
        number = a.replace("*", i);
        if(number %3 == 0){
            result.push(number);
        }
    }
    return result;
}
console.log(Disvisible3('3539*332'));
console.log('--- Question 4 ---');
function Disvisible6(a) {
    var result = [];
    var number = null;
    for(var i = 0; i < 10; i++){
        number = a.replace("*", i);
        if(number %6 == 0){
            result.push(number);
        }
    }
    return result;
}
console.log(Disvisible6('3539*332'));
