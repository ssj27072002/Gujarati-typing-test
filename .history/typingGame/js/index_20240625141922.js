document.addEventListener('DOMContentLoaded', function () {
    const typingGround = document.querySelector('#textarea');
    const btn = document.querySelector('#btn');
    const score = document.querySelector('#score');
    const showSentence = document.querySelector('#showSentence');
    const showTime = document.querySelector('#show-time');
    const coloredText = document.querySelector('#coloredText');
    const repeatTimesInput = document.querySelector('#repeatTimes');

    let startTime, endTime, totalTimeTaken, sentenceToWrite;
    let correctWords = 0, backspaceCount = 0;
    let lessonToRepeat = 0;
    let currentRepeatCount = 0;

    const paragraphs = {
        1: `ક ખ ગ`,
        2: `અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ`,
        3: `બકમા વછીસ`,
        4: `સરસ સહજ સત્ય સાવચેતી, સાવકે સજળ સરોવર સહનશે.`,
        5: `પ્રેમાનંદ ભટ્ટ મધ્યકાલીન ગુજરાતી કવિ હતા.`
    };

    function selectLesson(lesson) {
        lessonToRepeat = lesson;
        showSentence.textContent = paragraphs[lesson];
    }

    function startTyping() {
        const repeatTimes = parseInt(repeatTimesInput.value);
        if (repeatTimes > 0 && lessonToRepeat !== 0) {
            currentRepeatCount = repeatTimes;
            btn.textContent = "Start";
            toggleTest();
        } else {
            showSentence.textContent = "Please select a lesson and enter a valid repeat times value (greater than 0).";
        }
    }

    function toggleTest() {
        if (btn.textContent === "Start") {
            btn.textContent = "Done";
            startTypingTest();
        } else if (btn.textContent === "Done") {
            btn.textContent = "Start";
            endTypingTest();
        }
    }

    function startTypingTest() {
        typingGround.value = '';
        coloredText.innerHTML = '';
        typingGround.removeAttribute('disabled');

        const date = new Date();
        startTime = date.getTime();
        showTimer();

        sentenceToWrite = paragraphs[lessonToRepeat].split(' ');
        showSentence.textContent = paragraphs[lessonToRepeat];

        correctWords = 0;
        backspaceCount = 0;
    }

    function showTimer() {
        let elapsedTime = 0;
        const intervalID = setInterval(() => {
            elapsedTime++;
            showTime.textContent = elapsedTime;
        }, 1000);

        btn.addEventListener('click', () => {
            clearInterval(intervalID);
            endTime = new Date().getTime();
            totalTimeTaken = (endTime - startTime) / 1000;
        });
    }

    function endTypingTest() {
        calculateTypingSpeed(totalTimeTaken);
        typingGround.setAttribute('disabled', 'true');

        currentRepeatCount--;
        if (currentRepeatCount > 0) {
            startTypingTest();
        } else {
            currentRepeatCount = 0;
        }
    }

    function calculateTypingSpeed(time_taken) {
        let typingSpeed = (correctWords / time_taken) * 60;
        typingSpeed = Math.round(typingSpeed);

        const accuracy = Math.round((correctWords / sentenceToWrite.length) * 100);

        score.textContent = `Your typing speed is ${typingSpeed} words per minute. Correct words: ${correctWords}, Backspaces: ${backspaceCount}, Accuracy: ${accuracy}%. Time taken: ${time_taken} sec.`;
    }

    typingGround.addEventListener('input', () => {
        const userInput = typingGround.value.trim();
        const userWords = userInput.split(/\s+/);

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
        });

        correctWords = userWords.filter((word, index) => word === sentenceToWrite[index]).length;
    });

    typingGround.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            backspaceCount++;
        }
    });
});
