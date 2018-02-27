function getAllTodos(){
    fetch('http://fed17.herokuapp.com/todos')
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            console.log(jsonData);
        })
        .catch(function(error) {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.innerText = error.message;
          });
}
getAllTodos();