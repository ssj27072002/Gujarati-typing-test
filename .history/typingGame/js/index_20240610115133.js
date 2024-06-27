// // //  (actualWords / totalTimeTaken) * 60;

// // const typing_ground = document.querySelector('#textarea');
// // const btn = document.querySelector('#btn');
// // const score = document.querySelector('#score');
// // const show_sentence = document.querySelector('#showSentence');
// // const show_time = document.querySelector('#show-time'); 

// // let startTime, endTime, totalTimeTaken, sentence_to_write;


// // const sentences = [' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
// //     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
// //     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.']

// // // step 5

// // const calculateTypingSpeed = (time_taken) => {
// //     let  totalWords = typing_ground.value.trim();
// //     let actualWords = totalWords === '' ? 0 : totalWords.split(" ");

// //     actualWords=errorChecking(actualWords);

// //     if(actualWords !== 0) {
// //         let typing_speed  =  (actualWords / time_taken) * 60;
// //         typing_speed = Math.round(typing_speed);
// //         score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} correct words out of ${sentence_to_write.length} words & time taken ${time_taken} sec`;
// //     }else{
// //         score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
// //     }
// // }

// // // step 4
// // const endTypingTest = () => {
// //     btn.innerText = "Start";
// //     showTimer();
// //     let date = new Date();
// //     endTime = date.getTime();

// //     totalTimeTaken = (endTime -startTime) / 1000;

// //     // console.log(totalTimeTaken);

// //     calculateTypingSpeed(totalTimeTaken);

// //     show_sentence.innerHTML = "";
// //     typing_ground.value = "";
// // }

// // //step 6
// // let intervalID, elapsedTime=0;

// // const showTimer=() => {
// //     if(btn.innerText ==="Done"){
// //         intervalID = setInterval(() =>{
// //             elapsedTime++;
// //             show_time.innerHTML = elapsedTime;
// //         },1000)

// //     }else if(btn.innerText ==="Start"){
// //         elapsedTime=0;
// //         clearInterval(intervalID);
// //         show_time.innerHTML ="";
// //     }
// // }

// // //step 7 
// // const errorChecking=() => {
// //       let num=0;
// //       sentence_to_write = show_sentence.innerHTML;
// //       sentence_to_write = sentence_to_write.trim().split(" ")

// //       for(let i=0; i<words.length;i++){
// //         if(words[i]=== sentence_to_write[i]){
// //             num++
// //         }
// //       }
// //     return num;
// // }



// // // step 3
// // const startTyping = () => {
// //     let randomNumber = Math.floor(Math.random() * sentences.length);
// //     // console.log(randomNumber);
// //     show_sentence.innerHTML = sentences[randomNumber];

// //     let date = new Date();
// //     startTime = date.getTime();

// //     btn.innerText = "Done";

// //     showTimer();
// // }




// // // step 2
// // btn.addEventListener('click', () => {
// //     switch (btn.innerText.toLowerCase()) {
// //         case "start":
// //             typing_ground.removeAttribute('disabled');
// //             startTyping();
// //             break;

// //         case "done":
// //             typing_ground.setAttribute('disabled' , 'true');
// //             endTypingTest();
// //             break;
// //     }
// // })
// const typing_ground = document.querySelector('#textarea');
// const btn = document.querySelector('#btn');
// const score = document.querySelector('#score');
// const show_sentence = document.querySelector('#showSentence');
// const show_time = document.querySelector('#show-time'); 

// let startTime, endTime, totalTimeTaken, sentence_to_write;

// const sentences = [
//     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
//     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
//     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.'
// ];

// const calculateTypingSpeed = (time_taken) => {
//     let totalWords = typing_ground.value.trim();
//     let actualWordsArray = totalWords === '' ? 0 : totalWords.split(" ");
//     let correctWords = errorChecking(actualWordsArray);

//     if (correctWords !== 0) {
//         let typing_speed = (correctWords / time_taken) * 60;
//         typing_speed = Math.round(typing_speed);
//         score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${correctWords} correct words out of ${sentence_to_write.length} words & time taken ${time_taken} sec`;
//     } else {
//         score.innerHTML = `Your typing speed is 0 words per minute & time taken ${time_taken} sec`;
//     }
// };

// const endTypingTest = () => {
//     btn.innerText = "Start";
//     showTimer();
//     let date = new Date();
//     endTime = date.getTime();

//     totalTimeTaken = (endTime - startTime) / 1000;

//     calculateTypingSpeed(totalTimeTaken);

//     show_sentence.innerHTML = "";
//     typing_ground.value = "";
// };

// let intervalID, elapsedTime = 0;

// const showTimer = () => {
//     if (btn.innerText === "Done") {
//         intervalID = setInterval(() => {
//             elapsedTime++;
//             show_time.innerHTML = elapsedTime;
//         }, 1000);
//     } else if (btn.innerText === "Start") {
//         elapsedTime = 0;
//         clearInterval(intervalID);
//         show_time.innerHTML = "";
//     }
// };

// const errorChecking = (userWords) => {
//     let num = 0;
//     sentence_to_write = show_sentence.innerHTML.trim().split(" ");

//     for (let i = 0; i < userWords.length; i++) {
//         if (userWords[i] === sentence_to_write[i]) {
//             num++;
//         }
//     }
//     return num;
// };

// const startTyping = () => {
//     let randomNumber = Math.floor(Math.random() * sentences.length);
//     show_sentence.innerHTML = sentences[randomNumber];

//     let date = new Date();
//     startTime = date.getTime();

//     btn.innerText = "Done";

//     showTimer();
// };

// btn.addEventListener('click', () => {
//     switch (btn.innerText.toLowerCase()) {
//         case "start":
//             typing_ground.removeAttribute('disabled');
//             startTyping();
//             break;
//         case "done":
//             typing_ground.setAttribute('disabled', 'true');
//             endTypingTest();
//             break;
//     }
// });

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');
const show_time = document.querySelector('#show-time'); 

let startTime, endTime, totalTimeTaken, sentence_to_write;

const sentences = [
    'ગાંધીનગર ગુજરાતની રાજધાની છે. આ શહેરમાં મોટા પ્રમાણમાં સરકારી કાર્યાલયો અને ઔદ્યોગિક ક્ષેત્ર છે. અમદાવાદ, જે ગુજરાતનું સૌથી મોટું શહેર છે, તેનું એક મહત્વનું ઐતિહાસિક અને આર્થિક કેન્દ્ર છે. અમદાવાદની સુંદર નદી સાબરમતીના કાંઠે બનેલું સાબરમતી આશ્રમ મહાત્મા ગાંધીજીની યાદ અપાવે છે.',
];

const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value.trim();
    let actualWordsArray = totalWords === '' ? [] : totalWords.split(/\s+/);
    let correctWords = errorChecking(actualWordsArray);

    if (correctWords !== 0) {
        let typing_speed = (correctWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${correctWords} correct words out of ${sentence_to_write.length} words & time taken ${time_taken} sec`;
    } else {
        score.innerHTML = `Your typing speed is 0 words per minute & time taken ${time_taken} sec`;
    }
};

const endTypingTest = () => {
    btn.innerText = "Start";
    clearInterval(intervalID);
    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime - startTime) / 1000;

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
};

let intervalID, elapsedTime = 0;

const showTimer = () => {
    if (btn.innerText === "Done") {
        intervalID = setInterval(() => {
            elapsedTime++;
            show_time.innerHTML = elapsedTime;
        }, 1000);
    } else if (btn.innerText === "Start") {
        elapsedTime = 0;
        clearInterval(intervalID);
        show_time.innerHTML = "";
    }
};

const errorChecking = (userWords) => {
    let num = 0;
    sentence_to_write = show_sentence.innerHTML.trim().split(/\s+/);

    for (let i = 0; i < userWords.length; i++) {
        if (userWords[i] === sentence_to_write[i]) {
            num++;
        }
    }
    return num;
};

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";

    showTimer();
};

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;
        case "done":
            typing_ground.setAttribute('disabled', 'true');
            endTypingTest();
            break;
    }
});

