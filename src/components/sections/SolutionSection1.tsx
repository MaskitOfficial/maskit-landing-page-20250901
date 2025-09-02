'use client';

import React from 'react';

const SolutionSection1: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            당신에게 필요한 단 하나의 솔루션
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            상황에 맞는 맞춤형 서비스
          </p>
        </div>

        {/* Service Flow - Responsive Layout */}
        
        {/* Mobile View - Vertical Flow */}
        <div className="flex flex-col items-center justify-center gap-6 mb-20 lg:hidden">
          {/* Top Boxes - Mobile Stacked */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <div className="flex-1 h-24 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 text-gray-700 rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm font-bold mb-1">예매처 보유</h3>
              <p className="text-xs text-gray-600">인터파크, 네이버</p>
            </div>
            <div className="flex-1 h-24 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 text-gray-700 rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm font-bold mb-1">예매부터 필요</h3>
              <p className="text-xs text-gray-600">새로운 기획사</p>
            </div>
          </div>

          {/* Connection Line */}
          <div className="w-0.5 h-12 bg-gradient-to-b from-gray-300 to-[#CE2C4F] mx-auto"></div>

          {/* Center Box - Mobile */}
          <div className="w-full max-w-md mx-auto h-64 bg-gradient-to-br from-[#CE2C4F] to-[#a02142] text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl transform transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            <h3 className="text-5xl font-black mb-4 relative z-10">Qless</h3>
            <div className="text-lg font-semibold mb-2 relative z-10">예매 + 발권 + 검표</div>
            <div className="text-sm opacity-70 mb-2 relative z-10">또는</div>
            <div className="text-lg font-semibold mb-3 relative z-10">발권 + 검표</div>
            <div className="text-sm opacity-80 relative z-10">상황에 맞게 선택</div>
          </div>

          {/* Connection Line */}
          <div className="w-0.5 h-12 bg-gradient-to-b from-[#CE2C4F] to-gray-300 mx-auto"></div>

          {/* Bottom Box - Mobile */}
          <div className="w-full max-w-xs h-24 bg-gradient-to-br from-[#CE2C4F] to-[#a02142] text-white rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-sm font-bold mb-1">모바일 티켓</h3>
            <p className="text-xs text-white/90">즉시 입장 가능</p>
          </div>
        </div>

        {/* Desktop View - Horizontal Flow */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-8 mb-20">
          {/* Left Boxes */}
          <div className="flex flex-col gap-3">
            <div className="w-48 h-28 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 text-gray-700 rounded-xl p-3 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-base font-bold mb-1">예매처 보유</h3>
              <p className="text-sm text-gray-600">인터파크, 네이버</p>
            </div>
            <div className="w-48 h-28 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 text-gray-700 rounded-xl p-3 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-base font-bold mb-1">예매부터 필요</h3>
              <p className="text-sm text-gray-600">새로운 기획사</p>
            </div>
          </div>

          {/* Connection Line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-[#CE2C4F]"></div>

          {/* Center Box - Desktop */}
          <div className="w-[42rem] h-80 bg-gradient-to-br from-[#CE2C4F] to-[#a02142] text-white rounded-3xl p-12 flex flex-col justify-center items-center text-center shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"></div>
            <h3 className="text-7xl font-black mb-6 relative z-10">Qless</h3>
            <div className="text-2xl font-semibold mb-3 relative z-10">예매 + 발권 + 검표</div>
            <div className="text-xl opacity-70 mb-3 relative z-10">또는</div>
            <div className="text-2xl font-semibold mb-4 relative z-10">발권 + 검표</div>
            <div className="text-lg opacity-80 relative z-10">상황에 맞게 선택</div>
          </div>

          {/* Connection Line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#CE2C4F] to-gray-300"></div>

          {/* Right Box */}
          <div className="w-48 h-28 bg-gradient-to-br from-[#CE2C4F] to-[#a02142] text-white rounded-xl p-3 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-base font-bold mb-1">모바일 티켓</h3>
            <p className="text-sm text-white/90">즉시 입장 가능</p>
          </div>
        </div>

        {/* Features Grid - Responsive */}
        
        {/* Mobile: 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-500">🎯</div>
            <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">무인 티켓박스</h3>
            <p className="text-xs text-gray-600 leading-tight">티켓박스 직원 없이 통합 서비스</p>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm transition-all duration-500 hover:border-yellow-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-500">⚡</div>
            <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-yellow-600 transition-colors duration-300">10분만에 오픈</h3>
            <p className="text-xs text-gray-600 leading-tight">계약부터 예매 오픈까지 10분</p>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm transition-all duration-500 hover:border-purple-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-500">📊</div>
            <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors duration-300">고객 데이터 관리</h3>
            <p className="text-xs text-gray-600 leading-tight">AI와 함께 관객 이력 분석</p>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm transition-all duration-500 hover:border-green-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-500">💝</div>
            <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">굿즈/기부금 수익</h3>
            <p className="text-xs text-gray-600 leading-tight">부가 서비스 통합 판매/관리</p>
          </div>
        </div>

        {/* Desktop: 1x4 Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0 mt-1">🎯</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">무인 티켓박스</h3>
                <p className="text-sm text-gray-600 leading-relaxed">티켓박스 직원 없이, 여러 개 예매처 통합하여 티켓 서비스합니다.</p>
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:border-yellow-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0 mt-1">⚡</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">10분만에 오픈</h3>
                <p className="text-sm text-gray-600 leading-relaxed">서비스 사용 계약부터 예매 오픈까지 단 10분이면 완료됩니다.</p>
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:border-purple-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0 mt-1">📊</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">고객 데이터 관리</h3>
                <p className="text-sm text-gray-600 leading-relaxed">모든 관객의 관람 이력을 AI와 함께 관리하고 분석합니다.</p>
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:border-green-200 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-white relative overflow-hidden">
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0 mt-1">💝</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">굿즈/기부금으로 수익 확대</h3>
                <p className="text-sm text-gray-600 leading-relaxed">티켓 외 부가 서비스까지 한번에 판매/관리 할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection1;
