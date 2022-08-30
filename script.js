var grabCurrentDate = moment().format('MMMM Do, YYYY');
var grabCurrentHour = moment().format('h a');
var buttons = document.querySelectorAll('.saveBtn')
var userInput = document.querySelectorAll('.user-input')
var timeBlock = document.querySelectorAll('.time-block')

renderInput();

//jquery to set the currentDay to grabCurrentDate
$('#currentDay').text(grabCurrentDate);

//let jquery handle the buttons for me
$('#container').on('click', function(targ) {
    
    if (targ.target && targ.target.matches('.saveBtn')) {
      
        btnBlockValue = targ.target.dataset.block;
        
        for (var i = 0; i < userInput.length; i++) {
            
            if (userInput[i].dataset.block === btnBlockValue) {
               
                localStorage.setItem('userInput' + userInput[i].dataset.block, userInput[i].textContent)
            }
        }
        location.reload();
    }

    if (targ.target && targ.target.matches('.clear')) {
        localStorage.clear();

        for (var i = 0; i < userInput.length; i++) {
            userInput[i].textContent = "";
        }
        location.reload();
    }
})

function renderInput() {

    for (var i = 0; i < userInput.length; i++) {
        userInputBlock = userInput[i].dataset.block;

        userInputValue = localStorage.getItem('userInput' + userInputBlock)

        if (userInputValue === undefined || userInputValue === null) {
            continue;
        }
        userInput[i].textContent = userInputValue;
    };
}

let militaryHour = parseInt(grabCurrentHour.slice(0, 2));

switch (grabCurrentHour) {
    case '12 am':
        militaryHour = 0;
        console.log('It is currently ' + militaryHour + ' hours');
        break;
    case '1 pm':
    case '2 pm':
    case '3 pm':
    case '4 pm':
    case '5 pm':
    case '6 pm':
    case '7 pm':
    case '8 pm':
    case '9 pm':
    case '10 pm':
    case '11 pm':
        militaryHour += 12;
        console.log('It is currently ' + militaryHour + ' hours')
        break;

    default:
        console.log('It is currently ' + militaryHour + ' hours');
        break;
}


currentHour();


function currentHour() {

    for (var i = 0; i < timeBlock.length; i++) {
  
        if (parseInt(timeBlock[i].dataset.hour) === militaryHour) {
            timeBlock[i].setAttribute('id', 'present');
   
        } else if (parseInt(timeBlock[i].dataset.hour) < militaryHour) {
            timeBlock[i].setAttribute('id', 'past');

        } else if (parseInt(timeBlock[i].dataset.hour) > militaryHour) {
            timeBlock[i].setAttribute('id', 'future');
        } else {
            console.log('currentHour() needs added conditions')
        }
    }
}