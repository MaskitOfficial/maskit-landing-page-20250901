import React from 'react';
import Image from 'next/image';

const PartnersSection: React.FC = () => {
  // 파트너사 로고 데이터 (실제 이미지 파일에 맞춰 수정)
  const partners = [
    { name: '파트너사 1', src: '/partners/partner1.jpg', alt: '파트너사 1 로고' },
    { name: '파트너사 2', src: '/partners/partner2.png', alt: '파트너사 2 로고' },
    { name: '파트너사 3', src: '/partners/partner3.jpg', alt: '파트너사 3 로고' },
    { name: '파트너사 4', src: '/partners/partner4.png', alt: '파트너사 4 로고' },
    { name: '파트너사 5', src: '/partners/partner5.jpg', alt: '파트너사 5 로고' },
    { name: '파트너사 6', src: '/partners/partner6.jpg', alt: '파트너사 6 로고' },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            함께하는 파트너사
          </h2>
          <p className="text-lg text-gray-600">
            100+ 공연팀이 선택한 신뢰의 서비스
          </p>
        </div>
        
        {/* 데스크톱: 그리드 레이아웃 */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-6 items-center justify-items-center max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
            >
              <div className="relative w-full h-12 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 모바일/태블릿: 무한 스크롤 */}
        <div className="lg:hidden overflow-hidden">
          <div className="flex animate-scroll">
            {/* 첫 번째 세트 */}
            {partners.map((partner, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm mx-3 w-32"
              >
                <div className="relative w-20 h-12 grayscale">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
            {/* 두 번째 세트 (무한 스크롤을 위한 복제) */}
            {partners.map((partner, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm mx-3 w-32"
              >
                <div className="relative w-20 h-12 grayscale">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
