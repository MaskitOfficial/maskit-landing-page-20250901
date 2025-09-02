import React from 'react';

interface TestimonialProps {
  avatar: string;
  author: string;
  company: string;
  highlight: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ avatar, author, company, highlight, quote }) => {
  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CE2C4F] to-orange-500 rounded-t-2xl"></div>
      
      <div className="flex items-center flex-wrap gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-50 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
          {avatar}
        </div>
        <div className="flex-1 min-w-[100px]">
          <div className="text-base md:text-lg font-semibold text-gray-900 mb-1">{author}</div>
          <div className="text-xs md:text-sm text-gray-600">{company}</div>
        </div>
        <div className="bg-[#CE2C4F] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs font-semibold whitespace-nowrap">
          {highlight}
        </div>
      </div>
      
      <blockquote className="text-sm md:text-lg text-gray-700 italic leading-relaxed relative pl-4 md:pl-6">
        <span className="absolute left-0 top-[-6px] md:top-[-8px] text-2xl md:text-4xl text-[#CE2C4F] font-serif leading-none">"</span>
        {quote}
      </blockquote>
    </div>
  );
};

const FeedbackSection: React.FC = () => {
  const testimonials = [
    {
      avatar: "💰",
      author: "김ㅇㅇ 대표",
      company: "오픈런 공연",
      highlight: "알바비 줄였어요",
      quote: "알바 비용을 완전히 줄이고도 다양한 예매처를 통합해주는 디지털 티켓 서비스를 이용하고 있어요!"
    },
    {
      avatar: "⚡",
      author: "이ㅁㅁ 대표", 
      company: "1인 기획사",
      highlight: "급했던 공연 빨리",
      quote: "급하게 공연을 열어야 했는데 10분만에 티켓을 오픈할 수 있어서 정말 큰 도움이 됐어요!"
    },
    {
      avatar: "📊",
      author: "박☆☆ 대표",
      company: "뮤지컬 제작",
      highlight: "누적 관객 프로모션",
      quote: "누적된 관객 데이터로 타겟 프로모션을 할 수 있어서 마케팅 효과가 정말 좋아졌어요!"
    },
    {
      avatar: "�",
      author: "최△△ 대표",
      company: "전시 기획",
      highlight: "매출 20% 이상 증가",
      quote: "굿즈와 후원금을 티켓과 함께 판매하니까 매출이 20% 이상 올랐어요. 정말 놀라워요!"
    }
  ];

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            실제 이용자들의<br className="md:hidden"/> 매출 향상 후기
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatar={testimonial.avatar}
              author={testimonial.author}
              company={testimonial.company}
              highlight={testimonial.highlight}
              quote={testimonial.quote}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeedbackSection;