const inputBOX=document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");
function AddTask()
{
if(inputBOX.value==="")
{
alert("write something first ");
}
else{
    let li = document.createElement('li');
    li.innerHTML=inputBOX.value;
     listcontainer.appendChild(li)
     let span=document.createElement("span");
     span.innerHTML="\u00d7";
     li.appendChild(span);
     save();
}
inputBOX.value="";  
}
listcontainer.addEventListener("click",((e)=>{
    if(e.target.tagName==="LI"){
        e.target.classlist.toggle("checked");
        save();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();

    }
}),false)
function save()
{
    localStorage.setItem("data",listcontainer.innerHTML)
}
function show()
{
    listcontainer.innerHTML=localStorage.getItem("data")
}
show()