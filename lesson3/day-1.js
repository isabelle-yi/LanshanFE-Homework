//let num=122;
//num=100;
//console.log(num);

//const age=25;
//console.log(age);

//let str="isabelle javascript practice";
//console.log(str);

/*let group=
{
    name:"isabelle",
    age:18,
    city:"chongqing"
};
let introduce=`mayname is ${group.name}
i am ${group.age} years old
i come from ${group.city}`;
console.log(introduce);

group.city="sichuan";
console.log(group);
group={
    name:"coco",
    age:20,
    city:"sichuan"
}

const group2=
{
    name:"cici",
    age:18,
    city:"chengdu"
};
console.log(group2);
group2.city="mianyang";
console.log(group2);
group2.city="mianyang";
console.log(group2);*/


/*let judege=true;
let isvalid=0>=5;
let isvalid2=0===5;
console.log(judege);
console.log(isvalid);
console.log(isvalid2);*/

/*let a=2;
let b=3;
console.log(a!==7);
console.log(a!==7);
console.log(a>3&&b!==0);
console.log(b);
console.log(a**b);*/

/*let a;
let b=null;
console.log(a);
console.log(b);*/

/*let tem=26;
if(tem>30)
{
    console.log("hot day");
}
else if(tem>20&&tem<=30)
{
    console.log("warm day");
}
else
{
    console.log("cool day");
}*/

/*let year=1990;
if(year%4==0&&year%100!=0)
{
    console.log("leap year");
}
else if(year%400===0)
{
    console.log("leap year");
}else 
{
    console.log("not leap year");
}*/

/*let day=3;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}*/



/*for(let i=1;i<=9;i++)
{
    line="";
    for(let j=1;j<=i;j++)
    {
        line+=`${j}x${i}=${i*j} `;
    }
    console.log(line);
    
}*/

/*function add(x,y)
{
    return x+y;
}
let result =add(9,9);
console.log(result);*/

let numbers=['菠萝','苹果','香蕉','梨子'];
console.log(numbers.length);
numbers.push("橘子");
numbers.unshift("西瓜");
let removeItem=numbers.pop();
let removeItem2=numbers.shift();
let removeItems=numbers.splice(1,2,"葡萄","桃子");
let index=numbers.indexOf("橘子");
let judge=numbers.includes("荔枝");
console.log(index);
console.log(removeItem);
console.log(removeItem2);
console.log(numbers);
console.log(removeItems);
console.log(judge);
console.log(numbers[1]);

let numbers2=[2,1,6,4,5];
numbers2.sort();
console.log(numbers2);
