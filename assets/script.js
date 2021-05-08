let startBtn = document.querySelector("#start-btn")
let q = [
    {
        question : "JavaScript is which type of language?",
        choiceA : "Object-Oriented",
        choiceB : "Object-Based",
        choiceC : "Assembly-language",
        choiceD : "High-level",
        correct : "B"
    },{
        question : "When interpreter encounters an empty statement, what will it do?",
        choiceA : "Show a warning",
        choiceB : "Prompt to complete the statement",
        choiceC : "Throw an error",
        choiceD : "Ignore the statement",
        correct : "D"
    },{
        question : "JavaScript is interpreted by _________",
        choiceA : "Client",
        choiceB : "Server",
        choiceC : "Object",
        choiceD : "None of the above",
        correct : "A"
    },{
        question : "Which of the following is not a valid JavaScript variable name?",
        choiceA : "2names",
        choiceB : "_first_and_last_names",
        choiceC : "FirstAndLast",
        choiceD : "None of the above",
        correct : "A"
    },{
        question : "The _______ method of an Array object adds and/or removes elements from an array.",
        choiceA : "Reverse",
        choiceB : "Shift",
        choiceC : "Slice",
        choiceD : "Splice",
        correct : "C"
    },{
        question : "Using _______ statement is how you test for a specific condition.",
        choiceA : "Select",
        choiceB : "If",
        choiceC : "Switch",
        choiceD : "For",
        correct : "D"
    },{
        question : "Which of the following is not considered a JavaScript operator?",
        choiceA : "new",
        choiceB : "this",
        choiceC : "delete",
        choiceD : "typeof",
        correct : "C"
    }
];
startBtn.addEventListener("click", () => {
    console.log("Hello Bob!");
    var startCountdown = setInterval(countdown, 1000);
    var counter = 60
    function countdown(){
        
        console.log(counter);
        counter--;
            if (counter === 0){
                clearInterval(startCountdown)
            };
    };

});




    
// function myFunction() {
//     // for( var i = 0; i<=37; i++){
//     // console.log("Hello Bobby!" + i.toString(36));
//     // }  
//   var startCountdown = setInterval(countdown, 1000);  
  
// var counter = 60
// function countdown(){
//     console.log(counter);
//     counter--;
//         if (counter === 0){
//             //endGame()
//             clearInterval(startCountdown)
//         };
// };

// }

