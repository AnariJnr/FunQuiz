let bars = document.querySelector(".fa-bars");
let circleX = document.querySelector(".fa-circle-xmark");
let reader = document.querySelector(".fa-book-open-reader");
let toggle = document.querySelector(".toggle");
let toggle2 = document.querySelector(".toggle2");
let toggle3 = document.querySelector(".toggle3");




let navigation = document.querySelector(".navigation");
let navigation2 = document.querySelector(".navigation2");
let navigation1 = document.querySelector(".navigation1");
let navigation3 = document.querySelector(".navigation3");
let navigation4 = document.querySelector(".navigation4");
// navs
toggle.addEventListener("click", function () {
    circleX.classList.toggle("none");
    bars.classList.toggle("none");
    navigation.classList.toggle("showLinks1");
});

toggle2.addEventListener("click", function () {
    navigation1.classList.toggle("showLinks2");
    navigation1.classList.toggle("theOverflowY");
    navigation3.classList.remove("showLinks2");
  navigation3.classList.remove("theOverflowY");

});

toggle3.addEventListener("click", function () {
  navigation3.classList.toggle("showLinks2");
  navigation3.classList.toggle("theOverflowY");
  navigation1.classList.remove("showLinks2");
    navigation1.classList.remove("theOverflowY");

});

window.addEventListener("DOMContentLoaded",function(){
  displayQuestions(allQuestions);
  displayMarkingScheme(markingScheme);
})


// alert
let alert = document.querySelector(".alert");

// scheme
let markingScheme = ["Tiger","Jupiter","Ichigo","10"];
const studentAnswers = [];
const allQuestions = [
  {
    id:1,
    mainQuestion:"Which big cat is the largest?",
    optionA:"Dog",
    optionB:"Pussy cat",
    optionC:"Tiger",
  },
  {
    id:2,
    mainQuestion: "Which is the largest planet in the solar system?",
    optionA:"Jupiter",
    optionB:"Pluto",
    optionC:"Anne Hathaway",
  },
  {
    id:3,
    mainQuestion: "Which of this anime character uses a Zanpakuto?",
    optionA:"Kakashi",
    optionB:"Sauske",
    optionC:"Ichigo",
  },

  {
    id:4,
    mainQuestion: "How many legs does a lobster have?",
    optionA:"1",
    optionB:"5",
    optionC:"10",
  },
];
let spreadCompare = [];
let nameCounter = 0;
let score = 0;


// selectors
let questionNumber = document.querySelector(".questionNumber input");
let mainQuestion = document.querySelector(".mainQuestion input");
let questionOptionA = document.querySelector(".questionOptionA input");
let questionOptionB = document.querySelector(".questionOptionB input");
let questionOptionC = document.querySelector(".questionOptionC input");
let setQuestionBtn = document.querySelector(".setQuestion");
let answerTextField = document.querySelector(".allAnswers input");
let setAnswerBtn = document.querySelector(".setAnswer");
let questionsContainer = document.querySelector(".questionsContainer");
let subjectName = document.querySelector(".toggleContainer h1");
let subjectNameTextField = document.querySelector(".theSubject input");
let subjectBtn = document.querySelector(".subjectBtn");

// selectors for delete btn
let deleteBtn = document.querySelector(".deleteQuestion");
let deleteBtnTextField = document.querySelector(".deleteAQuestion input");

// selectors for height
let setOrEdit = document.querySelector(".setOrEdit");
let arrows = document.querySelectorAll(".fa-chevron-down");

// selectors



let submit = document.querySelector(".submit");
// score

// edit selectors
let editFlag = false;
let editHolder;

let editBtn = document.querySelector(".editQuestion");
let editBtnTextField = document.querySelector(".editAQuestion input");

// ****SUBJECT *****
subjectBtn.addEventListener("click",function () {
  subjectName.textContent = subjectNameTextField.value;
  displayAlert("Subject Updated","success");
  subjectNameTextField.value = "";
})





// ************ SET QUESTIONS **************
setQuestionBtn.addEventListener("click",function(){
  
        // question object
 const aQuestion = {
  id:'',
  mainQuestion: mainQuestion.value,
  optionA:questionOptionA.value,
  optionB:questionOptionB.value,
  optionC:questionOptionC.value,
}

  if(editFlag===false){
    // validate question setting
    if(mainQuestion.value === "" || questionOptionA.value === "" || questionOptionB.value === "" || questionOptionC.value === ""){
      return displayAlert("Please fill out all options", "danger");
    }else{
      allQuestions.push(aQuestion);
      nameCounter++;
      console.log(allQuestions);
      displayQuestions(allQuestions);
      displayAlert("Question Added", "success");
      setBackToDefault();
    }
   
    
  }else{
    //  console.log("edit question");
    editHolder.mainQuestion = aQuestion.mainQuestion;
    editHolder.optionA = aQuestion.optionA;
    editHolder.optionB = aQuestion.optionB;
    editHolder.optionC = aQuestion.optionC;

    setBackToDefault();
    displayQuestions(allQuestions);
    displayAlert
    displayAlert("Question Edited", "success");
  }

});


// ****** SET MARKING SCHEME ******
setAnswerBtn.addEventListener("click", function(){
    if(answerTextField.value === ""){
      return displayAlert("please enter a value","danger");
    }else{
      markingScheme.push(answerTextField.value);
       displayMarkingScheme(markingScheme);
    // if(markingScheme.includes(answerTextField.value)){
    //   return  console.log("item exist");
    // }else{
    //   markingScheme.push(answerTextField.value);
    //   displayMarkingScheme(markingScheme);
    // }
    displayAlert("Answer added to scheme", "success");
    answerTextField.value = "";
  
  console.log(markingScheme);
    }
  
});





// ****** DISPLAY MARKING SCHEME ****

function displayMarkingScheme(array){
  const displayTheMarkingScheme = array.map(function(item,index){
    return ` <li><a href="#">${index + 1}. ${item}</a><i class="fa-solid fa-trash"></i></li>`;
  }).join(" ");
 
  navigation3.innerHTML = displayTheMarkingScheme;

  // set delete 
let trash = document.querySelectorAll(".fa-trash");

trash.forEach(function(trashCan){
  trashCan.addEventListener("click",function(e){
    let target = e.currentTarget.parentElement.textContent.slice(2).trim();
    let index = markingScheme.indexOf(target);

    markingScheme.splice(index,1);
    displayMarkingScheme(markingScheme);
   
    
  });
});

}


//***** DISPLAY QUESTIONS ******
function displayQuestions(arrayList){
    const displayQuestions = arrayList.map(function(item,index){
        return ` <div class="questionBox">
        <p class="question"><span class="number">${item.id = index + 1}.</span>${item.mainQuestion}</p>
        <p class="option">
          <input type="radio" class="radioSpace" name="question${item.id}" />${item.optionA}
        </p>
        <p class="option">
          <input type="radio" class="radioSpace" name="question${item.id}" />${item.optionB}
        </p>
        <p class="option">
          <input type="radio" class="radioSpace" name="question${item.id}" />${item.optionC}
        </p>
      </div>`
    }).join(" ");

    questionsContainer.innerHTML = displayQuestions;
    // console.log(displayQuestions);

// seclect options
let options = document.querySelectorAll(".radioSpace");
// ******SUBMIT BTN *******

submit.addEventListener("click", function(){

    options.forEach(function(option){
    
      if(option.checked){
        studentAnswers.push(option.parentElement.textContent.trim());
        console.log(studentAnswers);
      }
      
    });

     navigation4.classList.toggle("showLinks2");
  navigation4.classList.toggle("theOverflowY");
  
  

  // merge scheme and answers
   spreadCompare = [...studentAnswers, ...markingScheme];
  
  console.log(spreadCompare);

  console.log(sortAndCount(spreadCompare.length,spreadCompare));
  
  navigation4.innerHTML = `<li><a href="#">You scored ${score}.</a></li>
  <button class = "back">Back</button>
  <button class = "reset">set your own questions</button>`;
 

  let navigation4BackBtn = document.querySelector(".back");
  let resetBtn = document.querySelector(".reset");
  navigation4BackBtn.addEventListener("click",function(){
    navigation4.classList.remove("showLinks2");
    navigation4.classList.remove("theOverflowY");
  });
  resetBtn.addEventListener("click",function(){
    resetAll();
  });

  spreadCompare.length = 0;
  studentAnswers.length = 0;
  // score = 0;
  
  
  
});



}



//***** DELETE QUESTIONS ******

deleteBtn.addEventListener("click",function(){

  if(deleteBtnTextField.value === "" || allQuestions.length<1){
    return displayAlert("please enter a valid number", "danger");
  }else{
    // value of num field 
   let numberFieldValue = parseInt(deleteBtnTextField.value);

   // all ids
   var deleteItem = allQuestions.find(function(val){
       if(val.id === numberFieldValue){
         return val;
       }
   });
   
   let index = allQuestions.indexOf(deleteItem);

   if(index > -1){
       allQuestions.splice(index,1);
   }

   displayQuestions(allQuestions);
   displayAlert("Question deleted","danger");
  }
    
    
});


//***** EDIT QUESTIONS ******

editBtn.addEventListener("click",function(){

  if(editBtnTextField.value === "" || allQuestions.length<1){
    return displayAlert("Please enter the question number", "danger");
  }else{
    // value of num field 
 let numberFieldValue = parseInt(editBtnTextField.value);

 // all ids
 var editItem = allQuestions.find(function(val){
     if(val.id === numberFieldValue){
       return val;
     }
 });
 
 editHolder = editItem;
 mainQuestion.value = editHolder.mainQuestion;
 questionOptionA.value = editHolder.optionA;
 questionOptionB.value = editHolder.optionB;
 questionOptionC.value = editHolder.optionC;
 editFlag = true;
 setQuestionBtn.textContent = "Edit Question";
  }

  
  
  
});

function setBackToDefault(){
  editFlag = false;
  setQuestionBtn.textContent = "Set Question";
  editHolder = "";
  mainQuestion.value = "";
  questionOptionA.value = "";
  questionOptionB.value = "";
  questionOptionC.value = "";
  editBtnTextField.value = "";
  deleteBtnTextField.value="";
  answerTextField.value = "";  
}





// setting arrow toggle
arrows.forEach(function(arrow){
  arrow.addEventListener("click",function(e){
   const wrapper =e.currentTarget.parentElement.parentElement.children[1];
   
   wrapper.classList.toggle("hide");
  
  });
});


//test


// marking scheme fuc
function sortAndCount(n,arr){
  let sorted = arr.sort(function(a,b){
     return a.localeCompare(b);
  });
  
   score = 0;

  for(let i = 0; i<n-1; i++){
    if(sorted[i] === sorted[i+1]){
      score++;
      i +=1;
    }
  }
  return score;
}

// alert fuc
function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  },1000);
}

function resetAll(){
  editFlag = false;
  setQuestionBtn.textContent = "Set Question";
  editHolder = "";
  mainQuestion.value = "";
  questionOptionA.value = "";
  questionOptionB.value = "";
  questionOptionC.value = "";
  editBtnTextField.value = "";
  deleteBtnTextField.value="";
  answerTextField.value = "";
  subjectNameTextField.value = ""; 
  subjectName.textContent = "";
  spreadCompare.length = 0;
  studentAnswers.length=0;
  allQuestions.length=0;
  markingScheme.length =0;
  score =0;

  displayMarkingScheme(markingScheme);
  displayQuestions(allQuestions);
  navigation4.classList.remove("showLinks2");
  navigation4.classList.remove("theOverflowY");
  
  arrows.forEach(function(arrow){
    let theWrap = arrow.parentElement.parentElement.children[1];
    theWrap.classList.add("hide");
  });

}

let endSpan = document.querySelector(".end span");
let date = new Date();
endSpan.innerHTML = date.getFullYear();