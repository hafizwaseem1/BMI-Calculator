function calc()
{

let height= +document.querySelector("#ht").value;
let weight= +document.querySelector("#wt").value;
let res= weight/height**2 ;
console.log("you've got " +res+ "%");
document.write("you've got " +res+ "%");
alert("you've got " +res+ "%");


if(res==18.5||res==24.5)
{
    alert("You are healthy");
}
else if(res>24.5)
{
    alert("You are overweight");
}
else if(res<18.5)
{
    alert("You are underweght");
}

}
