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

    const paragraphs = {
        1: `ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ ક ખ ગ ઘ ચ જ ઝ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ સ શ ષ હ ળ ક્ષ જ્ઞ દ્વ દ્વ દ્વ દ્ર દ્ર દ્ર દ્દ દ્દ દ્દ ત્વ ત્વ ત્વ ત્વ ત્ત ત્ત ત્ત ધ્વ ધ્વ ધ્વ ષ્ટ્રી ષ્ટ્રી ષ્ટ્રી ઋ ઋ ઋ શ્ર શ્ર શ્ર ન્ય ન્ય ન્ય ર્થે ર્થે ર્થે રૂ રૂ રૂ ર્ડ ર્ડ ર્ડ દ્ધ દ્ધ દ્ધ દ્ધ દ્ય દ્ય દ્ય ટ્ટ ટ્ટ ટ્ટ ટ્ટ અ અ અ એ એ એ દ્વ દ્વ દ્વ  દ્ર દ્ર દ્ર દ્દ દ્દ દ્દ ત્વ ત્વ ત્વ ત્વ ત્ત ત્ત ત્ત ધ્વ ધ્વ ધ્વ ષ્ટ્રી ષ્ટ્રી ષ્ટ્રી ઋ ઋ ઋ શ્ર શ્ર શ્ર ન્ય ન્ય ન્ય ર્થે ર્થે ર્થે રૂ રૂ રૂ ર્ડ ર્ડ ર્ડ દ્ધ દ્ધ દ્ધ દ્ધ દ્ય દ્ય દ્ય ટ્ટ ટ્ટ ટ્ટ ટ્ટ અ અ અ એ એ એ દ્વ દ્વ દ્વ દ્ર દ્ર દ્ર દ્દ દ્દ દ્દ ત્વ ત્વ ત્વ ત્વ ત્ત ત્ત ત્ત ધ્વ ધ્વ ધ્વ ષ્ટ્રી ષ્ટ્રી ષ્ટ્રી ઋ ઋ ઋ શ્ર શ્ર શ્ર ન્ય ન્ય ન્ય ર્થે ર્થે ર્થે રૂ રૂ રૂ ર્ડ ર્ડ ર્ડ દ્ધ દ્ધ દ્ધ દ્ધ દ્ય દ્ય દ્ય ટ્ટ ટ્ટ ટ્ટ ટ્ટ અ અ અ એ એ એ દ્વ દ્વ દ્વ દ્ર દ્ર દ્ર દ્દ દ્દ દ્દ ત્વ ત્વ ત્વ ત્વ ત્ત ત્ત ત્ત ધ્વ ધ્વ ધ્વ ષ્ટ્રી ષ્ટ્રી ષ્ટ્રી ઋ ઋ ઋ શ્ર શ્ર શ્ર ન્ય ન્ય ન્ય ર્થે ર્થે ર્થે રૂ રૂ રૂ ર્ડ ર્ડ ર્ડ દ્ધ દ્ધ દ્ધ દ્ધ દ્ય દ્ય દ્ય ટ્ટ ટ્ટ ટ્ટ ટ્ટ અ અ અ એ એ એ દ્વ દ્વ દ્વ દ્ર દ્ર દ્ર દ્દ દ્દ દ્દ ત્વ ત્વ ત્વ ત્વ ત્ત ત્ત ત્ત ધ્વ ધ્વ ધ્વ ષ્ટ્રી ષ્ટ્રી ષ્ટ્રી ઋ ઋ ઋ શ્ર શ્ર શ્ર ન્ય ન્ય ન્ય ર્થે ર્થે ર્થે રૂ રૂ રૂ ર્ડ ર્ડ ર્ડ દ્ધ દ્ધ દ્ધ દ્ધ દ્ય દ્ય દ્ય ટ્ટ ટ્ટ ટ્ટ ટ્ટ અ અ અ એ એ એ દ્વ દ્વ દ્વ દ્ર દ્ર દ્ર દ્દ દ્દ દ્દ ત્વ ત્વ ત્વ ત્વ ત્ત ત્ત ત્ત ધ્વ ધ્વ ધ્વ ષ્ટ્રી ષ્ટ્રી ષ્ટ્રી ઋ ઋ ઋ શ્ર શ્ર શ્ર ન્ય ન્ય ન્ય ર્થે ર્થે ર્થે રૂ રૂ રૂ ર્ડ ર્ડ ર્ડ દ્ધ દ્ધ દ્ધ દ્ધ દ્ય દ્ય દ્ય ટ્ટ ટ્ટ ટ્ટ ટ્ટ અ અ અ એ એ એ દ્વ દ્વ દ્વ દ્ર દ્ર દ્ર દ્દ દ્દ દ્દ ત્વ ત્વ ત્વ ત્વ ત્ત ત્ત ત્ત ધ્વ ધ્વ ધ્વ ષ્ટ્રી ષ્ટ્રી ષ્ટ્રી ઋ ઋ ઋ શ્ર શ્ર શ્ર ન્ય ન્ય ન્ય ર્થે ર્થે ર્થે રૂ રૂ રૂ  ર્ડ ર્ડ ર્ડ દ્ધ દ્ધ દ્ધ દ્ધ દ્ય દ્ય દ્ય ટ્ટ ટ્ટ ટ્ટ ટ્ટ અ અ અ એ એ એ ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં ક: કઁ કૉ કૅ કૃ ક્ર  ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર  ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર ક કા કિ કી કુ કૂ કે કૈ કો કૌ કં કઃ કઁ કૉ કૅ કૃ ક્ર અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ   અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ  અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ  અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ અ આ ઇ ઈ ઉ ઊ ઋ એ ઍ ઐ ઓ ઑ ઔ`,
        2: `અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ`,
        3: `બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ
        બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ`,
        4: `સરસ સહજ સત્ય સાવચેતી, સાવકે સજળ સરોવર સહનશે.`,
        5: `પ્રેમાનંદ ભટ્ટ મધ્યકાલીન ગુજરાતી કવિ હતા. તેઓ પોતાની અખૈયા રચનાઓ માટે જાણીતા છે. પ્રેમાનંદ માણભટ્ટની પરંપરાનાં કવિ મનાય છે.`
        // Add more lessons here
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
});
