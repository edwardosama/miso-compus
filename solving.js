// الأسئلة والاختيارات - 50 سؤال متدرج من السهل إلى الصعب
const quizQuestions = [
    // أسئلة سهلة
    {
        question: "What is a variable in programming?",
        options: ["A storage location", "A function", "A loop", "An error"],
        correctAnswer: "A storage location"
    },
    {
        question: "What is the binary representation of the decimal number 10?",
        options: ["110", "1010", "1001", "1111"],
        correctAnswer: "1010"
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Multi Language", "HyperText Marking Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "Which of these is a valid JavaScript variable name?",
        options: ["2ndVariable", "variable-name", "variable_name", "variable name"],
        correctAnswer: "variable_name"
    },
    {
        question: "What is the output of 3 + 2 + '7'?",
        options: ["57", "12", "32", "5"],
        correctAnswer: "57"
    },
    
    // أسئلة متوسطة
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<style>", "<script>", "<styles>"],
        correctAnswer: "<style>"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Django", "Laravel", "Flask"],
        correctAnswer: "React"
    },
    {
        question: "What is the primary purpose of a firewall?",
        options: ["To filter network traffic", "To provide VPN services", "To monitor system performance", "To store data"],
        correctAnswer: "To filter network traffic"
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["=", "==", "===", "=>"],
        correctAnswer: "="
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        correctAnswer: "font-size"
    },

    // أسئلة صعبة
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n)"
    },
    {
        question: "Which of the following data structures uses LIFO?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "Java", "HTML", "C#"],
        correctAnswer: "HTML"
    },
    {
        question: "What is the output of the following code? console.log(typeof NaN);",
        options: ["number", "undefined", "null", "NaN"],
        correctAnswer: "number"
    },

    // تكملة 50 سؤال
    {
        question: "What is the main function of the CPU?",
        options: ["Store data", "Process data", "Control input/output", "Manage memory"],
        correctAnswer: "Process data"
    },
    {
        question: "Which of the following protocols is used to send data over the internet?",
        options: ["FTP", "HTTP", "SMTP", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the primary purpose of an operating system?",
        options: ["To manage hardware and software resources", "To provide security", "To connect to the internet", "To compile code"],
        correctAnswer: "To manage hardware and software resources"
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Simple Query Language", "Standard Query Language"],
        correctAnswer: "Structured Query Language"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["src", "alt", "title", "description"],
        correctAnswer: "alt"
    },

    {
        question: "What is the main purpose of an API?",
        options: ["To provide a user interface", "To allow communication between software components", "To manage databases", "To handle errors"],
        correctAnswer: "To allow communication between software components"
    },
    {
        question: "Which of the following is used to create a responsive layout?",
        options: ["Media Queries", "Float", "Positioning", "Clearfix"],
        correctAnswer: "Media Queries"
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Naming", "JavaScript Object Normalization"],
        correctAnswer: "JavaScript Object Notation"
    },
    {
        question: "What is the purpose of the 'break' statement in JavaScript?",
        options: ["To exit a loop", "To pause execution", "To define a function", "To declare a variable"],
        correctAnswer: "To exit a loop"
    },
    {
        question: "Which method is used to remove an element from an array in JavaScript?",
        options: ["delete()", "remove()", "splice()", "pop()"],
        correctAnswer: "splice()"
    },

    {
        question: "Which of the following is an example of a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        correctAnswer: "MongoDB"
    },
    {
        question: "Which of the following is a CSS preprocessor?",
        options: ["Sass", "JavaScript", "HTML", "PHP"],
        correctAnswer: "Sass"
    },
    {
        question: "What is the purpose of a constructor function in JavaScript?",
        options: ["To create objects", "To define functions", "To handle events", "To declare variables"],
        correctAnswer: "To create objects"
    },
    {
        question: "What is a common use case for using a hash table?",
        options: ["Storing key-value pairs", "Implementing a queue", "Sorting data", "Searching data sequentially"],
        correctAnswer: "Storing key-value pairs"
    },
    {
        question: "What is the output of the following code? console.log(0.1 + 0.2 === 0.3);",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: "false"
    },

    {
        question: "Which of the following is not a frontend framework?",
        options: ["React", "Vue", "Django", "Angular"],
        correctAnswer: "Django"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<url>", "<hyperlink>"],
        correctAnswer: "<a>"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["Refers to the global object", "Refers to the function that invoked it", "Refers to the current object", "Refers to the parent object"],
        correctAnswer: "Refers to the current object"
    },
    {
        question: "What is the main advantage of using a version control system?",
        options: ["To track changes in code", "To manage databases", "To create user interfaces", "To compile code"],
        correctAnswer: "To track changes in code"
    },
    {
        question: "Which of the following is a method to style an HTML element?",
        options: ["Inline CSS", "External CSS", "Internal CSS", "All of the above"],
        correctAnswer: "All of the above"
    },

    {
        question: "What is the difference between GET and POST methods in HTTP?",
        options: ["GET is more secure than POST", "POST sends data in the URL", "GET sends data in the body", "GET is used to retrieve data"],
        correctAnswer: "GET is used to retrieve data"
    },
    {
        question: "What does the 'console.log()' function do?",
        options: ["Displays output in the console", "Displays output on the web page", "Saves output to a file", "Sends output to a server"],
        correctAnswer: "Displays output in the console"
    },
    {
        question: "Which of the following is used to describe the structure of an HTML document?",
        options: ["CSS", "JavaScript", "XML", "HTML"],
        correctAnswer: "HTML"
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["color", "text-color", "font-color", "background-color"],
        correctAnswer: "color"
    },
    {
        question: "What is a closure in JavaScript?",
        options: ["A function that is enclosed within another function", "A block of code that executes once", "A function that is called multiple times", "An error in JavaScript"],
        correctAnswer: "A function that is enclosed within another function"
    }
];

// متغيرات لتخزين الحالة
let currentQuestionIndex = 0;
let score = 0;
let timer;

// عرض السؤال الحالي
function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    document.getElementById('option1').innerText = question.options[0];
    document.getElementById('option2').innerText = question.options[1];
    document.getElementById('option3').innerText = question.options[2];
    document.getElementById('option4').innerText = question.options[3];

    // تحديث عدد الأسئلة المتبقية
    const remainingQuestions = quizQuestions.length - currentQuestionIndex - 1;
    document.getElementById('remaining-questions').innerText = `Remaining Questions: ${remainingQuestions}`;
}

// بدء المؤقت
function startTimer() {
    let timeLeft = 2400; // 40 دقيقة
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').innerText = `Time Left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            submitAnswer();
        }
    }, 1000);
}

// تسجيل الإجابة
function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = selectedOption.nextElementSibling.innerText;
        if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
            score++;
        }
        selectedOption.checked = false; // إعادة تعيين الاختيار

        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert('Please select an answer!');
    }
}

// إنهاء الاختبار وعرض النتيجة
function endQuiz() {
    clearInterval(timer);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score} / ${quizQuestions.length}</h2>
                                 <button onclick="location.reload()">Restart Quiz</button>`;
    document.getElementById('quiz-container').style.display = 'none'; // إخفاء قسم الأسئلة
}

// بدء الاختبار
window.onload = () => {
    displayQuestion();
    startTimer();
};
