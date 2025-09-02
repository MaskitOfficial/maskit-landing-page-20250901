"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 pt-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="z-10 lg:col-span-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-[#CE2C4F]">매출은 올리고</span><br/>
              <span className="text-[#CE2C4F]">인건비는 줄이는</span><br/>
              모바일 티켓 서비스
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              티켓부터 굿즈, 후원금까지 모든 수익을 하나의 서비스로!<br/>
              10분만에 티켓 판매를 시작하고, 추가 매출까지 만들어보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#apply" 
                className="bg-[#CE2C4F] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#b8243f] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                ✉️ 무료 상담 신청
              </Link>
            </div>
          </div>
          
          {/* Hero Visual - 모바일에서 숨김 */}
          <div className="hidden lg:block relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/ticket.png"
                alt="마스킷 모바일 티켓 서비스"
                width={400}
                height={500}
                className="w-full h-auto"
                priority
              />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shine_3s_infinite] transform -skew-x-12"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="hidden lg:block absolute top-[8%] -right-12 bg-white rounded-xl shadow-lg p-4 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center text-sm mb-2">📊</div>
              <div className="font-semibold text-gray-800 text-sm">고객 데이터 관리</div>
              <div className="text-gray-500 text-xs">체계적 관객 분석</div>
            </div>
            
            <div className="hidden lg:block absolute bottom-[8%] -left-12 bg-white rounded-xl shadow-lg p-4 animate-[float_6s_ease-in-out_infinite] [animation-delay:2s]">
              <div className="w-8 h-8 bg-cyan-200 rounded-lg flex items-center justify-center text-sm mb-2">⚡</div>
              <div className="font-semibold text-gray-800 text-sm">10분 티켓 오픈</div>
              <div className="text-gray-500 text-xs">즉시 판매 시작</div>
            </div>
            
            <div className="hidden lg:block absolute top-[35%] right-[-140px] bg-white rounded-xl shadow-lg p-4 animate-[float_6s_ease-in-out_infinite] [animation-delay:4s]">
              <div className="w-8 h-8 bg-pink-200 rounded-lg flex items-center justify-center text-sm mb-2">🎯</div>
              <div className="font-semibold text-gray-800 text-sm">복수 예매처 통합</div>
              <div className="text-gray-500 text-xs">한눈에 데이터 관리</div>
            </div>

            <div className="hidden lg:block absolute top-[15%] left-[10%] bg-white rounded-xl shadow-lg p-4 animate-[float_6s_ease-in-out_infinite] [animation-delay:6s]">
              <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center text-sm mb-2">💝</div>
              <div className="font-semibold text-gray-800 text-sm">굿즈/후원금 매출 확대</div>
              <div className="text-gray-500 text-xs">추가 수익원 창출</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;