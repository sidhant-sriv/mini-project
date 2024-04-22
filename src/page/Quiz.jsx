import React, { useState } from "react";
import Sidebar from "../components/widgets/Sidebar";

const QuizApp = () => {
  // Define quiz questions and answers
  const questions = [
    {
      question: "Which planet is closest to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: "Mercury",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Uranus"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: "Mercury",
    },
    {
      question: "What is the hottest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: "Venus",
    },
    {
      question: "What do we call a collection of billions of stars bound together by gravity?",
      options: ["Constellation", "Galaxy", "Nebula", "Solar System"],
      correctAnswer: "Galaxy",
    },
    {
      question: "What object forms when a massive star collapses at the end of its life?",
      options: ["White dwarf", "Black hole", "Neutron star", "Red Giant"],
      correctAnswer: "Black hole",
    },
    {
      question: "What do we call the rocky remnants of space debris that enter Earth's atmosphere and burn up?",
      options: ["Comets", "Asteroids", "Meteors", "Satellites"],
      correctAnswer: "Meteors",
    },
    {
      question: "What is the name of our galaxy?",
      options: ["Andromeda", "Whirlpool", "Sombrero", "Milky Way"],
      correctAnswer: "Milky Way",
    },
    {
      question: "Apart from the Sun, what is the closest star to Earth?",
      options: ["Sirius", "Polaris", "Alpha Centauri", "Proxima Centauri"],
      correctAnswer: "Proxima Centauri",
    },
    {
      question: "What object is known for its beautiful rings?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: "Saturn",
    },
    {
      question: "Apart from Earth, which planet in our solar system is known to potentially support life?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "What do we call natural objects that orbit the Sun and are too small to be classified as planets?",
      options: ["Asteroids", "Comets", "Meteors", "Satellites"],
      correctAnswer: "Asteroids",
    },
    {
      question: "What force holds planets in orbit around the Sun?",
      options: ["Magnetism", "Gravity", "Friction", "Centrifugal force"],
      correctAnswer: "Gravity",
    },
    {
      question: "What celestial body is made up of hot plasma and provides light and heat for our solar system?",
      options: ["Moon", "Planet", "Star", "Asteroid"],
      correctAnswer: "Star",
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(selectedAnswer);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

return (
    <div className="relative">
        <div className="fixed top-0 left-0 h-screen bg-sidebar md:w-72">
            <Sidebar />
        </div>
        <div className="quiz-app p-8 bg-white rounded-lg md:pl-80 md:pr-4">
            {showScore ? (
                <div className="score-section text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        You scored {score} out of {questions.length}
                    </h2>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                        onClick={resetQuiz}
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div>
                    <div className="question-section mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            Question {currentQuestion + 1}/{questions.length}
                        </h2>
                        <div className="question-text">
                            {questions[currentQuestion].question}
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option) => (
                            <button
                                key={option}
                                className={`${
                                    selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                                } hover:bg-gray-300 hover:text-gray-800 font-semibold py-2 px-4 rounded mr-2 mb-2`}
                                onClick={() => handleAnswerOptionClick(option)}
                                style={{ cursor: "pointer" }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
);
};

export default QuizApp;
