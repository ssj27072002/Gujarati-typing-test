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
        1: `પ્રેમાનંદ અથવા પ્રેમાનંદ ભટ્ટ મધ્યકાલીન ગુજરાતી કવિ અને માણભટ્ટ આખ્યાનકાર હતા, જેઓ તેમની અખૈયા રચનાઓ માટે જાણીતા છે. પ્રેમાનંદ માણભટ્ટની પરંપરાનાં કવિ મનાય છે. માણ ઉપર હાથથી તાલ આપીને કથાપ્રસંગોનું પઠન અને ગાયન કરવામાં કુશળ પ્રેમાનંદે સાભિનય રજુઆત દ્વારા આખ્યાન લોકપ્રિય કર્યાં હતા. ગુજરાતી સાહિત્યમાં આખ્યાનોની શરૂઆત પ્રેમાનંદ દ્વારા થયેલી હોવાનું મનાય છે. ગુજરાતી ભાષાના સર્વોત્તમ આખ્યાન કવિ તરીકે પ્રખ્યાત થયેલા પ્રેમાનંદે લોકસમુદાયમાં આનંદ સાથે વિચારશક્તિ આપતી અનેક આખ્યાન રચનાઓ ગુંજાતી કરી હતી. તેમનાં જમાનામાં તેઓ 'રાસકવિ' તરીકે ઓળખાતાં હતાં. નરસિંહ મહેતા અને સુદામા જેવા ભક્તોનાં જીવનપ્રસંગો તથા પુરાણોમાંથી કથાવસ્તુ લઇ તેમણે આખ્યાનો રચેલાં. આખ્યાન તો કથનની કળા છે. 
પ્રેમાનંદ કથનકળામાં પ્રવિણ હોવા સાથે વર્ણનો, પાત્રાલેખન, રસનિરુપણ અને વાતાવરણચિત્રણમાં પણ કુશળ હતાં. એમનાં આખ્યાનોને ઉત્તમ બનાવવામાં એમની ભાષાશક્તિ અને રસનિરુપણ શક્તિનો મહત્ત્વનો ફાળો હતો. તેમનાં સમયનાં મુઘલરાજા અને ગુજરાત પ્રદેશનાં શાસક ઔરંગઝેબ તેમને મહાકવિ પ્રેમાનંદ કહીને બોલાવતા. પ્રેમાનંદના જીવન વિશે આપણે ત્યાં લગભગ ત્રણ સદીથી ચર્ચા ચાલે છે. પ્રેમાનંદનાં જીવન વિશે વિશ્વાસપાત્ર હકીકત બહુ ઓછી જોવા મળે છે. એમની ઘણી કૃતિઓમાં રચનાવર્ષ આપ્યા છે તેવી કૃતિઓમાં સૌપ્રથમ કૃતિ ચંદ્રહાસ આખ્યાન આશરે ઈ.સ ૧૬૬૧માં અને ઓખા હરણ સંભવત ઈ.સ. ૧૬૬૭માં રચાયેલ હોવાનું મનાય છે. 
પ્રેમાનંદ વડોદરાના વતની હતા. તેઓ વડોદરાનાં વાડી મહોલ્લામાં રહેતાં હતાં. તેઓ ચોવિસા મેવાડા બ્રાહ્મણ હતાં. તેમનાં પિતાનું નામ કૃષ્ણરામ હતુ. તેમની પત્નીનું નામ હરકોર ભટ્ટ હતું. તેમનો એક પુત્ર હતો જેનું નામ વલ્લભભટ્ટ હતું. આખ્યાનો કરવાં અને માણભટ્ટ એટલે કે કથાકારનો એમનો વ્યવસાય હતો. વ્યવસાય અર્થે એમણે થોડાંક વર્ષો દક્ષિણ ગુજરાતમાં સુરત અને ત્યાંથી ખાનદેશમાં નંદનબાર અને બુરહાનપુરામાં વિતાવેલાં.
`,
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
