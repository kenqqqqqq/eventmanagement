/*1.**/
// Create a variable the will hold form elements
const form = document.getElementById('registrar');

// input elements
const inputName = document.querySelector('input');
const ul = document.getElementById('invitedList');
const divMain = document.querySelector('.main');

const labelFilter = document.createElement('label');
const checkboxFilter = document.createElement('input');

labelFilter.textContent = "List of going";
checkboxFilter.type = "checkbox";
labelFilter.style.marginLeft = "70%";

labelFilter.appendChild(checkboxFilter);

divMain.insertBefore(labelFilter, ul);

main();

function main() {
  form.addEventListener('submit', createLi);
  ul.addEventListener('change', confirm);
  ul.addEventListener('click', btnEditRemove);
  labelFilter.addEventListener('change', filterItem);
}

// createLI function
function createLi(e) {
  // create a UI element to append value in a list item
  // const ul = document.getElementById('invitedList');

  // create li and span element
  const li = document.createElement('li');
  const span = document.createElement('span');

  // assign text value on the list item
  span.textContent = inputName.value;

  // append span to li
  li.appendChild(span);

  // create a UI element label for the checkbox
  const label = document.createElement('label');

  // add a textcontent on the label "confirm"
  label.textContent = "Confirmed";
  
  // append label to li
  li.appendChild(label);

  // create a UI checkbox and store the label on it
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  label.appendChild(checkbox);

  // create a UI remove and edit button and store the label on it
  const removeBtn = document.createElement('button');
  const editBtn = document.createElement('button');

  // add textcontent on remove and edit buttons
  removeBtn.textContent = "Remove";
  editBtn.textContent = "Edit";

  // and append these elements in the list items
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  ul.appendChild(li);

  e.preventDefault();
} 
 
  /**5 */
  // create a UI edit button and store the label on it 
  // now once test the edit and remove button both delete the invitees
  // modify the event made for the removing elements below
  
// Add a submit event handler to the form
 
  // create a handler to hold the names and select the element UI "ul"
 
  // clear input value
 
 
/*2**/
// add an event Listener event object "change" only for the parent element of li,checkbox,label
// use an event object on the function parameter
  function confirm() {
    // create a handler for checkbox event target
    const checkbox = event.target;

    // create a hanlder for checkbox value if checked
    const checkboxValue = checkbox.checked;

    // create a handler that will traverse or call the parent elements of checkbock li
    const li = checkbox.parentElement.parentElement;

    // create a condition to change the event wether a checbox is checked or not
    // but before creating this check the classname "responded" in the style.css
    if (checkboxValue){
        // add the class "responded" on the list item parent
        li.className = 'responded';
    }else{
      // add a class of empty string
      li.className = '';
    } 
  
  }
    
     
/*3**/
  // add eventlistener event object "click" for the button remove but target the ul
  // use an event object on the function parameter
  function btnEditRemove(e) {
    //create a handler to target the parent of the target which is the li
    const removeBtn = e.target
    const li = removeBtn.parentNode;

    //create a handler also for the main parent of the target which is the ul
    const ul = li.parentElement;

    // create a condition only select "button" once triggered the event for the ul  
     if (removeBtn.textContent == "Remove") {
      // remove the child li from the ul
        ul.removeChild(li);
       }else if (removeBtn.textContent == "Edit"){
          const spanFirstChild = li.firstElementChild;

          const inputNew = document.createElement('input');
          inputNew.type = "text";
          inputNew.value = spanFirstChild.textContent;

          li.insertBefore(inputNew, spanFirstChild);
          li.removeChild(spanFirstChild);
           removeBtn.textContent = "Save";
       }else if (removeBtn.textContent == "Save"){
          const input = li.firstElementChild;

          const span = document.createElement('span');
          span.textContent = input.value;

          li.insertBefore(span, input);
          li.removeChild(input);
          removeBtn.textContent = "Edit";
       }
  }
   
    
          
/*4**/
// Refractor the codefirst , check the submit handler on the top.. think of how you can
// break the code and simplify it store these resuable code in a function



/*6**/
// At this point you will have to work with the edit state,saving name,fiter invitees who have not responded
// no comment will b provided

// filter 
function filterItem(){
  const checkbox = event.target;
  const checkboxValue = checkbox.checked;

  const listitem = document.querySelectorAll('li');

  // listitem.forEach(function(name){

    // if(name.className === "responded") {
    //   name.style.display = "block";
    // }else{
    //   name.style.display = "none";
    // }
  // });
  
    if(checkboxValue) {
       listitem.forEach(function(name){
        if (name.className == "responded") {
          name.style.display = "block";
        } 
        else {
          name.style.display = "none";
        }
    
      });
    }
    else{
      listitem.forEach(function(name){
        name.style.display = "block";
      });
    }
}