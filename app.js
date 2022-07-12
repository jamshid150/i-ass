let addtaskinput=document.getElementById('addtaskinput');
let addtaskbtn=document.getElementById('addtaskbtn');

window.addEventListener('DOMContentLoaded',()=>{
    showTask();
})
addtaskbtn.addEventListener('click',()=>{
    let addtaskinputVal=addtaskinput.value;
    let webtask=localStorage.getItem('localtask');
    if(webtask==null){
        taskObj=[];
    }else{
        taskObj=JSON.parse(webtask);
    }
    taskObj.push(addtaskinputVal);
    localStorage.setItem('localtask',JSON.stringify(taskObj));
    addtaskinput.value='';
    showTask();
})

function showTask(){
    let webtask=localStorage.getItem('localtask');
    if(webtask==null){
        taskObj=[];
    }else{
        taskObj=JSON.parse(webtask);
    }
    let data='';
    let addedtasklist=document.getElementById('addedtasklist');
    Array.from(taskObj).forEach((item,index)=>{
        data+=`
            <tr>
            <th>${index+1}</th>
            <th class="w-50">${item}</th>
            <th>
                <button class="btn btn-info"
                onclick="editTask(${index})">
                    <i class="fa-solid fa-pen-to-square"></i>
                    Edit</button>
                <button class="btn btn-warning"
                onclick="daleteItem(${index})">
                    <i class="fa-solid fa-trash-can"></i> 
                    Delete
                </button>
            </th>
            </tr>
        `
    });
    addedtasklist.innerHTML=data;
}
function editTask(index){
    let saveindex=document.getElementById('saveindex');
    let addtaskbtn=document.getElementById('addtaskbtn');
    let savetaskbtn=document.getElementById('savetaskbtn');
    let webtask=localStorage.getItem('localtask');
    let taskObj=JSON.parse(webtask);
    console.log(taskObj[index]);
    addtaskinput.value=taskObj[index];
    addtaskbtn.style.display='none';
    savetaskbtn.style.display='block';
    saveindex.value=index;
}
let savetaskbtn=document.getElementById('savetaskbtn');
savetaskbtn.addEventListener('click',()=>{
    let webtask=localStorage.getItem('localtask');
    let taskObj=JSON.parse(webtask);
    let saveindex=document.getElementById('saveindex').value;
    taskObj[saveindex]=addtaskinput.value;
    console.log(taskObj);
    addtaskbtn.style.display='block';
    savetaskbtn.style.display='none';
    localStorage.setItem('localtask',JSON.stringify(taskObj));
    addtaskinput.value='';
    showTask();
})

function daleteItem(index){
    let addtaskbtn=document.getElementById('addtaskbtn');
    let savetaskbtn=document.getElementById('savetaskbtn');
    let webtask=localStorage.getItem('localtask');
    let taskObj=JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem('localtask',JSON.stringify(taskObj));
    addtaskbtn.style.display='none';
    savetaskbtn.style.display='block';
    addtaskinput.value='';
    showTask();

}
let deleteallbtn=document.getElementById('deleteallbtn');
deleteallbtn.addEventListener('click',()=>{
    let webtask=localStorage.getItem('localtask');
    if(webtask==null){
        taskObj=[];
    }else{
        taskObj=JSON.parse(webtask);
        taskObj=[];
    }
    if(confirm('Siz xaqiqatdan o`chirmoqchimisz? ')){
        localStorage.setItem('localtask',JSON.stringify(taskObj));
        showTask();
    }
})
