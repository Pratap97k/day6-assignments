//Fat arrow function
//function without parameter& without return type 
let temp1=()=>
{
    console.log("first type of fat arrow fn is called");

}
temp1();

//function with parameter with retun type
let temp2=(a:number,b:number):number=>
{
    return(a+b);

}
let res1=temp2(2,2);
console.log("result is"+ res1)

//function with parameter with retun type
let temp3 =(v:number,p:number)=>
{
    console.log("additon is"+ (v+p))

}
 temp3 (6,2);
 //function without parameter and with return type
 let temp4=()=>
{
return(5+5)
}
let res2=temp4()
console.log("result is"+res2);
