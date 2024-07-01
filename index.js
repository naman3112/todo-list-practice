// var derp = ["string,", "string2"];
// document.addEventListener("DOMContentLoaded", () => {
//   const tasksArray = [];

//   console.log("hey");
//   function addTasks() {
//     console.log("hey");
//     const textInputElement = document.getElementById("task-input");
//   //  console.log("text input");
//    console.log("text input value is ", textInputElement.value);
//    tasksArray.push({
//     id: tasksArray.length+1,
//     text: textInputElement.value
//    })
//    appendTasks({
//     id: tasksArray.length+1,
//     text: textInputElement.value

//    })
//   }

//   function appendTasks ({id,text}){
//     const node = document.createElement("div");
//     const textnodeId = document.createTextNode(`Task Id : ${id}`);
//     const textnode = document.createTextNode(text);
//     const h1 = document.createElement("h3");
//     const btnElementDelete = document.createElement("button");
//     const btnElementEdit = document.createElement("button");

//     const btnTextDelete = document.createTextNode("Delete");
//     const btnTextEdit = document.createTextNode("Edit");
//     h1.appendChild(textnodeId);
//     node.appendChild(h1);
//     node.appendChild(textnode);
//     btnElementDelete.appendChild(btnTextDelete);
//     btnElementEdit.appendChild(btnTextEdit);
//     node.appendChild(btnElementDelete);
//     node.appendChild(btnElementEdit);
//     document.getElementById("myList").appendChild(node);

//   }
  
// // need to add ids to all of them and then do thr work 



//   const addTaskBtn = document.getElementById("add-btn");
//   addTaskBtn.addEventListener("click", addTasks);

//   console.log(derp.toString(" , "));
// });

document.addEventListener("DOMContentLoaded",function(){
    const todoForm = document.querySelector(".todo-form");
    const todoInput = document.querySelector(".todo-input");
    const todoList = document.querySelector(".todo-list");
    const todoSubmit = document.querySelector(".todo-submit");
    let editMode = false;
    let editItem = null;

        todoForm.addEventListener("submit", function (event){
            event.preventDefault();
            const todoText = todoInput.value.trim();
            if(todoText!==""){
                if(editMode){
                    editItem.firstChild.textContent  = todoText;
                    todoSubmit.innerText = "Add Todo";
                    editMode = false;
                    editItem = null;
                }else{
      // add todos 
      addTodoItem(todoText)
      todoInput.value = ""
                }
          
            }else{
                alert("Please enter a valid task")
            }

        })

        todoList.addEventListener("click", function (event){
            const target = event.target
            if(target.tagName === 'BUTTON'){
            const todoItem =  target.parentNode;
            if(target.innerText === "🗑️"){
                todoItem.remove();
            }else if(target.innerText === "📝") {
                editMode = true;
                editItem = todoItem
                todoSubmit.innerText = "Edit Todo";
                todoInput.value = todoItem.firstChild.textContent;
                todoInput.focus();

            }   

            }
        })  
    function addTodoItem(todoText){
        const todoItem = document.createElement("li");
        const editButton  = document.createElement("button");
        const removeButton = document.createElement("button");
        todoItem.innerHTML = `<span> ${todoText}</span>`;
        editButton.innerText = `📝`
        removeButton.innerText = `🗑️`
        todoItem.appendChild(editButton);
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem)

    }
})