let todoList=[
    {
        item:'Buy Milk', 
        dueDate:'7/7/25'
    },
    {
        item:'Do this project', 
        dueDate:'7/7/25'
    },
];

const dateInput = document.querySelector('#todo-date');
dateInput.valueAsDate = new Date();  // This sets today's date

displayItems();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let  dateElement=document.querySelector('#todo-date');
    let todoItem= inputElement.value;
    let todoDate= dateElement.value;
     todoList.push({item: todoItem, dueDate: todoDate});
     inputElement.value='';
     dateElement.value='';

     displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');

    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate }</span>
        <button class="button-dlt" onclick="todoList.splice(${i},1);
        displayItems()">Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml; 



    
}