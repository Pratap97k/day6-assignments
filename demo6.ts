//ananyomus function& use of optional &default parameter
//function without parameter and without return type 
let temp5=function()
{
    console.log("first type of anonymous fn function called");

}
temp5();

//function with parameter and  with retun type
let temp6=function(a:number,b?:number):number//use of optional parameter
{
    return(a+b!);

}
let res4=temp6(2);
console.log("result is"+ res4)

//function with parameter and with retun type
let temp7 =function(v:number=44,p:number=5)//use of default parameter
{
    console.log("additon is"+ (v+p))

}
 temp7 ();
 //function without parameter and with return type
 let temp8=function()
{
return(5+5)
}
let res5=temp8()
console.log("result is"+res5);
