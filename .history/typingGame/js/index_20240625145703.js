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

    const paragraphs = {
        1: `સુભાષચન્દ્ર બોઝ  જે નેતાજીના હુલામણા નામથી પણ જાણીતા છે, તે ભારતીય સ્વાતંત્ર્ય સંગ્રામના અગ્રણી નેતા હતા. બીજા વિશ્વયુદ્ધ દરમિયાન અંગ્રેજોની વિરુદ્ધ લડવા માટે તેમણે જાપાનની સહાયતાથી આઝાદ હિન્દ ફોજની રચના કરી હતી. તેમના દ્વારા આપવામાં આવેલ જય હિન્દ નું સુત્ર ભારતનું રાષ્ટ્રીય સુત્ર બની ગયું છે. ૧૯૪૪માં અમેરિકી પત્રકાર લુઈ ફિશર સાથે વાત કરતાં મહાત્મા ગાંધીએ નેતાજીને દેશભક્તોના પણ દેશભક્ત કહી નવાજ્યા હતા. નેતાજીનું યોગદાન અને પ્રભાવ એટલો મહાન હતો કે એવું કહેવામાં આવે છે કે જો તે સમયે નેતાજી ભારતમાં હોત તો કદાચ ભારત એક સંઘ રાષ્ટ્ર બન્યુ હોત અને ભારતનું વિભાજન થયું ન હોત. સ્વયં ગાંધીજીએ પણ આ વાતનો સ્વીકાર કર્યો હતો.
નેતાજી સુભાષચન્દ્ર બોઝનો જન્મ ૧૮૯૭ના રોજ ઓરિસ્સાના કટક શહેરમાં થયો હતો. તેમના પિતાનું નામ જાનકીનાથ બોઝ અને માતાનું નામ પ્રભાવતી હતું. જાનકીનાથ બોઝ કટક શહેરના પ્રખ્યાત વકીલ હતા. પહેલા તે સરકારી વકીલ હતા, પરંતુ પછીથી તેમણે પોતાની વકિલાત શરૂ કરી હતી. એમણે કટકની મહાપાલિકામાં લાંબા સમય સુધી કામ કર્યું હતું અને તે બંગાળ વિધાનસભાના સભ્ય પણ રહ્યા હતા. અંગ્રેજ સરકારે તેમને રાયબહાદુરનો ખિતાબ આપ્યો હતો. પ્રભાવતી દેવીના પિતાનું નામ ગંગાનારાયણ દત્ત હતું. દત્ત પરિવારને કોલકાતાનું એક કુલીન પરિવાર માનવામાં આવતું હતું. 
પાઠશાળામાં તેમના શિક્ષકનું નામ વેણીમાધવ દાસ હતું. વેણીમાધવ દાસ એમના છાત્રોમાં દેશભક્તિની આગ ભડકાવતા હતા. એમણે જ સુભાષચંદ્ર બોઝમાં અંદરની સુપ્ત દેશભક્તિ જાગૃત કરી. 25 વર્ષની ઉંમરમાં, સુભાષચંદ્ર બોઝ ગુરૂની શોધ માં ઘર થી ભાગી હિમાલય ચાલ્યાં ગયા હતા. પણ ગુરૂ ની તેમની આ શોધ અસફળ રહી. પણ પછી સ્વામી વિવેકાનંદ નું સાહિત્ય વાંચી સુભાષચંદ્ર બોઝ તેમના શિષ્ય બની ગયા હતાં. મહાવિદ્યાલય માં અભ્યાસ કરતા સમયે જ, અન્યાય વિરુદ્ધ આવાજ ઉપાડવાની તેમની પ્રવૃત્તિ દેખાતી હતી. કોલકાતાની પ્રેસિડેંસી કૉલેજ ના અંગ્રેજ પ્રાધ્યાપક ઓટેન નું ભારતીય વિદ્યાર્થીઓ સાથે વ્યવહાર ઠીક ન રહેતું. આ માટે સુભાષચંદ્ર બોઝ ના નેતૃત્વમાં મહાવિદ્યાલય માં હડતાલ કરાઈ હતી. ૧૯૨૧માં ઈગ્લેંડ જઈ સુભાષચંદ્ર બોઝ ભારતીય સિવિલ સેવા ની પરીક્ષામાં સફલ રહ્યાં. પણ તેમણે અંગ્રેજ સરકારની સેવા કરવાનો ઇન્કાર કર્યો અને રાજીનામું આપી તેઓ પાછા ભારત આવી ગયાં.
તેમના સાર્વજનિક જીવન માં સુભાષબાબુ એ કુલ અગિયાર બાર વરસ કારાવાસ માં કાઢ્યા. સહુથી પહેલા તેમણે ૧૯૨૧ માં ૬ મહિના માટે કારાવાસ થયો. ૧૯૨૫માં ગોપીનાથ સાહા નામના એક ક્રાંતિકારી કોલકાતાના પોલીસ અધિક્ષક ચાર્લસ ટેગાર્ટ ને મારવા માંગતા હતાં. તેણે ભૂલથી અર્નેસ્ટ ડે નામના એક વ્યાપારી ને મારી નાખ્યાં.દઆ માટે તેમને ફાંસીની સજા દેવાઈ. ગોપીનાથ ને ફાંસી થયા બાદ સુભાષબાબુ જોર થી રડ્યાં. તેમણે ગોપીનાથ નું શબ મંગાવી તેનું અંતિમસંસ્કાર કર્યુ. સુભાષબાબુ ને ગિરફતાર કર્યા અને વગર કોઈ મુકદમો ચલાવી, તેમને અનિશ્ચિત કાલખંડ માટે મ્યાનમારની મંડાલે કારાગૃહમાં બંદી બનાવ્યાં.
`,
        2: `અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ`,
        3: `બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ 
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

        const accuracy = Math.round((correctWords / sentenceToWrite.length) * 100);

        score.innerHTML = `Your typing speed is ${typingSpeed} words per minute. Correct words: ${correctWords}, Backspaces: ${backspaceCount}, Accuracy: ${accuracy}%. Time taken: ${time_taken} sec.`;
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
        typingGround.value = '';
        coloredText.innerHTML = '';
        typingGround.removeAttribute('disabled');
        btn.removeAttribute('disabled');
        showSentence.innerHTML = paragraphs[lesson];

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
