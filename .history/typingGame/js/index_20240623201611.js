/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align items to the top */
    min-height: 100vh; /* Ensure body is tall enough */
    overflow: scroll; /* Allow vertical scrolling */
}

/* Container Styles */
.typing-section {
    background: rgba(255, 255, 255, 0.95);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 700px;
    text-align: center;
    animation: fadeIn 1s ease-out;
    margin: 20px 0; /* Add margin for better spacing */
    perspective: 1000px; /* Enable 3D effects */
}

/* Header Styles */
.header {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    padding: 20px;
    border-radius: 15px 15px 0 0;
    color: white;
    margin: -30px -30px 20px;
    animation: slideInDown 1s ease-out;
    transform: rotateY(0deg); /* 3D rotation */
}

.header h1 {
    font-size: 28px;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    transform: rotateY(0deg); /* 3D rotation */
    transition: transform 0.5s;
}

.header h1:hover {
    transform: rotateY(360deg); /* 3D rotation on hover */
}

.header h2 {
    font-size: 18px;
    margin: 0;
    color: #fff;
}

/* Timer Styles */
.timer {
    font-size: 24px;
    color: #e74c3c;
    margin-bottom: 20px;
    font-weight: bold;
}

/* Select Styles */
.styled-select {
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    background: #f3f4f6;
    color: #2c3e50;
    transition: all 0.3s ease;
    animation: slideIn 1s ease-out;
    white-space: pre-line !important;
}

.styled-select:hover {
    border-color: #3498db;
}

/* Paragraph Styles */
.scrollable-paragraph {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    background: #f9fafb;
    color: #2c3e50;
    animation: slideIn 1s ease-out;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1); /* Inner shadow */
}

/* Textarea Styles */
.styled-textarea {
    width: 100%;
    height: 150px;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 20px;
    resize: none;
    background: #f3f4f6;
    color: #2c3e50;
    transition: all 0.3s ease;
    animation: fadeIn 1s ease-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Outer shadow */
}

.styled-textarea:focus {
    border-color: #3498db;
    outline: none;
    background: #e6e9ef;
    box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); /* Glowing effect */
}

/* Button Styles */
.styled-button {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    color: white;
    padding: 12px 25px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: bounce 2s infinite;
    transform-style: preserve-3d; /* 3D effect */
}

.styled-button:hover {
    background: linear-gradient(to right, #feb47b, #ff7e5f);
    transform: translateY(-2px) rotateX(10deg); /* 3D rotation on hover */
}

/* Score Styles */
#score {
    margin-top: 20px;
    font-size: 20px;
    color: #27ae60;
}

/* Keyframes for Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes textGlow {
    from {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
    to {
        text-shadow: 0 0 20px rgba(255, 255, 255, 1);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
.error {
    color: red;
}


