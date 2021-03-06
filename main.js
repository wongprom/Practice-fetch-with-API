function getAllTodos(){
    fetch('http://fed17.herokuapp.com/todos')
        .then(function(response){
            return response.json();
        })
        .then(function(allTodos){
            console.log(allTodos);
            displayAllTodos(allTodos);
            

        })
        .catch(function(error) {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.innerText = error.message;
          });
}
getAllTodos();

function displayAllTodos(allTodos){
        
        for( const singleTodo of allTodos){
            //console.log(allTodo);
            if(singleTodo.complete == false){
                const todosId = document.getElementById('todosId');
                let allTodoInfo = `
            <p>${singleTodo.text}</p>
            `;
            todosId.insertAdjacentHTML('beforeend', allTodoInfo); 
            } else{ 
                const doneTodosId = document.getElementById('doneTodosId');
                let allTodoInfo = `
            <p>${singleTodo.text}</p>
            `;
            doneTodosId.insertAdjacentHTML('beforeend', allTodoInfo); 
            }
             
        }
}


   


input.addEventListener('change',function(){
    
    const input = document.getElementById('input');
    let inputValue = input.value;
    

    const postOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(
            { 
                text: inputValue, 
                complete: false 
            }
        )
      };
      fetch('http://fed17.herokuapp.com/todos/', postOptions);
})