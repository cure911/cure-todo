$(document).ready(function () {
    var data;
    for(var i = 0; i < list.listElements.length; i++){
        if(list.listElements[i].yapildi == true){
            console.log(list.listElements[i])
            data = `  <div class="todo-items checked">
            <div class="checkbox">
                <i class="fas fa-check"></i>
            </div>
            <p class="todo-text">${list.listElements[i].name}</p>
                </div>`
                $('.items').append(data);
        } else{
            console.log(list.listElements[i])
            data = `  <div class="todo-items">
            <div class="checkbox">
                
            </div>
            <p class="todo-text">${list.listElements[i].name}</p>
                </div>`
            $('.items').prepend(data);
        }
    }
});