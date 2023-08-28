const addBtn = document.querySelector(".add-button");
const showTodoList = document.querySelector(".todo-list-grid");




const todolist = [{name: "Accept more",
                   dueDate: '2022-12-23'},
                  {name: 'Accept yourself',
                   dueDate: '2022-12-23'},
                   {name: 'Baby steps',
                   dueDate: '2022-12-24'},
                   {name: 'Be disciplined',
                   dueDate: '2022-12-24'},
                   {name: "Be creative",
                   dueDate: '2022-12-23'},
                  {name: 'Be fearless',
                   dueDate: '2022-12-23'},
                   {name: 'Be kind',
                   dueDate: '2022-12-24'},
                   {name: 'Be cool',
                   dueDate: '2022-12-24'},
                   {name: "Be present",
                   dueDate: '2022-12-23'},
                  {name: 'Be yourself',
                   dueDate: '2022-12-23'},
                   {name: 'Don’t rush',
                   dueDate: '2022-12-24'},
                   {name: 'Keep going',
                   dueDate: '2022-12-24'},
                   {name: "Good vibes",
                   dueDate: '2022-12-23'},
                  {name: 'Have faith',
                   dueDate: '2022-12-23'},
                   {name: 'I will',
                   dueDate: '2022-12-24'},
                   {name: 'Keep calm',
                   dueDate: '2022-12-24'},
                   {name: 'Laugh often',
                   dueDate: '2022-12-24'},
                   {name: 'Let’s go!',
                   dueDate: '2022-12-24'},
                   {name: 'Master yourself',
                   dueDate: '2022-12-24'},
                   {name: 'Move forward',
                   dueDate: '2022-12-24'},
                   {name: 'Stay humble',
                   dueDate: '2022-12-24'},
                   {name: 'Stay positive',
                   dueDate: '2022-12-24'},
                   {name: 'Stay curious',
                   dueDate: '2022-12-24'},
                   {name: 'Try again',
                   dueDate: '2022-12-24'},
                   {name: 'You can',
                   dueDate: '2022-12-24'}
                ];


function renderTodoList()
{
    let todolisthtml = '';
    let count = 0;
    todolist.forEach((todoObject, index) =>{
        // const { name, dueDate } = todoObject;//destructuring shorthand
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class = "delete-todo-button">Delete</button>`;

        todolisthtml +=html;
    });
    document.querySelector(".todo-list-grid").innerHTML = todolisthtml;
    const deletes = document.querySelectorAll(".delete-todo-button");
    deletes.forEach((deleteButon,index)=>{
        
        deleteButon.addEventListener("click",()=>{
            todolist.splice(index,1)
           if(confirm('Are you sure to delete this todo'))
                renderTodoList();
        });
        count = index;
        // console.log(index);
    });
    deletes[count].scrollIntoView();
}

renderTodoList();


addBtn.addEventListener("click",()=>{
    addtodo();
    // console.log("add todo chal gya");
});

function addtodo()
{
    const nameElement = document.querySelector(".name-input");
    const name = nameElement.value;

    const dateElement = document.querySelector(".date-input");
    const dueDate = dateElement.value;
    
    todolist.push({
        //name: name,
        //dueDate: dueDate,
        name,//destructuring shorthand
        dueDate//destructuring shorthand
      });

    nameElement.value = "";

    renderTodoList();
    
}
