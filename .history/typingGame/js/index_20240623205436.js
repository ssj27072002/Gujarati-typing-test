document.addEventListener('DOMContentLoaded', function () {
    const typingGround = document.querySelector('#textarea');
    const btn = document.querySelector('#btn');
    const score = document.querySelector('#score');
    const showSentence = document.querySelector('#showSentence');
    const showTime = document.querySelector('#show-time');

    const urlParams = new URLSearchParams(window.location.search);
    const lesson = urlParams.get('lesson');

    let startTime, endTime, totalTimeTaken, sentenceToWrite;
    let incorrectPositions = [];

    const paragraphs = {
        1: `પ્રેમાનંદ અથવા પ્રેમાનંદ ભટ્ટ મધ્યકાલીન ગુજરાતી કવિ અને માણભટ્ટ આખ્યાનકાર હતા, જેઓ તેમની અખૈયા રચનાઓ માટે જાણીતા છે. પ્રેમાનંદ માણભટ્ટની પરંપરાનાં કવિ મનાય છે.`,
        2: 'સૂરત એક મહત્વપૂર્ણ વ્યાપારી શહેર છે, જે પોતાના હીરાના વેપાર અને કાપડ ઉદ્યોગ માટે જાણીતું છે. આ શહેરમાં ઘણા સુંદર બાગો અને મલ્ટીપ્લેક્સ સિનેમા છે.',
        3: `બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ`
    };

    if (lesson && paragraphs[lesson]) {
        sentenceToWrite = paragraphs[lesson].split(' ');
        showSentence.innerHTML = paragraphs[lesson];
    } else {
        showSentence.innerHTML = 'Invalid lesson selected.';
        btn.setAttribute('disabled', 'true');
        typingGround.setAttribute('disabled', 'true');
    }

    const calculateTypingSpeed = (time_taken) => {
        const userText = typingGround.value.trim();
        const actualWordsArray = userText === '' ? [] : userText.split(/\s+/);
        const correctWords = errorChecking(actualWordsArray);

        if (correctWords !== 0) {
            let typingSpeed = (correctWords / time_taken) * 60;
            typingSpeed = Math.round(typingSpeed);
            score.innerHTML = `Your typing speed is ${typingSpeed} words per minute & you wrote ${correctWords} correct words out of ${sentenceToWrite.length} words & time taken ${time_taken} sec`;
        } else {
            score.innerHTML = `Your typing speed is 0 words per minute & time taken ${time_taken} sec`;
        }
    };

    const errorChecking = (userWords) => {
        let numCorrect = 0;
        incorrectPositions = [];

        for (let i = 0; i < userWords.length; i++) {
            if (userWords[i] === sentenceToWrite[i]) {
                numCorrect++;
            } else {
                incorrectPositions.push(i);
            }
        }

        return numCorrect;
    };

    const endTypingTest = () => {
        btn.innerText = "Start";
        clearInterval(intervalID);
        const date = new Date();
        endTime = date.getTime();

        totalTimeTaken = (endTime - startTime) / 1000;

        calculateTypingSpeed(totalTimeTaken);

        // Display user input and highlight incorrect words
        const userWords = typingGround.value.trim().split(/\s+/);
        const highlightedWords = sentenceToWrite.map((word, index) => {
            if (incorrectPositions.includes(index)) {
                return `<span class="error">${userWords[index] || ''}</span>`;
            } else {
                return word;
            }
        }).join(' ');

        showSentence.innerHTML = highlightedWords;
        typingGround.setAttribute('disabled', 'true');
    };

    let intervalID, elapsedTime = 0;

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

    const startTyping = () => {
        showSentence.scrollTop = 0;
        typingGround.value = '';
        typingGround.removeAttribute('disabled');
        btn.removeAttribute('disabled');
        showSentence.innerHTML = paragraphs[lesson];

        // Set the start time and change button text
        const date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";

        // Start the timer
        showTimer();
    };

    btn.addEventListener('click', () => {
        if (btn.innerText.toLowerCase() === "start") {
            startTyping();
        } else if (btn.innerText.toLowerCase() === "done") {
            endTypingTest();
        }
    });
});
