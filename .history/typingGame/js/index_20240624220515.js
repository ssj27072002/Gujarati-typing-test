document.addEventListener('DOMContentLoaded', function () {
    const typingGround = document.querySelector('#textarea');
    const btn = document.querySelector('#btn');
    const score = document.querySelector('#score');
    const showSentence = document.querySelector('#showSentence');
    const showTime = document.querySelector('#show-time');

    const urlParams = new URLSearchParams(window.location.search);
    const lesson = urlParams.get('lesson');

    let startTime, endTime, totalTimeTaken, sentenceToWrite;
    let currentWordIndex = 0;
    let correctWords = 0;
    let backspaceCount = 0;
    let elapsedTime = 0;

    const paragraphs = {
        1: `પ્રેમાનંદ અથવા પ્રેમાનંદ ભટ્ટ મધ્યકાલીન ગુજરાતી કવિ અને માણભટ્ટ આખ્યાનકાર હતા, જેઓ તેમની અખૈયા રચનાઓ માટે જાણીતા છે. પ્રેમાનંદ માણભટ્ટની પરંપરાનાં કવિ મનાય છે.`,
        2: 'સૂરત એક મહત્વપૂર્ણ વ્યાપારી શહેર છે, જે પોતાના હીરાના વેપાર અને કાપડ ઉદ્યોગ માટે જાણીતું છે. આ શહેરમાં ઘણા સુંદર બાગો અને મલ્ટીપ્લેક્સ સિનેમા છે.',
        3: `બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ`
    };

    if (lesson && paragraphs[lesson]) {
        sentenceToWrite = paragraphs[lesson].split(' ');
        showSentence.innerHTML = paragraphs[lesson];
    } else {
        showSentence.innerHTML = 'Invalid lesson selected.';
        btn.setAttribute('disabled', 'true');
        typingGround.setAttribute('disabled', 'true');
    }

    const calculateTypingSpeedAndAccuracy = () => {
        const time_taken = elapsedTime;
        let typingSpeed = (correctWords / time_taken) * 60;
        typingSpeed = Math.round(typingSpeed);

        let accuracy = ((sentenceToWrite.length - backspaceCount) / sentenceToWrite.length) * 100;
        accuracy = accuracy.toFixed(2);

        score.innerHTML = `Your typing speed is ${typingSpeed} words per minute. Correct words: ${correctWords}, Backspaces: ${backspaceCount}, Accuracy: ${accuracy}%. Time taken: ${time_taken} sec.`;
    };

    const startTyping = () => {
        showSentence.scrollTop = 0;
        typingGround.value = '';
        typingGround.removeAttribute('disabled');
        btn.removeAttribute('disabled');
        showSentence.innerHTML = paragraphs[lesson];

        currentWordIndex = 0;
        correctWords = 0;
        backspaceCount = 0;
        elapsedTime = 0;

        const date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";

        showTimer();
    };

    const endTypingTest = () => {
        btn.innerText = "Start";
        clearInterval(intervalID);
        const date = new Date();
        endTime = date.getTime();

        totalTimeTaken = (endTime - startTime) / 1000;
        elapsedTime = totalTimeTaken;
        calculateTypingSpeedAndAccuracy();

        typingGround.setAttribute('disabled', 'true');
    };

    let intervalID;
    const showTimer = () => {
        if (btn.innerText === "Done") {
            intervalID = setInterval(() => {
                elapsedTime++;
                showTime.innerHTML = elapsedTime;
            }, 1000);
        } else if (btn.innerText === "Start") {
            elapsedTime = 0;
            clearInterval(intervalID);
            showTime.innerHTML = "";
        }
    };

    typingGround.addEventListener('input', (event) => {
        const userText = typingGround.value.trim();
        const words = userText.split(/\s+/);

        if (words[currentWordIndex] === sentenceToWrite[currentWordIndex]) {
            correctWords++;
            showWord(words[currentWordIndex], 'green');
            currentWordIndex++;
            typingGround.value = words.slice(0, currentWordIndex).join(' ') + ' ';
        } else {
            showWord(words[currentWordIndex], 'red');
        }

        calculateTypingSpeedAndAccuracy();
    });

    typingGround.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            backspaceCount++;
        }
        if (event.key === ' ' && typingGround.value.trim().split(/\s+/).length > currentWordIndex) {
            event.preventDefault();
        }
    });

    const showWord = (word, color) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
        wordSpan.style.color = color;
        showSentence.appendChild(wordSpan);
    };

    btn.addEventListener('click', () => {
        if (btn.innerText.toLowerCase() === "start") {
            startTyping();
        } else if (btn.innerText.toLowerCase() === "done") {
            endTypingTest();
        }
    });
});
