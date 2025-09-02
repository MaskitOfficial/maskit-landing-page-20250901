import React from 'react';

const IssuesSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            이 상황, 당신의<br className="md:hidden"/> 이야기인가요?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 데스크톱/태블릿: 세로 레이아웃 */}
          <div className="hidden md:block relative p-10 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-red-50 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-5xl mb-6 leading-none">💰</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">인건비 부담</h3>
            <p className="text-gray-600 text-lg leading-relaxed">티켓박스 알바비는 부담되는데, 최저시급은 매년 올라가네요.</p>
          </div>
          
          {/* 모바일: 가로 레이아웃 */}
          <div className="md:hidden relative p-4 rounded-2xl border border-gray-200 bg-red-50 flex items-center gap-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-3xl flex-shrink-0">💰</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">인건비 부담</h3>
              <p className="text-gray-600 text-sm">티켓박스 알바비 부담, 최저시급은 매년 상승</p>
            </div>
          </div>
          
          {/* 데스크톱/태블릿: 세로 레이아웃 */}
          <div className="hidden md:block relative p-10 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-orange-50 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-5xl mb-6 leading-none">⏰</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">시간 소모</h3>
            <p className="text-gray-600 text-lg leading-relaxed">티켓 플랫폼에 공연 등록하는데 시간이 너무 많이 소요돼요.</p>
          </div>
          
          {/* 모바일: 가로 레이아웃 */}
          <div className="md:hidden relative p-4 rounded-2xl border border-gray-200 bg-orange-50 flex items-center gap-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-3xl flex-shrink-0">⏰</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">시간 소모</h3>
              <p className="text-gray-600 text-sm">티켓 플랫폼 등록에 과도한 시간 소요</p>
            </div>
          </div>
          
          {/* 데스크톱/태블릿: 세로 레이아웃 */}
          <div className="hidden md:block relative p-10 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-purple-50 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-5xl mb-6 leading-none">📊</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">데이터 부재</h3>
            <p className="text-gray-600 text-lg leading-relaxed">지난번에 왔던 관객, 다시 불러볼 수 없을까요?</p>
          </div>

          {/* 모바일: 가로 레이아웃 */}
          <div className="md:hidden relative p-4 rounded-2xl border border-gray-200 bg-purple-50 flex items-center gap-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-3xl flex-shrink-0">📊</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">데이터 부재</h3>
              <p className="text-gray-600 text-sm">기존 관객 재방문 유도 데이터 부족</p>
            </div>
          </div>

          {/* 데스크톱/태블릿: 세로 레이아웃 */}
          <div className="hidden md:block relative p-10 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-blue-50 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-5xl mb-6 leading-none">📉</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">수익 한계</h3>
            <p className="text-gray-600 text-lg leading-relaxed">티켓 판매만으로는 한정적이예요. 추가 수익원 확보가 절실해요.</p>
          </div>

          {/* 모바일: 가로 레이아웃 */}
          <div className="md:hidden relative p-4 rounded-2xl border border-gray-200 bg-blue-50 flex items-center gap-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE2C4F] rounded-t-2xl"></div>
            <div className="text-3xl flex-shrink-0">📉</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">수익 한계</h3>
              <p className="text-gray-600 text-sm">티켓 외 추가 수익원 확보 필요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssuesSection;
