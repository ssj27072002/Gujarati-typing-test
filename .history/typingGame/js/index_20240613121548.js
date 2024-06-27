const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');
const show_time = document.querySelector('#show-time'); 
const paragraphSelector = document.getElementById('paragraphSelector');

let startTime, endTime, totalTimeTaken, sentence_to_write;

const paragraphs = {
    1: `Your Gujarati paragraph 1 here`,
    2: `Your Gujarati paragraph 2 here`,
    3: `Your Gujarati paragraph 3 here`,
};

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

// const errorChecking = (userWords) => {
//     let num = 0;
//     sentence_to_write = show_sentence.innerHTML.trim().split(/\s+/);

//     for (let i = 0; i < userWords.length; i++) {
//         if (userWords[i] === sentence_to_write[i]) {
//             num++;
//         } else {
//             // Highlight incorrect words
//             typing_ground.value += `<span class="error">${userWords[i]}</span> `;
//         }
//     }
//     return num;
// };
const errorChecking = (userWords) => {
    let numCorrect = 0;
    sentence_to_write = show_sentence.innerHTML.trim().split(/\s+/);
    incorrectPositions = [];

    for (let i = 0; i < userWords.length; i++) {
        if (userWords[i] === sentence_to_write[i]) {
            numCorrect++;
        } else {
            incorrectPositions.push(i);
        }
    }
    
    return numCorrect;
};



const startTyping = () => {
    let selectedValue = paragraphSelector.value;
    if (selectedValue) {
        show_sentence.innerHTML = paragraphs[selectedValue];
        let date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";
        showTimer();
    } else {
        alert("Please select a paragraph first!");
    }
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

paragraphSelector.addEventListener("change", function() {
    show_sentence.innerHTML = "";
    typing_ground.value = "";
    typing_ground.setAttribute('disabled', 'true');
    btn.innerText = "Start";
    elapsedTime = 0;
    clearInterval(intervalID);
    show_time.innerHTML = "0";
    score.innerHTML = "";
});

// Disable right-click menu on textarea
typing_ground.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Disable copy, cut, and paste
typing_ground.addEventListener('copy', (e) => {
    e.preventDefault();
});
typing_ground.addEventListener('cut', (e) => {
    e.preventDefault();
});
typing_ground.addEventListener('paste', (e) => {
    e.preventDefault();
});
