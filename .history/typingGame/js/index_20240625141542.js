document.addEventListener('DOMContentLoaded', function () {
    const typingGround = document.querySelector('#textarea');
    const btn = document.querySelector('#btn');
    const score = document.querySelector('#score');
    const showSentence = document.querySelector('#showSentence');
    const showTime = document.querySelector('#show-time');
    const coloredText = document.querySelector('#coloredText');
    const lessonSelect = document.querySelector('#lesson');
    const repeatInput = document.querySelector('#repeatInput');

    let startTime, endTime, totalTimeTaken, sentenceToWrite;
    let correctWords = 0, backspaceCount = 0;
    let intervalID, elapsedTime = 0;
    let repeatCount = 1;

    const paragraphs = {
        1: `This is lesson 1 content. It can be multiple sentences or paragraphs.`,
        2: `This is lesson 2 content. It can be multiple sentences or paragraphs.`,
        3: `This is lesson 3 content. It can be multiple sentences or paragraphs.`
    };

    lessonSelect.addEventListener('change', function () {
        const selectedLesson = parseInt(lessonSelect.value);
        if (paragraphs[selectedLesson]) {
            sentenceToWrite = paragraphs[selectedLesson].split(' ');
            showSentence.textContent = paragraphs[selectedLesson].trim();
        } else {
            showSentence.textContent = 'Invalid lesson selected.';
            btn.setAttribute('disabled', 'true');
            typingGround.setAttribute('disabled', 'true');
        }
    });

    repeatInput.addEventListener('change', function () {
        const count = parseInt(repeatInput.value);
        if (!isNaN(count) && count > 0) {
            repeatCount = count;
        } else {
            repeatCount = 1; // Default to 1 if invalid input
        }
        showSentence.textContent = paragraphs[parseInt(lessonSelect.value)].repeat(repeatCount);
    });

    const calculateTypingSpeed = (time_taken) => {
        let typingSpeed = (correctWords / time_taken) * 60;
        typingSpeed = Math.round(typingSpeed);

        const accuracy = Math.round((correctWords / sentenceToWrite.length) * 100);

        score.textContent = `Your typing speed is ${typingSpeed} words per minute. Correct words: ${correctWords}, Backspaces: ${backspaceCount}, Accuracy: ${accuracy}%. Time taken: ${time_taken} sec.`;
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
        if (btn.innerText === "Done") {
            intervalID = setInterval(() => {
                elapsedTime++;
                showTime.textContent = elapsedTime;
            }, 1000);
        } else if (btn.innerText === "Start") {
            elapsedTime = 0;
            clearInterval(intervalID);
            showTime.textContent = "";
        }
    };

    const startTyping = () => {
        typingGround.value = '';
        coloredText.textContent = '';
        typingGround.removeAttribute('disabled');
        btn.removeAttribute('disabled');
        showSentence.textContent = paragraphs[parseInt(lessonSelect.value)].trim();

        correctWords = 0;
        backspaceCount = 0;

        const date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";

        showTimer();
    };

    typingGround.addEventListener('input', () => {
        const userInput = typingGround.value.trim();
        const userWords = userInput.split(/\s+/);

        coloredText.textContent = '';

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
        });

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
});
