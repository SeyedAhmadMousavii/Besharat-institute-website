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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#D4AF37] mx-auto"></div>
            <div className="absolute inset-0 rounded-full h-16 w-16 border-t-4 border-[#D4AF37] animate-ping opacity-30"></div>
          </div>
          <p className="mt-6 text-[#D4AF37] text-lg font-medium">در حال آماده‌سازی سوالات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
      
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-20 rounded-full"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold text-[#000080]">
              📚 سامانه آزمون
            </h1>
          </div>
          <p className="text-[#1A1A2E] mt-3 text-lg">40 سوال تصادفی | پاسخ‌نامه هوشمند</p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {!submitted ? (
          <>
       
            <div className="space-y-6">
              {examQuestions.map((q, index) => (
                <div 
                  key={q.id} 
                  className="group bg-white rounded-2xl p-6 border-2 border-[#E8E8F0] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37] rounded-xl w-10 h-10 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#000080] mb-5 leading-relaxed">{q.question}</h3>
                      <div className="grid gap-3">
                        {q.options.map((option, optIndex) => (
                          <label
                            key={optIndex}
                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                              answers[q.id] === option
                                ? "bg-[#D4AF37]/10 border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                : "bg-[#F8F9FA] border-2 border-[#E8E8F0] hover:border-[#D4AF37]/50 hover:bg-[#F8F9FA]/80"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q-${q.id}`}
                              value={option}
                              checked={answers[q.id] === option}
                              onChange={() => handleAnswer(q.id, option)}
                              className="w-4 h-4 accent-[#D4AF37]"
                            />
                            <span className="text-[#1A1A2E] text-sm md:text-base">{option}</span>
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
                className={`relative px-10 py-4 rounded-xl font-bold text-white transition-all duration-300 overflow-hidden group ${
                  Object.keys(answers).length === 40
                    ? "bg-[#D4AF37] hover:bg-[#B8960F] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105"
                    : "bg-gray-400 cursor-not-allowed opacity-50"
                }`}
              >
                <span className="relative z-10 text-lg">
                  ✨ ثبت آزمون ({Object.keys(answers).length}/40 پاسخ داده شده)
                </span>
              </button>
            </div>
          </>
        ) : (
       
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 text-center shadow-xl">
            <div className="mb-6 relative">
              <div className="w-36 h-36 mx-auto bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-full flex items-center justify-center border-4 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <span className="text-5xl font-bold text-[#D4AF37]">{score}</span>
                <span className="text-2xl text-[#D4AF37]">/40</span>
              </div>
              <div className="absolute inset-0 w-36 h-36 mx-auto bg-[#D4AF37] rounded-full blur-3xl opacity-10 -z-10"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-[#000080] mb-3">نتیجه آزمون شما</h2>
            <p className="text-[#1A1A2E] text-lg mb-8">
              شما به <span className="font-bold text-2xl text-[#D4AF37]">{score}</span> سوال از 40 سوال پاسخ صحیح داده‌اید.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#D4AF37] text-white font-bold rounded-xl hover:bg-[#B8960F] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
              >
                🔄 شروع مجدد با سوالات جدید
              </button>
             
            </div>
            {/* Answer Sheet */}
<div className="mt-12 text-right">
  <h3 className="text-3xl font-bold text-[#000080] mb-6 text-center">
    📖 پاسخنامه آزمون
  </h3>

  <div className="space-y-6">
    {examQuestions.map((q, index) => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.answer;

      return (
        <div
          key={q.id}
          className={`rounded-2xl p-5 border-2 ${
            isCorrect
              ? "border-green-500 bg-green-50"
              : "border-red-500 bg-red-50"
          }`}
        >
          <h4 className="text-lg font-bold text-[#000080] mb-4">
            {index + 1}. {q.question}
          </h4>

          <p className="mb-2">
            <span className="font-bold text-[#1A1A2E]">
              پاسخ شما:
            </span>{" "}
            <span
              className={
                isCorrect
                  ? "text-green-600 font-bold"
                  : "text-red-600 font-bold"
              }
            >
              {userAnswer}
            </span>
          </p>

          {!isCorrect && (
            <p>
              <span className="font-bold text-[#1A1A2E]">
                پاسخ صحیح:
              </span>{" "}
              <span className="text-green-600 font-bold">
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