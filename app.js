// input

// const userInput = document.querySelector(`.input`);

//add button

// const addBtn = document.querySelector(`.add`);

// ul

// const liParent = document.querySelector(`.parent_of_li`);

// prothome add button er jonno akta funtion create korbo jeta input
// er valu check korbe and jodi value thake taile value ta niye ul e dhukiye dibe

// addBtn.addEventListener(`click`,function(){

//     const inputValue = userInput.value;
//     if(inputValue){

//         const dynamicLi = document.createElement(`li`);
//         dynamicLi.innerText = inputValue;
//         dynamicLi.className = `item`
//         dynamicLi.innerHTML = `${inputValue}<button class="remove_btn"><i class="fa-solid fa-trash-can icon"></i></button>`;

//         liParent.appendChild(dynamicLi);
//         userInput.value = ``;

//     }else{
//         alert(`input er task ki tor bape dibe..?`)
//     }
// })

// userInput.addEventListener(`keypress`,function(e){

//     const inputValue = userInput.value;
//     if(inputValue){
//             if(e.key === `Enter` || e.keyCode === 13){

//         const dynamicLi = document.createElement(`li`);
//         dynamicLi.innerText = inputValue;
//         dynamicLi.className = `item`;

//         dynamicLi.innerHTML = `${inputValue}<button class="remove_btn"><i class="fa-solid fa-trash-can icon"></i></button>`;

//         liParent.appendChild(dynamicLi);
//         userInput.value = ``;

//     }
//     }else{
//         // alert(`please enter your'e task ...`)
//     }

// })

// deleteing element

// liParent.addEventListener(`click`,function(event){

//     const targetedElement = event.target;

//   if(targetedElement.classList.contains(`icon`) || targetedElement.classList.contains(`remove_btn`)){
//      const li = event.target.closest(`li`);

//      li.remove();

//   }

// })

const userInput = document.querySelector(`.input`);

const addBtn = document.querySelector(`.add`);

const liParent = document.querySelector(`.parent_of_li`);

addBtn.addEventListener(`click`, function (event) {
  const inputValue = userInput.value;

  if (inputValue) {


    // first create a i tag
    const i = document.createElement(`i`);
    i.setAttribute(`class`, `fa-solid fa-trash-can icon`);
    // then button
    const button = document.createElement(`button`);
    button.setAttribute(`class`, `remove_btn`);
    // append i into button
    button.appendChild(i);



    //  now create a li

    const newLi = document.createElement(`li`);
    newLi.setAttribute(`class`, `item`);
    newLi.textContent = inputValue;

    // append button into li

    newLi.appendChild(button);
   //   finaly append li into ul
    liParent.appendChild(newLi);


    // lets clear input value 
 
   userInput.value =  ` `;


  } else {
    alert(`input er task fill korun...!`);
  }
});










userInput.addEventListener(`keypress`, function (event) {
    const inputValue = userInput.value;
  
    if (inputValue) {
  
      if(event.key === `Enter` || event.keyCode === 13){

        
      // first create a i tag
      const i = document.createElement(`i`);
      i.setAttribute(`class`, `fa-solid fa-trash-can icon`);
     // then button
      const button = document.createElement(`button`);
      button.setAttribute(`class`, `remove_btn`);
      // append i into button
      button.appendChild(i);
  
  
  
      //  now create a li
  
      const newLi = document.createElement(`li`);
      newLi.setAttribute(`class`, `item`);
      newLi.textContent = inputValue;
  
      // append button into li
  
      newLi.appendChild(button);
  //   finaly append li into ul
  liParent.appendChild(newLi);
  
 
  // lets clear input value 
  
  userInput.value = ` `;

      }
  
  
    } else {
    //   alert(`input er task fill korun...!`);
    }
  });
  



  liParent.addEventListener(`click`,function(event){

    let targetedElement = event.target;
    if(targetedElement.classList.contains(`icon`) || targetedElement.classList.contains(`remove_btn`)){
     const targetedLi = event.target.closest(`li`);

    targetedLi.remove();
    }

 
  })