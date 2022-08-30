// Function for making each time block
function makeTimeblocks(hour, existingTodo = "") {
    
    var currentHour = new Date().getHours();
    
    
    var presentPastOrFuture = "future";
    if (currentHour > hour) presentPastOrFuture = "past";
    if (currentHour === hour) presentPastOrFuture = "present";
   

    
    var existingTodo = localStorage.getItem(hour);

   
    $(".container").append(
    $(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="${hour}" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo || ""}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`)
    );
}


for (var i = 9; i < 18; i++) {
    makeTimeblocks(i);
}



var btnEl = document.querySelectorAll(".saveBtn");


for (var i = 0; i < btnEl.length; i++) {
    btnEl[i].addEventListener("click", functionForSaving);
}



function functionForSaving(event) {
    
    var todoValue = event.target.parentNode.children[1].value;
    var todoKey = event.target.parentNode.children[1].id;

    
    localStorage.setItem(todoKey, todoValue);
}


$('#currentDay').text(moment().format('dddd, MMMM Do'));