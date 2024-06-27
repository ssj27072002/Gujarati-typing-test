document.addEventListener('DOMContentLoaded', function () {
    const typingGround = document.querySelector('#textarea');
    const btn = document.querySelector('#btn');
    const score = document.querySelector('#score');
    const showSentence = document.querySelector('#showSentence');
    const showTime = document.querySelector('#show-time');
    const coloredText = document.querySelector('#coloredText');

    const urlParams = new URLSearchParams(window.location.search);
    const lesson = urlParams.get('lesson');

    let startTime, endTime, totalTimeTaken, sentenceToWrite;
    let correctWords = 0, backspaceCount = 0;
    let timeLimit = 600; // 10 minutes in seconds
    let intervalID;
    let currentWordIndex=0;
    

    const paragraphs = {
        1: `ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ `,
        2: `બકમા વછીસ બકમા વછીસ `,
        3: `દ્વ દ્વ દ્વ દ્ર દ્ર દ્ર દ્દ`,
        4: ` કં કઃ કઁ ક્ર`,
        5: `અ અ અ એ એ `
        // Add more lessons here
    };

    if (lesson && paragraphs[lesson]) {
        sentenceToWrite = paragraphs[lesson].trim.split(' ');
        showSentence.innerHTML = paragraphs[lesson];
    } else {
        showSentence.innerHTML = 'Invalid lesson selected.';
        btn.setAttribute('disabled', 'true');
        typingGround.setAttribute('disabled', 'true');
    }

    const updateHighlight = () => {
        const userInput = typingGround.value.trim();
        const userWords = userInput.split(/\s+/);

        // Clear previous styling
        showSentence.innerHTML = '';

        // Highlight current word
        sentenceToWrite.forEach((word, index) => {
            const span = document.createElement('span');
            if (index === currentWordIndex) {
                span.classList.add('current-word');
            }
            span.textContent = word + ' ';
            showSentence.appendChild(span);
        });
    };

    const calculateTypingSpeed = (time_taken) => {
        let typingSpeed = (correctWords / time_taken) * 60;
        typingSpeed = Math.round(typingSpeed);

        const incorrectWords = sentenceToWrite.length - correctWords;

        score.innerHTML = `Your typing speed is ${typingSpeed} words per minute. Correct words: ${correctWords}, Incorrect words: ${incorrectWords}, Backspaces: ${backspaceCount}, Time taken: ${time_taken} sec.`;
    };

    const endTypingTest = () => {
        btn.innerText = "Start";
        clearInterval(intervalID);
        const date = new Date();
        endTime = date.getTime();

        totalTimeTaken = (endTime - startTime) / 1000;

        calculateTypingSpeed(totalTimeTaken);

        typingGround.setAttribute('disabled', 'true');
    };

    const showTimer = () => {
        intervalID = setInterval(() => {
            if (timeLimit > 0) {
                timeLimit--;
                const minutes = Math.floor(timeLimit / 60);
                const seconds = timeLimit % 60;
                showTime.innerHTML = `${minutes}m ${seconds}s`;
            } else {
                endTypingTest();
            }
        }, 1000);
    };

    const startTyping = () => {
        typingGround.value = '';
        coloredText.innerHTML = '';
        typingGround.removeAttribute('disabled');
        btn.removeAttribute('disabled');
        showSentence.innerHTML = paragraphs[lesson];

        correctWords = 0;
        backspaceCount = 0;
        timeLimit = 600; // reset to 10 minutes

        const date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";

        showTimer();
    };

    typingGround.addEventListener('input', () => {
        const userInput = typingGround.value.trim();
        const userWords = userInput.split(/\s+/);

        correctWords = 0;
        userWords.forEach((word, index) => {
            if (word === sentenceToWrite[index]) {
                correctWords++;
            }
        });
            currentWordIndex = userWords.length > 0 ? userWords.length - 1 : 0;

        coloredText.innerHTML = '';

        userWords.forEach((word, index) => {
            const span = document.createElement('span');
            if (index < sentenceToWrite.length) {
                if (word === sentenceToWrite[index]) {
                    span.classList.add('correct');
                } else {
                    span.classList.add('error');
                }
                span.textContent = word + ' ';
                coloredText.appendChild(span);
            }
            updateHighlight();
        });

        // Track correct words
        correctWords = userWords.filter((word, index) => word === sentenceToWrite[index]).length;
    });

    typingGround.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            backspaceCount++;
        }
    });

    btn.addEventListener('click', () => {
        if (btn.innerText.toLowerCase() === "start") {
            startTyping();
        } else if (btn.innerText.toLowerCase() === "done") {
            endTypingTest();
            
        }
    });
    updateHighlight();
});


