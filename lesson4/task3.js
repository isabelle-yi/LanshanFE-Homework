console.log("\ntask3:");
let age=prompt("请输入你的年龄：");
console.log("你的年龄是："+age);
if(age<18)
{
    alert("未成年");
}else if(age>=18&&age<30)
{
    alert("青年");
}else if(age>=30&&age<60)
{
    alert("中年");
}else if(age>=60)
{
    alert("老年");
}