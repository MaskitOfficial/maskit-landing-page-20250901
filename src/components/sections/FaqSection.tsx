"use client";

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "서비스 가입은 어떻게 하나요?",
      answer: "FAQ 상단의 문의하기 항목을 작성하시어 '제출하기' 버튼을 눌러주시면 됩니다. 서비스 비용 협의 및 계약 완료 후 계정을 만들어드립니다."
    },
    {
      question: "서비스 상품이 어떻게 구분되나요?",
      answer: "큐리스는 티켓 서비스를 [예매 - 티켓 발권 - 검표]로 구분합니다. \n고객사 상황에 맞추어 예매부터 서비스를 제공할 수도 있고, 다른 예매처를 사용하시는 경우 티켓 발권부터 서비스를 제공하기도 합니다."
    },
    {
      question: "초대권도 서비스 가능한가요?",
      answer: "네, 확정된 명단에 대한 티켓 발송 서비스도 가능합니다."
    },
    {
      question: "데이터는 어떻게 보호되나요?",
      answer: "모든 데이터는 암호화되어 저장되며, 정기적인 보안 감사와 업데이트를 통해 최고 수준의 보안을 유지하고 있습니다."
    },
    {
      question: "기술 지원은 어떻게 받을 수 있나요?",
      answer: "이메일, 실시간 채팅, 전화 등 다양한 채널을 통해 24/7 기술 지원을 제공하고 있습니다."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">자주 묻는 질문</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            서비스에 대해 궁금한 점이 있으신가요? 가장 자주 묻는 질문들을 모았습니다.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;