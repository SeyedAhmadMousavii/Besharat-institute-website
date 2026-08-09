"use client";

import { useState, useEffect } from "react";
import { questionsBank } from "./questions";

export default function Exam1Page() {
  const [examQuestions, setExamQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = [...questionsBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 40);
    setExamQuestions(selected);
  }, []);

  const handleAnswer = (questionId, selectedOption) => {
    if (!submitted) {
      setAnswers(prev => ({
        ...prev,
        [questionId]: selectedOption
      }));
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    examQuestions.forEach(q => {
      if (answers[q.id] === q.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleReset = () => {
    const shuffled = [...questionsBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 40);
    setExamQuestions(selected);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  if (examQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1535] to-[#1a2a6c]">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#f9ca24] mx-auto"></div>
            <div className="absolute inset-0 rounded-full h-16 w-16 border-t-4 border-[#ffd700] animate-ping opacity-30"></div>
          </div>
          <p className="mt-6 text-[#f9ca24] text-lg font-medium">در حال آماده‌سازی سوالات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1535] via-[#16215e] to-[#1a2a6c] py-8 px-4">
      <div className="max-w-4xl mx-auto">
      
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#f9ca24] blur-2xl opacity-20 rounded-full"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f9ca24] to-[#ffd700] bg-clip-text text-transparent">
              📚 سامانه آزمون
            </h1>
          </div>
          <p className="text-[#f9ca24]/70 mt-3 text-lg">40 سوال تصادفی | پاسخ‌نامه هوشمند</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f9ca24] to-[#ffd700] mx-auto mt-4 rounded-full"></div>
        </div>

        {!submitted ? (
          <>
       
            <div className="space-y-6">
              {examQuestions.map((q, index) => (
                <div 
                  key={q.id} 
                  className="group backdrop-blur-sm bg-[#0f1535]/40 rounded-2xl p-6 border border-[#f9ca24]/20 hover:border-[#f9ca24]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,202,36,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#f9ca24] to-[#ffd700] rounded-xl w-10 h-10 flex items-center justify-center shadow-lg">
                      <span className="text-[#0f1535] font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-5 leading-relaxed">{q.question}</h3>
                      <div className="grid gap-3">
                        {q.options.map((option, optIndex) => (
                          <label
                            key={optIndex}
                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                              answers[q.id] === option
                                ? "bg-gradient-to-r from-[#f9ca24]/20 to-[#ffd700]/10 border-2 border-[#f9ca24] shadow-[0_0_15px_rgba(249,202,36,0.3)]"
                                : "bg-[#0f1535]/60 border border-[#f9ca24]/10 hover:bg-[#f9ca24]/5 hover:border-[#f9ca24]/30"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q-${q.id}`}
                              value={option}
                              checked={answers[q.id] === option}
                              onChange={() => handleAnswer(q.id, option)}
                              className="w-4 h-4 accent-[#f9ca24]"
                            />
                            <span className="text-gray-200 text-sm md:text-base">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          
            <div className="mt-10 text-center">
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== 40}
                className={`relative px-10 py-4 rounded-xl font-bold text-[#0f1535] transition-all duration-300 overflow-hidden group ${
                  Object.keys(answers).length === 40
                    ? "bg-gradient-to-r from-[#f9ca24] to-[#ffd700] hover:shadow-[0_0_30px_rgba(249,202,36,0.5)] hover:scale-105"
                    : "bg-gray-500 cursor-not-allowed opacity-50"
                }`}
              >
                <span className="relative z-10 text-lg">
                  ✨ ثبت آزمون ({Object.keys(answers).length}/40 پاسخ داده شده)
                </span>
                {Object.keys(answers).length === 40 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#f9ca24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            </div>
          </>
        ) : (
       
          <div className="backdrop-blur-md bg-[#0f1535]/60 rounded-2xl border border-[#f9ca24]/30 p-8 text-center shadow-2xl">
            <div className="mb-6 relative">
              <div className="w-36 h-36 mx-auto bg-gradient-to-br from-[#f9ca24]/20 to-[#ffd700]/10 rounded-full flex items-center justify-center border-4 border-[#f9ca24] shadow-[0_0_50px_rgba(249,202,36,0.3)]">
                <span className="text-5xl font-bold text-[#f9ca24]">{score}</span>
                <span className="text-2xl text-[#ffd700]">/40</span>
              </div>
              <div className="absolute inset-0 w-36 h-36 mx-auto bg-[#f9ca24] rounded-full blur-3xl opacity-10 -z-10"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">نتیجه آزمون شما</h2>
            <p className="text-[#f9ca24] text-lg mb-8">
              شما به <span className="font-bold text-2xl">{score}</span> سوال از 40 سوال پاسخ صحیح داده‌اید.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gradient-to-r from-[#f9ca24] to-[#ffd700] text-[#0f1535] font-bold rounded-xl hover:shadow-[0_0_25px_rgba(249,202,36,0.4)] transition-all duration-300 hover:scale-105"
              >
                🔄 شروع مجدد با سوالات جدید
              </button>
             
            </div>
            {/* Answer Sheet */}
<div className="mt-12 text-right">
  <h3 className="text-3xl font-bold text-[#f9ca24] mb-6 text-center">
    📖 پاسخنامه آزمون
  </h3>

  <div className="space-y-6">
    {examQuestions.map((q, index) => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.answer;

      return (
        <div
          key={q.id}
          className={`rounded-2xl p-5 border ${
            isCorrect
              ? "border-green-500 bg-green-500/10"
              : "border-red-500 bg-red-500/10"
          }`}
        >
          <h4 className="text-lg font-bold text-white mb-4">
            {index + 1}. {q.question}
          </h4>

          <p className="mb-2">
            <span className="font-bold text-gray-300">
              پاسخ شما:
            </span>{" "}
            <span
              className={
                isCorrect
                  ? "text-green-400 font-bold"
                  : "text-red-400 font-bold"
              }
            >
              {userAnswer}
            </span>
          </p>

          {!isCorrect && (
            <p>
              <span className="font-bold text-gray-300">
                پاسخ صحیح:
              </span>{" "}
              <span className="text-green-400 font-bold">
                {q.answer}
              </span>
            </p>
          )}
        </div>
      );
    })}
  </div>
</div>
          </div>
        )}
      </div>
    </div>
  );
}