console.log("\ntask3:");
let age=prompt("请输入你的年龄：");
console.log("你的年龄是："+age);
if(age<18)
{
    console.log("未成年");
}else if(age>=18&&age<30)
{
    console.log("青年");
}else if(age>=30&&age<60)
{
    console.log("中年");
}else if(age>=60)
{
    console.log("老年");
}