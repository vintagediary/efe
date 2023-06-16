//var a;
//a=23;
//console.log(a);
//a="hello";
//console.log(a);
//console.log(typeof a);
//a=true;
//console.log(typeof a);
//var num=10;
//console.log(num);
//boolean
//var t =true;
//var f=false;
//console.log(t);
//console.log(f);
//string
// ` `," ",' ' backtick,double qutes, sigle quates
//var str= 'a';
//console.log(typeof str);
//str = "how are you" ;
//console.log(str);
//backslash n("\n") to use next line
//var b;
//b = "how are you \n i am fine how about you" ;
//console.log(b);

//var num=300;
//console.log(`half of ${num} is ${num/2}`)

//var has some problem

//1) redeclaration is allowed
//var r="hello";
//console.log(r);

//var r =100;
//console.log(r);

//overcome karne ke liye let aaya

//let l=100;
//console.log(l);
//let l="200";
//console.log(l);
//SyntaxError: Identifier 'l' has already been declared

//we can reintialize the variable but cannot redeclar it 
//l=300;
//console.log(l);
//console.log(`half of l is ${l/2}`);

//loops in js 

//var num =20;
//for(var i=1;i<=20;i++){
//if(i%2==0);{
//console.log(i);
//}
//}

//const keyword
//const a=2;
//na hi redelear kar sakte hai na hi reinitialize
//const a=5;
//a=4;//TypeError: Assignment to constant variable.
//for (var i=0;i<10;i++){
//  if(i%2==0){
//       console.log(i);   
//   }
//}
//console.log("value is "+i)
//but let keyword is block scoped the value of i is only valid inside the block but in var i is valid outside the block also.
//var is global scoped but in fuction fuction scoped
//for (let i=0;i<10;i++){
//    if(i%2==0){
//       console.log(i);   
//    }
//}
//console.log("value is "+i)


