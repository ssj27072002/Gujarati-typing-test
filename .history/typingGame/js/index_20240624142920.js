document.addEventListener('DOMContentLoaded', function () {
    const typingGround = document.querySelector('#textarea');
    const btn = document.querySelector('#btn');
    const score = document.querySelector('#score');
    const showSentence = document.querySelector('#showSentence');
    const showTime = document.querySelector('#show-time');

    const urlParams = new URLSearchParams(window.location.search);
    const lesson = urlParams.get('lesson');

    let startTime, endTime, totalTimeTaken, sentenceToWrite;
    let incorrectWords = [];
    let missingWords = 0;

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

    const calculateTypingSpeed = (time_taken) => {
        const userText = typingGround.value.trim();
        const actualWordsArray = userText === '' ? [] : userText.split(/\s+/);

        const { correctWords, incorrectWords, missingWords } = errorChecking(actualWordsArray);

        let typingSpeed = (correctWords / time_taken) * 60;
        typingSpeed = Math.round(typingSpeed);

        score.innerHTML = `Your typing speed is ${typingSpeed} words per minute & you wrote ${correctWords} correct words out of ${sentenceToWrite.length} words. Time taken: ${time_taken} sec. Incorrect words: ${incorrectWords.join(', ')}. Missing words: ${missingWords}`;
    };

    const errorChecking = (userWords) => {
        let numCorrect = 0;
        incorrectWords = [];
        missingWords = 0;

        // Pad userWords with 'EOL' to match the length of sentenceToWrite
        for (let i = 0; i < sentenceToWrite.length; i++) {
            if (userWords[i] === undefined) {
                userWords[i] = 'EOL';
            }
        }

        for (let i = 0; i < sentenceToWrite.length; i++) {
            if (userWords[i] !== 'EOL') {
                if (userWords[i] === sentenceToWrite[i]) {
                    numCorrect++;
                } else {
                    incorrectWords.push(userWords[i]);
                }
            } else {
                missingWords++;
            }
        }

        return { correctWords: numCorrect, incorrectWords, missingWords };
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

        const date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";

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
