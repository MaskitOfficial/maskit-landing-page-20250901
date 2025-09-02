'use client';

import React from 'react';

interface SolutionCardData {
  id: number;
  title: string;
  description: string;
  features: string[];
}

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-[#CE2C4F] mb-2">{value}</div>
    <div className="text-sm md:text-base text-gray-600">{label}</div>
  </div>
);

const ServiceFlowDiagram: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-red-100 p-6 md:p-8 rounded-2xl mb-12">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-gray-800">
        서비스 플로우
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        {[
          { title: "티켓 생성", desc: "10분만에 티켓 설정" },
          { title: "판매 시작", desc: "즉시 티켓 판매 개시" },
          { title: "데이터 수집", desc: "관객 정보 자동 수집" },
          { title: "매출 확장", desc: "굿즈/후원금 추가 매출" }
        ].map((step, index) => (
          <React.Fragment key={index}>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-[#CE2C4F] text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                {index + 1}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
            {index < 3 && (
              <div className="hidden md:block w-8 h-0.5 bg-red-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const SolutionCard: React.FC<{ card: SolutionCardData; index: number }> = ({ card }) => {
  return (
    <div className="bg-white h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#CE2C4F] rounded-lg p-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        {card.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {card.description}
      </p>
      <div className="space-y-3">
        {card.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#CE2C4F] rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SolutionSectionNew: React.FC = () => {
  const solutionCards: SolutionCardData[] = [
    {
      id: 1,
      title: "간편한 티켓 생성",
      description: "복잡한 설정 없이 10분만에 티켓을 생성하고 판매를 시작할 수 있습니다.",
      features: [
        "직관적인 티켓 설정 인터페이스",
        "다양한 티켓 타입 지원",
        "실시간 미리보기 제공"
      ]
    },
    {
      id: 2,
      title: "통합 데이터 관리",
      description: "여러 예매처의 데이터를 하나로 통합하여 체계적으로 관리합니다.",
      features: [
        "복수 예매처 통합 관리",
        "실시간 판매 현황 모니터링",
        "고객 데이터 자동 수집"
      ]
    },
    {
      id: 3,
      title: "추가 매출 창출",
      description: "티켓 판매 외에도 굿즈와 후원금으로 추가 수익을 만들어보세요.",
      features: [
        "굿즈 판매 기능",
        "후원금 모금 시스템",
        "간편한 결제 연동"
      ]
    },
    {
      id: 4,
      title: "모바일 최적화",
      description: "모바일 환경에 완벽 최적화되어 언제 어디서나 편리하게 이용하세요.",
      features: [
        "반응형 웹 디자인",
        "터치 친화적 인터페이스",
        "빠른 로딩 속도"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            해결책
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            마스킷 하나로 티켓부터 굿즈, 후원금까지 모든 매출을 관리하세요
          </p>
        </div>

        <ServiceFlowDiagram />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutionCards.map((card, index) => (
            <SolutionCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            검증된 성과
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="10분" label="티켓 생성 시간" />
            <StatItem value="30%" label="매출 증가율" />
            <StatItem value="1,000+" label="누적 이벤트" />
            <StatItem value="4.8/5" label="고객 만족도" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSectionNew;
