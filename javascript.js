/*let newBtn=document.createElement("button");
newBtn.innerText="click me!";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn);

let para=document.querySelector("p");
console.log(para.classList)
let demo=para.classList.add("newClass")
console.log(demo)*/

//let modeBtn=document.querySelector("#mode");
//let currMode="Light";

/*btn1.onclick=()=>{
    console.log('button was clicked');
    let a=45;
    a++;
    console.log(a);
}
btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked")
    console.log(evt);
});

let btn2=document.querySelector("#btn2");
btn2.ondblclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
}
let btn3=document.querySelector("#btn3");
btn3.onmouseover=()=>{
    console.log('you are inside div')
}
modeBtn.addEventListener("click",(evt)=>{
    if(currMode==="Light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="Light";
        document.querySelector("body").style.backgroundColor="white";
    }

      console.log(currMode);
});

//classes and objects
const student={
    fullName:"shubham mishra",
    marks:98,
    printMarks:function(){
        console.log("marks=",this.marks)
    },
};

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun={
    salary:5000,
};

karanArjun.__proto__=employee;

//inheritance
class person{
    constructor(){
        this.species="homo spines"
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }

}
class engineer extends person{
    constructor(branch){
        super();
        this.branch=branch;
    }
    work(){
        console.log("work")
    }
}
let shubhamobj=new engineer("chemical branch");

let DATA="screte information"
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",DATA)
    }
}
let student1=new user("shubham","shubham@gmail.com")
let student2=new user("umesh","umesh@gmail.com")

console.log("one")
console.log("two")
setTimeout(()=>{
    console.log("hello")
},4000);
console.log("three")
console.log("four")

function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
        getnextdata();
        }
    },2000);
}

getdata(1,()=>{  //callback
    getdata(2)
  
});

let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve("sucess")

})
function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{   
     setTimeout(()=>{
        console.log("data",dataid);
        resolve("sucess");
        if(getnextdata){
        getnextdata();
        }
    },2000);
});
}
const getPromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("I am a promise");
    //resolve("sucess")
    reject("error")
});
}
let promise=getPromise()
promise.then((res)=>{
    console.log("promise fulfiled",res)
});
promise.catch((err)=>{
    console.log("rejected",err);
});
function getdata1(){
    return new Promise((resolve,reject)=>{   
     setTimeout(()=>{
        console.log("data1");
        resolve("sucess");    
        });
    },2000);
}
function getdata2(){
    return new Promise((resolve,reject)=>{   
     setTimeout(()=>{
        console.log("data2");
        resolve("sucess");    
        });
    },2000);
}
console.log("fetching data1....")
getdata1().then((res)=>{
    console.log("fetching data2....")
    getdata2().then((res)=>{});
});

function getdata(dataid){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataid);
        resolve("sucess");
    },2000);
});
}
//promise chain
getdata(1)
.then((res)=>{
   return getdata(2);
   })
.then((res)=>{
    console.log(res) ;    
});

//async and await

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("sucess")
        },2000);
    });
}
async function getweatherData(){
    await api();
}*/

//fetch api
const URL="https://cat-fact.herokuapp.com/facts";
const facts=document.querySelector("#fact")
const mode=document.querySelector("#mode")

const getFacts=async()=>{
    console.log("getting data.....")
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json()
    facts.innerText=data[4].text;
};
mode.addEventListener("click",getFacts);





