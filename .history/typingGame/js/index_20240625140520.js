document.addEventListener('DOMContentLoaded', function () {
    const typingGround = document.querySelector('#textarea');
    const btn = document.querySelector('#btn');
    const score = document.querySelector('#score');
    const showSentence = document.querySelector('#showSentence');
    const showTime = document.querySelector('#show-time');
    const coloredText = document.querySelector('#coloredText');

    let startTime, endTime, totalTimeTaken, sentenceToWrite;
    let correctWords = 0, backspaceCount = 0;

    const paragraphs = {
        1: `ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ ળ ક્ષ જ્ઞ
            ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ ળ ક્ષ જ્ઞ
            ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ ળ ક્ષ જ્ઞ
            ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ ળ ક્ષ જ્ઞ
            ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ ળ ક્ષ જ્ઞ`,
        2: `અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ
            અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ`,
        3: `બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ 
            બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ 
            બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ 
            બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ 
            બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ બકમા વછીસ `,
        4: `બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ 
            બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ 
            બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ 
            બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ 
            બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ બનની વછીસ `,
        5: `અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ અં અઃ કા કી કુ કૂ કે કૈ કો કૌ કં કઃ 
            બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ 
            બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ 
            બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ 
            બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ બકમા વછીસ બનની વછીસ `
    };

    function startTyping(lessonNumber) {
        const loopCount = document.getElementById(`lesson${lessonNumber}LoopCount`).valueAsNumber;

        for (let i = 0; i < loopCount; i++) {
            // Display the typing test page
            window.location.href = "typingTest.html";
            // Load the selected lesson's content
            showSentence.innerHTML = paragraphs[lessonNumber];
        }
    }

    function timer() {
        let presentTime = new Date();
        let timeDifference = presentTime - startTime;
        let seconds = Math.floor((timeDifference / 1000) % 60);
        let minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        let hours = Math.floor((timeDifference / 1000) / 60 / 60);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        showTime.textContent = hours + ":" + minutes + ":" + seconds;
    }

    btn.addEventListener('click', function () {
        if (this.textContent === 'Start') {
            this.textContent = 'Check';
            startTime = new Date();
            setInterval(timer, 1000);
            sentenceToWrite = showSentence.textContent;
            let currentSentence = sentenceToWrite.split(' ');
            let currentInput = typingGround.value.split(' ');
            showSentence.textContent = null;
            
